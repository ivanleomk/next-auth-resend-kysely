import { sanitizeUserEmail } from '@/lib/email';
import { Session } from 'next-auth';
import React from 'react'

type Props = {
  user: Session["user"];
}

const UserEmail = ({ user }: Props) => {
  if (!user) {
    return null
  }
  return (
    <span className="text-sm text-muted-foreground mr-4">
      {sanitizeUserEmail(user)}
    </span>
  )
}

export default UserEmail