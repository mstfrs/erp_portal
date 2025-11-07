import { NextResponse } from "next/server";

/**
 * Frappe'den logout yapar
 */
export async function POST(request) {
  try {
    console.log("🔓 Frappe logout denemesi");

    // Frappe logout isteği
    const frappeRes = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_NAME}/api/method/logout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    console.log("✅ Frappe logout başarılı");

    // Response oluştur
    const response = NextResponse.json({
      success: true,
      message: "Logout başarılı",
    });

    // Cookie'leri temizle
    response.cookies.set("sid", "", { maxAge: 0 });
    response.cookies.set("system_user", "", { maxAge: 0 });
    response.cookies.set("full_name", "", { maxAge: 0 });
    response.cookies.set("user_id", "", { maxAge: 0 });
    response.cookies.set("user_image", "", { maxAge: 0 });

    return response;
  } catch (error) {
    console.error("❌ Frappe logout error:", {
      message: error.message,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        success: false,
        message: "Logout başarısız",
        error: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

