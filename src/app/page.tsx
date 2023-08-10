import Image from 'next/image'
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-sm">
        <p>Brain Dump - an app to dump all your shit</p>
        <Input type="email" placeholder="Email" />
      </div>

    </main>
  )
}
