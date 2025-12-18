import Image from "next/image"
import { ArrowRight, Download, ExternalLink, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-24 text-center md:px-6 md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Tilio ALBRI-PICOT</h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-300">
            Développeur informatique passionné par les technologies web et les solutions innovantes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              <Download className="mr-2 h-4 w-4" /> Télécharger CV
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center bg-emerald-600 p-12 text-center text-white transition-all hover:bg-emerald-700">
          <div className="max-w-md space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <ArrowRight className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">École</h2>
            <h3 className="text-xl font-semibold">Saint Michel Annecy</h3>
            <p className="text-white/90">
              Formation BTS SIO (Services Informatiques aux Organisations) spécialité SLAM (Solutions Logicielles et
              Applications Métiers)
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-700">
              En savoir plus
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-emerald-700 p-12 text-center text-white transition-all hover:bg-emerald-800">
          <div className="max-w-md space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <ExternalLink className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Entreprise</h2>
            <h3 className="text-xl font-semibold">LTI informatique Annecy</h3>
            <p className="text-white/90">
              Expérience professionnelle en développement d'applications et solutions informatiques pour entreprises
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-800">
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      {/* Parcours Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mon Parcours</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Découvrez mon parcours académique et professionnel
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-800">
                <h3 className="text-xl font-bold">Formation</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400">2022 - 2024</p>
                      <h4 className="font-medium">BTS SIO option SLAM</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">École Saint Michel, Annecy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400">2021 - 2022</p>
                      <h4 className="font-medium">Baccalauréat</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Lycée Saint Michel, Annecy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-800">
                <h3 className="text-xl font-bold">Expérience Professionnelle</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400">2023 - 2024</p>
                      <h4 className="font-medium">Alternance Développeur</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">LTI informatique, Annecy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
                      <h4 className="font-medium">Stage Développement Web</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">LTI informatique, Annecy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Voir CV complet <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

