
import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from 'resend';
import { KyselyAdapter } from "@auth/kysely-adapter";
import { db } from "@/lib/db";
import NotionMagicLinkEmail from "../../emails/emails/notion-magic-link";
import { siteConfig } from "./site";


const resend = new Resend(process.env.RESEND_API_KEY);


const providerConfig = EmailProvider({
  sendVerificationRequest: async ({ identifier, url, provider }) => {
    try {
      const isDevOrStaging = process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview"
      const emailAddress = isDevOrStaging ? "delivered@resend.dev" : identifier;


      //@ts-ignore
      const data = await resend.emails.send({
        from: // TODO: Add your email address here,
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
  },
  callbacks: {
    session: async ({ session, token, user }) => {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
    jwt: async ({ token, user }) => {
      if (!token.email) {
        return token
      }

      const dbUser = await db.selectFrom("User").where("email", "=", token.email).selectAll().executeTakeFirst()

      if (!dbUser) {
        if (user) {
          token.id = user?.id
        }
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
  }
}