import { authOptions } from "@/config/auth";
import { EmailTemplate } from "@/emails/welcome-email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from 'resend';


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };