## Introduction

This is an accompanying repo which contains the final source code for how to set up [Next Auth with Resend and the new Kysely adapter](https://www.ivanleo.com/blog/implementing_magic_links_with_resend_kysely_and_next_auth). I used Neon in my example but feel free to use another database if you wish.

To get started, clone this repo and run `npm` to install the dependencies. You will need 

- Resend API Key
- Postgres Database ( Kysely uses postgres as an example so I based it off that )
- Domain Name ( You need to own a domain name so that resend can send some emails for you )

Once you've done so, just fill in the necessary values and you should be good to go!

Note that while in development mode, I've configured emails to be sent to the test email account provided by Resend at `delivered@resend.dev`. You can change this in the `pages/api/auth/[...nextauth].js` file.

You can edit the emails using `React-Email` by running the commands

```bash
cd ./emails
npm install
npm run dev
```

## Deploying

When deploying to Vercel, make sure to provide the following variables 

> Do not provide a NEXTAUTH_URL environment variable in Vercel, the kind folks at Auth.js have managed to fix up a vercel integration.

```
DATABASE_URL= 
RESEND_API_KEY=

# Next Auth Config
NEXTAUTH_SECRET=

# Resend Configuration
EMAIL_SERVER_USER=resend
EMAIL_SERVER_HOST=smtp.resend.com
EMAIL_SERVER_PORT=25
EMAIL_FROM=
```

## Usage

You should be able to get auth working as long as you supply a valid DATABASE_URL. This is because Prisma will automatically create the necessary tables for you once you run `npx prisma db push`. Kysely types will be generated automatically thereafter.

Note that if you're trying to get the user session server-side in the app, use the `getUser` function in `src/lib/auth.ts` which has `getServerSession` configured with the right options. This doesn't apply to the `getSession()` call in any client components.