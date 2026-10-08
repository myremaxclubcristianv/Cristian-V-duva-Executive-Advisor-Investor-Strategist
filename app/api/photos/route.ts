import { NextRequest, NextResponse } from "next/server";
import {
  getAllStoredPhotos,
  addStoredPhoto,
  uploadToSupabaseStorage,
  PhotoCategory,
  PhotoOrientation,
} from "@/lib/photoStore";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/avif",
];

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB

export async function GET() {
  try {
    const photos = getAllStoredPhotos();
    return NextResponse.json({
      success: true,
      count: photos.length,
      photos,
    });
  } catch (error) {
    console.error("[API_PHOTOS_GET_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Nu s-au putut încărca fotografiile." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const title = ((formData.get("title") as string) || "").trim() || "Cristian Văduva";
    const subtitle = ((formData.get("subtitle") as string) || "").trim();
    const category = ((formData.get("category") as string) || "PORTRAITS").toUpperCase() as PhotoCategory;
    const caption = ((formData.get("caption") as string) || "").trim();
    const location = ((formData.get("location") as string) || "Bucharest").trim();
    const year = ((formData.get("year") as string) || new Date().getFullYear().toString()).trim();
    const orientation = ((formData.get("orientation") || formData.get("aspectRatio") || "landscape") as string).toLowerCase() as PhotoOrientation;
    const featured = formData.get("featured") === "true";
    const hero = formData.get("hero") === "true";

    let src = (formData.get("src") as string) || "";
    let storage_path = "";
    let public_url = src;

    // Process file upload
    if (file && typeof file === "object" && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { success: false, error: "Dimensiunea fișierului depășește limita maximă de 25MB." },
          { status: 400 }
        );
      }

      if (file.type && !ALLOWED_MIME_TYPES.includes(file.type.toLowerCase())) {
        return NextResponse.json(
          { success: false, error: "Formatul fișierului nu este suportat. Folosiți JPG, PNG, WEBP sau AVIF." },
          { status: 400 }
        );
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const extension = path.extname(file.name) || ".jpg";
      const sanitizedName = file.name
        .replace(/[^a-zA-Z0-9.-]/g, "_")
        .toLowerCase();
      const fileName = `${Date.now()}_${sanitizedName || `photo${extension}`}`;

      // 1. Primary: Upload to Supabase Storage if available
      const supabaseResult = await uploadToSupabaseStorage(
        fileName,
        buffer,
        file.type || "image/jpeg"
      );

      if (supabaseResult) {
        src = supabaseResult.publicUrl;
        public_url = supabaseResult.publicUrl;
        storage_path = supabaseResult.storagePath;
      } else {
        // 2. Resilient Fallback: Persistent server directory
        const uploadsDir = path.join(process.cwd(), "public", "uploads", "photos");
        if (!fs.existsSync(uploadsDir)) {
          fs.mkdirSync(uploadsDir, { recursive: true });
        }
        const filePath = path.join(uploadsDir, fileName);
        fs.writeFileSync(filePath, buffer);
        src = `/uploads/photos/${fileName}`;
        public_url = src;
        storage_path = `public/uploads/photos/${fileName}`;
      }
    }

    if (!src) {
      return NextResponse.json(
        { success: false, error: "Vă rugăm selectați o fotografie validă." },
        { status: 400 }
      );
    }

    const created = addStoredPhoto({
      src,
      public_url,
      storage_path,
      alt: title || "Cristian Văduva Official Photography",
      category,
      title,
      subtitle,
      caption,
      location,
      year,
      orientation,
      aspectRatio: orientation,
      featured,
      hero,
      sort_order: 1,
    });

    return NextResponse.json({
      success: true,
      photo: created,
    });
  } catch (error) {
    console.error("[API_PHOTOS_POST_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Eroare internă la salvarea fotografiei." },
      { status: 500 }
    );
  }
}
