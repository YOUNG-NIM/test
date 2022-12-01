import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "이메일, 비밀번호",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "이메일", type: "email", placeholder: "user@email.com" },
                password: { label: "비밀번호", type: "password" }
            },
            async authorize(credentials, req) {

                if ( credentials?.email === "testuser@email.com" && credentials.password === "test" ) {

                    const user = { id: 1, name: "test user", email: "testuser@example.com" }
                    return user;

                } else {
                    return null
                }
            }
        })
    ],
    secret: process.env.SECRET,
})