import { Session } from "next-auth";

export const sanitizeUserEmail = (user: Session["user"], max_length = 20) => {
  if (!user?.email) return null;

  if (user.email.length <= max_length) return user.email;

  return `${user.email.slice(0, max_length / 2)}...${user.email.slice(-max_length / 2)}`
}