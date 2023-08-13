import { EmailTemplate } from "@/emails/welcome-email";
import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from 'resend';
import { KyselyAdapter } from "@auth/kysely-adapter";
import { db } from "@/lib/db";


const resend = new Resend(process.env.RESEND_API_KEY);


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

      console.log("Sending Email Now")
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
// TODO: Add in credentials support for local dev. ( A special toggle )

export const authOptions: NextAuthOptions = {
  providers: [providerConfig],
  session: {
    strategy: "jwt",
  },
  //@ts-ignore
  adapter: KyselyAdapter(db),
  pages: {
    signIn: "/login"
  }
}