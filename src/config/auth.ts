import { EmailTemplate } from "@/emails/welcome-email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from 'resend';



const resend = new Resend(process.env.RESEND_API_KEY);
const prisma = new PrismaClient();

const providerConfig = EmailProvider({
  server: {
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  },
  from: process.env.EMAIL_FROM,
  sendVerificationRequest: async ({ identifier, url, provider }) => {
    try {
      const emailAddress = process.env.NODE_ENV === "development" ? "delivered@resend.dev" : identifier;
      //@ts-ignore
      const data = await resend.emails.send({
        from: 'Ivan Leo <hello@ivanleo.com>',
        to: [emailAddress],
        subject: 'Welcome to Brain Dump!',
        react: EmailTemplate({ loginUrl: url })
      });

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  },
});

export const authOptions: NextAuthOptions = {
  providers: [providerConfig],
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
}