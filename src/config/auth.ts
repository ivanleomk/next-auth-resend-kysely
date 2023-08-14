
import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from 'resend';
import { KyselyAdapter } from "@auth/kysely-adapter";
import { db } from "@/lib/db";
import NotionMagicLinkEmail from "../../emails/emails/notion-magic-link";
import { siteConfig } from "./site";


const resend = new Resend(process.env.RESEND_API_KEY);


const providerConfig = EmailProvider({
  server: {
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.RESEND_API_KEY,
    },
  },
  from: process.env.EMAIL_FROM,

  sendVerificationRequest: async ({ identifier, url, provider }) => {
    try {
      const isDevOrStaging = process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview"
      const emailAddress = isDevOrStaging ? "delivered@resend.dev" : identifier;


      //@ts-ignore
      const data = await resend.emails.send({
        from: 'Ivan Leo <hello@ivanleo.com>',
        to: [emailAddress],
        subject: `Your welcome email to ${siteConfig.name}`,
        react: NotionMagicLinkEmail({ loginUrl: url }),
        headers: {
          "X-Entity-Ref-ID": new Date().getTime() + "",
        }
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
  //@ts-ignore
  adapter: KyselyAdapter(db),
  pages: {
    signIn: "/login"
  }
}