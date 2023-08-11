import { DB } from "@/db/types";
import { Kysely } from "kysely";
import { NeonDialect } from "kysely-neon"

export const db = new Kysely<DB>({
  dialect: new NeonDialect({
    connectionString: process.env.DATABASE_URL,
  }),
})