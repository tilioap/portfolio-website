import { CalendarDays, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VeilleTechnologique() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Veille Technologique</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Suivi des dernières tendances et innovations dans le domaine du développement informatique
          </p>
        </div>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="outils">Outils</TabsTrigger>
            <TabsTrigger value="methode">Méthode</TabsTrigger>
          </TabsList>
          <TabsContent value="articles" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Les tendances du développement web en 2024</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    15 Mars 2024
                  </div>
                </div>
                <CardDescription>
                  Analyse des technologies et frameworks les plus prometteurs de l'année
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cet article explore les tendances émergentes dans le développement web pour 2024, notamment l'essor
                  des architectures Jamstack, l'adoption croissante de WebAssembly, les avancées en matière d'interfaces
                  utilisateur avec des frameworks comme Next.js et Svelte, ainsi que l'intégration de l'IA dans les
                  outils de développement.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold dark:bg-slate-800">
                    <Tag className="mr-1 h-3 w-3" />
                    Web Development
                  </div>
                  <div className="flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold dark:bg-slate-800">
                    <Tag className="mr-1 h-3 w-3" />
                    JavaScript
                  </div>
                  <div className="flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold dark:bg-slate-800">
                    <Tag className="mr-1 h-3 w-3" />
                    Frameworks
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Lire l'article complet
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>L'impact de l'IA sur le développement logiciel</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    28 Février 2024
                  </div>
                </div>
                <CardDescription>
                  Comment l'intelligence artificielle transforme les méthodes de développement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cet article examine comment l'intelligence artificielle révolutionne le développement logiciel, de la
                  génération automatique de code à l'optimisation des tests, en passant par la détection précoce des
                  bugs et l'amélioration des processus de revue de code. Il aborde également les implications éthiques
                  et les compétences que les développeurs doivent acquérir pour rester pertinents.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold dark:bg-slate-800">
                    <Tag className="mr-1 h-3 w-3" />
                    Intelligence Artificielle
                  </div>
                  <div className="flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold dark:bg-slate-800">
                    <Tag className="mr-1 h-3 w-3" />
                    Développement Logiciel
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Lire l'article complet
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="outils" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Outils de veille technologique</CardTitle>
                <CardDescription>Les ressources que j'utilise pour ma veille technologique</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Agrégateurs et newsletters</h3>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground space-y-2">
                    <li>
                      <strong>Feedly</strong> - Pour suivre les flux RSS des blogs techniques et sites spécialisés
                    </li>
                    <li>
                      <strong>JavaScript Weekly</strong> - Newsletter hebdomadaire sur l'écosystème JavaScript
                    </li>
                    <li>
                      <strong>Hacker News</strong> - Pour les actualités tech et les discussions
                    </li>
                    <li>
                      <strong>Dev.to</strong> - Plateforme communautaire de développeurs
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Plateformes d'apprentissage</h3>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground space-y-2">
                    <li>
                      <strong>Udemy</strong> - Pour les cours en ligne sur les nouvelles technologies
                    </li>
                    <li>
                      <strong>YouTube</strong> - Chaînes techniques comme Fireship, Traversy Media, etc.
                    </li>
                    <li>
                      <strong>GitHub</strong> - Pour suivre les projets open source et les tendances
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Réseaux sociaux professionnels</h3>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground space-y-2">
                    <li>
                      <strong>Twitter/X</strong> - Pour suivre les développeurs influents et les annonces
                    </li>
                    <li>
                      <strong>LinkedIn</strong> - Pour les actualités professionnelles et les articles de fond
                    </li>
                    <li>
                      <strong>Discord</strong> - Communautés de développeurs spécialisées
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="methode" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Ma méthode de veille technologique</CardTitle>
                <CardDescription>
                  Organisation et processus pour rester à jour avec les évolutions technologiques
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Organisation quotidienne</h3>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-emerald-600" />
                      <p className="font-medium">30 minutes par jour</p>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Je consacre 30 minutes chaque matin à consulter les dernières actualités via Feedly et les
                      newsletters auxquelles je suis abonné. Je note les sujets qui méritent une exploration plus
                      approfondie.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Exploration hebdomadaire</h3>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-emerald-600" />
                      <p className="font-medium">2 heures par semaine</p>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Je réserve deux heures chaque week-end pour approfondir les sujets identifiés pendant la semaine.
                      Cela peut inclure la lecture d'articles de fond, le visionnage de tutoriels ou l'expérimentation
                      avec de nouvelles technologies.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Mise en pratique</h3>
                  <div className="rounded-lg border p-4">
                    <p className="mt-2 text-sm text-muted-foreground">
                      Pour consolider mes connaissances, je développe régulièrement des projets personnels utilisant les
                      technologies que j'étudie. Je participe également à des hackathons et des projets open source pour
                      collaborer avec d'autres développeurs et mettre en pratique mes compétences.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Documentation et partage</h3>
                  <div className="rounded-lg border p-4">
                    <p className="mt-2 text-sm text-muted-foreground">
                      Je documente mes apprentissages dans une base de connaissances personnelle (Notion) et je partage
                      régulièrement mes découvertes avec mes collègues et sur les réseaux sociaux professionnels. Cela
                      me permet de structurer ma pensée et d'obtenir des retours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

