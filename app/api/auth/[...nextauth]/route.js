import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

const authHandler = NextAuth({
  providers: [
    Credentials({
      name: "Frappe",
      credentials: {
        username: { label: "Kullanıcı", type: "text" },
        password: { label: "Şifre", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Frappe login isteği
          const loginRes = await fetch(process.env.NEXT_PUBLIC_SITE_NAME + "/api/method/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              usr: credentials.username,
              pwd: credentials.password,
            }),
          })

          if (!loginRes.ok) return null

          // Frappe login'den dönen sid cookie’sini al
          const rawCookie = loginRes.headers.get("set-cookie")
          const sid = rawCookie?.split(";")[0] // sadece "sid=xxxx" kısmını al

          // Kullanıcı bilgisi
          return {
            id: credentials.username,
            name: credentials.username,
            sid, // sid’i kullanıcı objesine koy
          }
        } catch (e) {
          console.error("Frappe login error:", e)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Session JWT üzerinde dönecek
  },
  callbacks: {
    async jwt({ token, user }) {
      // authorize()’dan dönen user varsa sid’i token’a ekle
      if (user?.sid) {
        token.sid = user.sid
      }
      return token
    },
    async session({ session, token }) {
      // token’daki sid’i session’a ekle → client tarafında kullanılabilir
      if (token?.sid) {
        session.sid = token.sid
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/login", // özel login sayfanız varsa
  },
})

export { authHandler as GET, authHandler as POST }
