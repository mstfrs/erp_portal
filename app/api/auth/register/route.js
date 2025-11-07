import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      reference,
      company_name,
      first_name,
      last_name,
      email,
      phone,
      password,
    } = body;

    // Validasyon
    if (
      !reference ||
      !company_name ||
      !first_name ||
      !last_name ||
      !email ||
      !phone ||
      !password
    ) {
      return NextResponse.json(
        { success: false, message: "Tüm alanlar gereklidir" },
        { status: 400 }
      );
    }

    console.log("📝 Kayıt işlemi başlıyor:", {
      email,
      first_name,
      last_name,
      has_password: !!password
    });

    // Custom Frappe method kullan (API Key GEREKMİYOR!)
    // Bu method guest access ile çalışır ve şifre kaydeder
    const signUpResponse = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_NAME}/api/method/culinary_portal.portal_endpoint.register_customer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          first_name: first_name,
          last_name: last_name,
          phone: phone,
          password: password,
          reference_code: reference,
          company_name: company_name,
        }),
      }
    );

    const signUpData = await signUpResponse.json();

    if (!signUpResponse.ok) {
      console.error("❌ Frappe User oluşturma hatası:", {
        status: signUpResponse.status,
        data: signUpData
      });

      // Frappe'den gelen hata mesajını kontrol et
      let errorMessage = "Kayıt işlemi başarısız oldu";
      
      // _server_messages genellikle JSON string olarak gelir
      if (signUpData._server_messages) {
        try {
          const messages = JSON.parse(signUpData._server_messages);
          if (Array.isArray(messages) && messages.length > 0) {
            const parsedMsg = JSON.parse(messages[0]);
            errorMessage = parsedMsg.message || parsedMsg;
          }
        } catch (e) {
          errorMessage = signUpData._server_messages;
        }
      } else if (signUpData.exception) {
        errorMessage = signUpData.exception;
      } else if (signUpData.message) {
        errorMessage = signUpData.message;
      }
      
      // E-posta zaten kayıtlı hatası
      if (errorMessage.includes("already exists") || 
          errorMessage.includes("already registered") || 
          errorMessage.includes("duplicate") ||
          errorMessage.includes("zaten kayıtlı")) {
        return NextResponse.json(
          { success: false, message: "Bu e-posta adresi zaten kayıtlı" },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { 
          success: false, 
          message: typeof errorMessage === 'string' ? errorMessage : "Kayıt işlemi başarısız oldu",
          error: errorMessage
        },
        { status: signUpResponse.status }
      );
    }

    console.log("✅ Kullanıcı başarıyla oluşturuldu:", {
      email,
      response: signUpData
    });

    // Frappe response'u parse et
    const userData = signUpData.message || signUpData;

    // Başarılı kayıt
    return NextResponse.json(
      {
        success: true,
        message: "Kayıt başarılı! Giriş yapabilirsiniz.",
        data: {
          email: email,
          full_name: `${first_name} ${last_name}`,
          user: userData.user || {}
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register API error:", {
      message: error.message,
      stack: error.stack,
      error: error
    });
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Sunucu hatası. Lütfen tekrar deneyin.",
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

