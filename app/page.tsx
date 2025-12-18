import Link from "next/link"
import { ArrowRight, Download, ExternalLink, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-24 text-center md:px-6 md:py-32">
        <div className="relative z-10 max-w-4xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Tilio ALBRI-PICOT</h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-300">
            Technicien en systèmes informatiques et réseaux, passionné par les infrastructures et la cybersécurité
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </Button>
            </Link>
            <a href="/documents/cv-tilio.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-300 hover:bg-slate-700 hover:text-white bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" /> Télécharger CV
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Présentation Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-slate-300">
            Je suis diplômé d'un BTS SIO option SISR et actuellement en Bachelor CRIS (Concepteur Réseaux
            Infrastructures et Sécurité) à l'école Saint Michel d'Annecy, en alternance au sein de l'entreprise LTI
            Informatique. Cette formation me permet d'approfondir mes compétences en conception d'infrastructures
            sécurisées et administration systèmes et réseaux tout en acquérant une expérience professionnelle
            spécialisée.
          </p>
        </div>
      </section>

      {/* Experience Section - Simplified */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-emerald-600/80 backdrop-blur-sm p-6 transition-all hover:bg-emerald-700/80">
            <div className="flex items-center gap-3 mb-3">
              <a
                href="https://www.st-michel.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-white" />
              </a>
              <h2 className="text-xl font-bold text-white">École</h2>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Saint Michel Annecy</h3>
            <p className="text-white/90 text-sm mb-4">
              Formation Bachelor CRIS (Concepteur Réseaux Infrastructures et Sécurité) après l'obtention du BTS SIO
              spécialité SISR (Solutions d'Infrastructure, Systèmes et Réseaux)
            </p>
            <Link href="/projet-bts">
              <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-700 bg-transparent"
              >
                En savoir plus
              </Button>
            </Link>
          </div>

          <div className="rounded-lg border border-slate-800 bg-emerald-600/80 backdrop-blur-sm p-6 transition-all hover:bg-emerald-700/80">
            <div className="flex items-center gap-3 mb-3">
              <a
                href="https://www.lti.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-white" />
              </a>
              <h2 className="text-xl font-bold text-white">Entreprise</h2>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">LTI informatique Annecy</h3>
            <p className="text-white/90 text-sm mb-4">
              Expérience professionnelle en administration systèmes et réseaux, support technique et sécurité
              informatique
            </p>
            <Link href="/projet-professionnel">
              <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-700 bg-transparent"
              >
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Parcours Section - Redirection */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl space-y-10 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mon Parcours</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez mon parcours académique et professionnel en détail
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative h-64 w-full max-w-3xl overflow-hidden rounded-lg border border-slate-800/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-emerald-800/80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <h3 className="text-2xl font-bold">Chronologie complète</h3>
                  <p className="mt-2 max-w-md text-center text-white/80">
                    Consultez la chronologie détaillée de mon parcours académique et professionnel, ainsi que mes
                    compétences techniques
                  </p>
                  <Link href="/parcours" className="mt-6">
                    <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90">
                      Voir mon parcours complet <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
