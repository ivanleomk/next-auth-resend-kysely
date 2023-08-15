import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth"

export const getUser = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null
  }
  return session.user
}