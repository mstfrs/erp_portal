import { NextResponse } from "next/server"

/**
 * Frappe'ye login yapar ve cookie'leri tarayıcıya proxy eder
 * Bu sayede Frappe'nin sid cookie'si client tarafında kullanılabilir
 */
export async function POST(request) {
  try {
    const { username, password } = await request.json()

    console.log("🔐 Frappe login denemesi:", {
      username,
      url: `${process.env.NEXT_PUBLIC_SITE_NAME}/api/method/login`
    });

    // Frappe login isteği
    const frappeRes = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_NAME}/api/method/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usr: username,
          pwd: password,
        }),
      }
    )

    // Response body'yi oku
    const frappeData = await frappeRes.json().catch(() => ({}));

    if (!frappeRes.ok) {
      console.error("❌ Frappe login hatası:", {
        status: frappeRes.status,
        statusText: frappeRes.statusText,
        data: frappeData
      });

      // Frappe'den gelen hata mesajını parse et
      let errorMessage = "Kullanıcı adı veya şifre hatalı";
      
      if (frappeData._server_messages) {
        try {
          const messages = JSON.parse(frappeData._server_messages);
          if (Array.isArray(messages) && messages.length > 0) {
            const parsedMsg = JSON.parse(messages[0]);
            errorMessage = parsedMsg.message || errorMessage;
          }
        } catch (e) {
          errorMessage = frappeData._server_messages;
        }
      } else if (frappeData.message) {
        errorMessage = frappeData.message;
      } else if (frappeData.exception) {
        errorMessage = frappeData.exception;
      }

      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage,
          error: process.env.NODE_ENV === 'development' ? frappeData : undefined
        },
        { status: 401 }
      )
    }

    console.log("✅ Frappe login başarılı:", username);

    // Response oluştur
    const response = NextResponse.json({
      success: true,
      message: "Frappe cookie set edildi",
    })

    // Frappe'den gelen tüm cookie'leri tarayıcıya ilet
    const setCookieHeaders = frappeRes.headers.getSetCookie?.() || []
    const rawCookie = frappeRes.headers.get("set-cookie")

    if (setCookieHeaders.length > 0) {
      // Modern Next.js - multiple Set-Cookie headers
      setCookieHeaders.forEach((cookie) => {
        response.headers.append("Set-Cookie", cookie)
      })
    } else if (rawCookie) {
      // Fallback - parse cookie string
      const cookies = rawCookie.split(/,(?=\s*\w+=)/)
      cookies.forEach((cookie) => {
        response.headers.append("Set-Cookie", cookie.trim())
      })
    }

    return response
  } catch (error) {
    console.error("❌ Frappe auth error:", {
      message: error.message,
      stack: error.stack
    });

    return NextResponse.json(
      { 
        success: false, 
        message: "Sunucu hatası. Frappe'ye bağlanılamadı.",
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}

