import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { SignIn, SignInButton, UserButton, currentUser, useUser } from '@clerk/nextjs'
import { Suspense } from 'react';
import Link from 'next/link';

export default async function Home() {
  const user = await currentUser();

  return (
    <main>
      <div className="mx-auto max-w-sm">
        <p>This is a public page</p>
        <Link href="/dashboard">Go to Dashboard</Link>
        <div>
          <Suspense fallback={<SignInButton mode='modal' />}>
            {user ? <UserButton /> : <SignInButton mode='modal' />}
          </Suspense>
        </div>
        {/* <p>Brain Dump - an app to dump all your shit</p>
        <Input type="email" placeholder="Email" /> */}
      </div>

    </main>
  )
}
