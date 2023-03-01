import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/connectDb";
import User from "@/models/User";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-Mail",
          type: "email",
          placeholder: "maxmustermann",
        },
        password: { label: "Passwort", type: "password" },
      },
      async authorize(credentials, req) {
        dbConnect();
        const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Invalide E-Mail oder Passwort!");
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
          throw new Error("Invalide E-Mail oder Passwort!");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
