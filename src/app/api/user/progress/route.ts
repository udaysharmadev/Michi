import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  return NextResponse.json({
    slug: slug || "all",
    progress: {},
    syncedAt: new Date().toISOString(),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    return NextResponse.json({
      success: true,
      updatedCount: Object.keys(body.progress || {}).length,
      syncedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid payload" }, { status: 400 });
  }
}
