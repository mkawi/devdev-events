import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Sheet, SheetTrigger, SheetContent } from "@/components/Sheet"
import { Button } from "@/components/Button"
import { MenuIcon } from "@/components/icons/MenuIcon"
import { signOut } from "@/app/(auth)/actions"
import { CreateEvent } from "../CreateEvent"

export async function Header() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background shadow-sm">
      <Link href="/" className="text-xl font-semibold" prefetch={false}>
        DevDev
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/events" className="text-sm font-medium hover:underline" prefetch={false}>
          Events
        </Link>
        <Link href="/archives" className="text-sm font-medium hover:underline" prefetch={false}>
          Archives
        </Link>
        {user
          ?
          <>
            <Link href="/profile" className="text-sm font-medium hover:underline" prefetch={false}>
              Profile
            </Link>
            {user.user_metadata.role === "Staff" && <CreateEvent />}
            <form action={signOut}>
              <Button variant="outline" className="text-sm font-medium" type="submit">
                Logout
              </Button>
            </form>
          </>
          :
          <>
            <Button variant="outline" className="text-sm font-medium" asChild>
              <Link href="/login" className="text-sm font-medium hover:underline" prefetch={false}>
                Login
              </Link>
            </Button>
            <Button className="text-sm font-medium" asChild>
              <Link href="/signup">
                Signup
              </Link>
            </Button>
          </>
        }
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 p-4">
          <nav className="grid gap-4">
            <Link href="/" className="text-sm font-medium hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="/events" className="text-sm font-medium hover:underline" prefetch={false}>
              Latest Events
            </Link>
            <Link href="/archives" className="text-sm font-medium hover:underline" prefetch={false}>
              Archives
            </Link>
            {user
              ?
              <>
                <Link href="/profile" className="text-sm font-medium hover:underline" prefetch={false}>
                  Profile
                </Link>
                {user.user_metadata.role === "Staff" && <CreateEvent />}
                <form action={signOut}>
                  <Button variant="outline" className="text-sm font-medium w-full" type="submit">
                    Logout
                  </Button>
                </form>
              </>
              :
              <>
                <Button variant="outline" className="text-sm font-medium" asChild>
                  <Link href="/login" className="text-sm font-medium hover:underline" prefetch={false}>
                    Login
                  </Link>
                </Button>
                <Button className="text-sm font-medium" asChild>
                  <Link href="/signup">
                    Signup
                  </Link>
                </Button>
              </>
            }
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}

