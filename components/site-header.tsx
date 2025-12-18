import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-900/70 backdrop-blur-md supports-[backdrop-filter]:bg-slate-900/30">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src="/images/icone.webp" alt="Logo Tilio" width={40} height={40} className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Portfolio</span>
            <span className="text-xs text-muted-foreground hidden sm:block">Tilio ALBRI-PICOT</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-emerald-400">
            Accueil
          </Link>
          <Link href="/parcours" className="text-sm font-medium transition-colors hover:text-emerald-400">
            Parcours
          </Link>
          <Link href="/projet-professionnel" className="text-sm font-medium transition-colors hover:text-emerald-400">
            Projets Professionnels
          </Link>
          <Link href="/projet-bts" className="text-sm font-medium transition-colors hover:text-emerald-400">
            Projets École
          </Link>
          <Link href="/veille-technologique" className="text-sm font-medium transition-colors hover:text-emerald-400">
            Veille Technologique
          </Link>
          <Link href="/contact">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Contact</Button>
          </Link>
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
              <Link href="/" className="text-sm font-medium transition-colors hover:text-emerald-400">
                Accueil
              </Link>
              <Link href="/parcours" className="text-sm font-medium transition-colors hover:text-emerald-400">
                Parcours
              </Link>
              <Link
                href="/projet-professionnel"
                className="text-sm font-medium transition-colors hover:text-emerald-400"
              >
                Projets Professionnels
              </Link>
              <Link href="/projet-bts" className="text-sm font-medium transition-colors hover:text-emerald-400">
                Projets École
              </Link>
              <Link
                href="/veille-technologique"
                className="text-sm font-medium transition-colors hover:text-emerald-400"
              >
                Veille Technologique
              </Link>
              <Link href="/contact" className="w-full">
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full">Contact</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
