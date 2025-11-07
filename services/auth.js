// src/lib/auth.js
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "erpnext",
      name: "ERPNext",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          // ERPNext login
          const response = await fetch(`${process.env.NEXT_PUBLIC_ERPNEXT_URL}/api/method/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              usr: credentials.username,
              pwd: credentials.password,
            }),
          });

          if (response.ok) {
            // Session cookie'sini al
            const setCookieHeader = response.headers.get('set-cookie');
            let sidValue = '';

            if (setCookieHeader) {
              const sidMatch = setCookieHeader.match(/sid=([^;]+)/);
              if (sidMatch) {
                sidValue = sidMatch[1];
              }
            }

            // User bilgilerini al
            const userResponse = await fetch(`${process.env.NEXT_PUBLIC_ERPNEXT_URL}/api/method/frappe.auth.get_logged_user`, {
              headers: {
                'Cookie': `sid=${sidValue}`,
              },
            });

            if (userResponse.ok) {
              const userData = await userResponse.json();
              return {
                id: credentials.username,
                name: userData.message.full_name,
                email: userData.message.email,
                user_type: userData.message.user_type,
                sid: sidValue,
                erpnext_user: userData.message
              };
            }
          }
          
          return null;
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sid = user.sid;
        token.user_type = user.user_type;
        token.erpnext_user = user.erpnext_user;
      }
      return token;
    },
    async session({ session, token }) {
      session.sid = token.sid;
      session.user.user_type = token.user_type;
      session.user.erpnext_user = token.erpnext_user;
      return session;
    },
  },
  pages: {
    signIn: 'auth/login',
  },
  session: {
    strategy: 'jwt',
  },
}