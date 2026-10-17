import { NextRequest, NextResponse } from "next/server";
import {
  getAllStoredPhotos,
  addStoredPhoto,
  uploadToSupabaseStorage,
  PhotoCategory,
  PhotoOrientation,
} from "@/lib/photoStore";
import { verifyAdminRequest, verifyCsrfOrigin, validateImageBuffer } from "@/lib/adminAuth";
import fs from "fs";
import path from "path";
import crypto from "crypto";

export const dynamic = "force-dynamic";

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/avif",
];

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

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
    // 1. CSRF Protection
    if (!verifyCsrfOrigin(req)) {
      return NextResponse.json(
        { success: false, error: "CSRF verification failed." },
        { status: 403 }
      );
    }

    // 2. Enforce administrative authorization
    if (!verifyAdminRequest(req)) {
      return NextResponse.json(
        { success: false, error: "Acces neautorizat. Autentificarea este obligatorie." },
        { status: 401 }
      );
    }

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

      const extension = path.extname(file.name).toLowerCase() || ".jpg";
      if (!ALLOWED_EXTENSIONS.includes(extension)) {
        return NextResponse.json(
          { success: false, error: "Extensia fișierului nu este permisă." },
          { status: 400 }
        );
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // 3. Binary Magic Bytes Validation (Deep file signature inspection)
      const binaryValidation = validateImageBuffer(buffer);
      if (!binaryValidation.valid) {
        return NextResponse.json(
          { success: false, error: binaryValidation.error || "Fișierul încărcat nu este o imagine validă." },
          { status: 400 }
        );
      }

      // Enforce safe filename and extension derived from verified binary format
      const safeExtension = binaryValidation.extension || ".jpg";
      const baseRaw = path.basename(file.name).replace(/\.[^/.]+$/, "");
      const sanitizedBase = baseRaw.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 40) || "photo";
      const fileName = `${Date.now()}_${crypto.randomUUID().slice(0, 8)}_${sanitizedBase}${safeExtension}`;

      // 4. Primary: Upload to Supabase Storage if available
      const supabaseResult = await uploadToSupabaseStorage(
        fileName,
        buffer,
        binaryValidation.mime || "image/jpeg"
      );

      if (supabaseResult) {
        src = supabaseResult.publicUrl;
        public_url = supabaseResult.publicUrl;
        storage_path = supabaseResult.storagePath;
      } else {
        // In local development/testing without cloud storage, allow local directory
        if (process.env.NODE_ENV !== "production") {
          const uploadsDir = path.join(process.cwd(), "public", "uploads", "photos");
          if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
          }
          const filePath = path.join(uploadsDir, fileName);
          fs.writeFileSync(filePath, buffer);
          src = `/uploads/photos/${fileName}`;
          public_url = src;
          storage_path = `public/uploads/photos/${fileName}`;
        } else {
          // In production, reject ephemeral uploads with a controlled error to prevent phantom uploads
          console.error(
            "[API_PHOTOS_ERROR] Persistent cloud storage (Supabase) is unavailable. Ephemeral local writes are disabled in production."
          );
          return NextResponse.json(
            {
              success: false,
              error:
                "Stocarea persistentă pentru fotografii noi nu este configurată pe server. Vă rugăm să configurați serviciul de stocare în cloud.",
            },
            { status: 503 }
          );
        }
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
