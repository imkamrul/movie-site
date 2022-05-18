import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "User name", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        if (credentials.username === "test" && credentials.password === "123") {
          return {
            id: "2",
            name: "test",
            email: "test",
          };
        }
        // log in failed;,
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
};

export default (req, res) => NextAuth(req, res, options);
