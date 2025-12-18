import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-900/70 backdrop-blur-md supports-[backdrop-filter]:bg-slate-900/30">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Tilio ALBRI-PICOT. Tous droits réservés.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/tilio-albri-picot-3070a7262"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-emerald-400"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-emerald-400">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Contact</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
