import { NextResponse } from "next/server"

/**
 * Frappe'ye login yapar ve cookie'leri tarayıcıya proxy eder
 * Bu sayede Frappe'nin sid cookie'si client tarafında kullanılabilir
 */
export async function POST(request) {
  try {
    const { username, password } = await request.json()

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

    if (!frappeRes.ok) {
      return NextResponse.json(
        { success: false, message: "Frappe login başarısız" },
        { status: 401 }
      )
    }

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
    return NextResponse.json(
      { success: false, message: "Sunucu hatası" },
      { status: 500 }
    )
  }
}

