import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

const prisma = new PrismaClient();

const devConfig = EmailProvider({
  server: {
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  },
  from: process.env.EMAIL_FROM,
});

const handler = NextAuth({
  providers: [devConfig],
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
});

export { handler as GET, handler as POST };