## Introduction

This is an accompanying repo which contains the final source code for how to set up [Next Auth with Resend and the new Kysely adapter](https://www.ivanleo.com/blog/implementing_magic_links_with_resend_kysely_and_next_auth). I used Neon in my example but feel free to use another database if you wish.

To get started, clone this repo and run `npm` to install the dependencies. You will need 

- Resend API Key
- Postgres Database ( Kysely uses postgres as an example so I based it off that )
- Domain Name ( You need to own a domain name so that resend can send some emails for you )

Once you've done so, just fill in the necessary values and you should be good to go!

Note that while in development mode, I've configured