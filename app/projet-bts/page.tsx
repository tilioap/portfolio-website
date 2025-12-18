import Image from "next/image"
import { Code, Database, Layout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjetBTS() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projets BTS</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Découvrez les projets réalisés dans le cadre de mon BTS SIO option SLAM
          </p>
        </div>

        <Tabs defaultValue="projet1" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projet1">Projet 1</TabsTrigger>
            <TabsTrigger value="projet2">Projet 2</TabsTrigger>
            <TabsTrigger value="projet3">Projet 3</TabsTrigger>
          </TabsList>
          <TabsContent value="projet1" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Application de Gestion de Stock</CardTitle>
                <CardDescription>
                  Développement d'une application web pour la gestion de stock d'une entreprise
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Capture d'écran du projet"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Layout className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Frontend</h3>
                    <p className="text-sm text-muted-foreground">React, Bootstrap</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Code className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Backend</h3>
                    <p className="text-sm text-muted-foreground">Node.js, Express</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Database className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Base de données</h3>
                    <p className="text-sm text-muted-foreground">MySQL</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Description du projet</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Cette application permet de gérer les stocks d'une entreprise avec les fonctionnalités suivantes :
                    ajout, modification et suppression de produits, gestion des catégories, suivi des entrées et
                    sorties, génération de rapports et statistiques. L'interface utilisateur a été conçue pour être
                    intuitive et responsive, permettant une utilisation sur différents appareils.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Compétences développées</h3>
                  <ul className="ml-6 mt-2 list-disc text-sm text-muted-foreground">
                    <li>Conception d'une architecture MVC</li>
                    <li>Développement d'API RESTful</li>
                    <li>Gestion de l'authentification et des autorisations</li>
                    <li>Conception et optimisation de base de données</li>
                    <li>Tests unitaires et d'intégration</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Voir la documentation complète</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="projet2" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Site E-commerce</CardTitle>
                <CardDescription>Création d'une boutique en ligne pour un commerce local</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Capture d'écran du projet"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Layout className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Frontend</h3>
                    <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Code className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Backend</h3>
                    <p className="text-sm text-muted-foreground">PHP, Laravel</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Database className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Base de données</h3>
                    <p className="text-sm text-muted-foreground">MySQL</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Description du projet</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Développement d'un site e-commerce complet avec catalogue de produits, panier d'achat, système de
                    paiement sécurisé, gestion des commandes et espace client. Le site inclut également un back-office
                    pour l'administration des produits, des commandes et des clients.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Voir la documentation complète</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="projet3" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Application Mobile de Suivi Sportif</CardTitle>
                <CardDescription>
                  Développement d'une application mobile pour le suivi d'activités sportives
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Capture d'écran du projet"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Layout className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Frontend</h3>
                    <p className="text-sm text-muted-foreground">React Native</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Code className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Backend</h3>
                    <p className="text-sm text-muted-foreground">Firebase</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Database className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Base de données</h3>
                    <p className="text-sm text-muted-foreground">Firestore</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Description du projet</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Application mobile permettant aux utilisateurs de suivre leurs activités sportives, d'enregistrer
                    leurs performances, de définir des objectifs et de visualiser leur progression. L'application
                    utilise le GPS pour suivre les parcours et calcule diverses statistiques comme la distance, la
                    vitesse, les calories brûlées, etc.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Voir la documentation complète</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

