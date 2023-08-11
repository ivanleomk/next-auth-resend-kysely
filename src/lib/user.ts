"use server"

import { currentUser } from "@clerk/nextjs";
import { db } from "./db";

export const getUserDetails = async () => {
  const user = await currentUser();
  if (!user) {
    return null
  }
  const userId = user.id;
  if (!db.selectFrom("User").select("id").where("id", '=', userId)) {
    db.insertInto("User").values({ id: userId }).execute();
  }

  return user.id;
}