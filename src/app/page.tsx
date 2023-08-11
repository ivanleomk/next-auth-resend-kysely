import { SignInButton, UserButton, currentUser } from '@clerk/nextjs';
import { Suspense } from 'react';
import Link from 'next/link';
import { db } from '@/lib/db';

export default async function Home() {

  return (
    <main>
      <div className="mx-auto max-w-sm">
        <p>This is a public page</p>
        <Link href="/dashboard">Go to Dashboard</Link>
      </div>
    </main>
  )
}
