import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Portfolio</span>
            <span className="text-xs text-muted-foreground">Tilio ALBRI-PICOT</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Accueil
          </Link>
          <Link href="/projet-professionnel" className="text-sm font-medium transition-colors hover:text-primary">
            Projet Professionnel
          </Link>
          <Link href="/projet-bts" className="text-sm font-medium transition-colors hover:text-primary">
            Projet BTS
          </Link>
          <Link href="/veille-technologique" className="text-sm font-medium transition-colors hover:text-primary">
            Veille Technologique
          </Link>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Contact</Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Accueil
              </Link>
              <Link href="/projet-professionnel" className="text-sm font-medium transition-colors hover:text-primary">
                Projet Professionnel
              </Link>
              <Link href="/projet-bts" className="text-sm font-medium transition-colors hover:text-primary">
                Projet BTS
              </Link>
              <Link href="/projet-bts" className="text-sm font-medium transition-colors hover:text-primary">
                Veille Technologique
              </Link>
              <Button className="bg-emerald-600 hover:bg-emerald-700 w-full">Contact</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

