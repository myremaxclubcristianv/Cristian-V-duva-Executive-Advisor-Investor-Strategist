import { NextRequest, NextResponse } from "next/server";
import { deleteStoredPhoto, updateStoredPhoto } from "@/lib/photoStore";
import { verifyAdminRequest } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!verifyAdminRequest(req)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Photo ID is required" },
        { status: 400 }
      );
    }

    const ok = deleteStoredPhoto(id);
    if (!ok) {
      return NextResponse.json(
        { success: false, error: "Photo not found or already deleted" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Photo deleted successfully",
    });
  } catch (error) {
    console.error("[API_PHOTOS_DELETE_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete photo" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!verifyAdminRequest(req)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await req.json();

    const updated = updateStoredPhoto(id, body);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Photo not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      photo: updated,
    });
  } catch (error) {
    console.error("[API_PHOTOS_PATCH_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to update photo" },
      { status: 500 }
    );
  }
}
