import { ArrowRight, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjetProfessionnel() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projet Professionnel</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Mon parcours et mes objectifs dans le domaine du développement informatique
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-emerald-600" />
                <CardTitle>Formation et Compétences</CardTitle>
              </div>
              <CardDescription>Mon parcours académique et mes compétences techniques</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">BTS SIO option SLAM</h3>
                <p className="text-sm text-muted-foreground">
                  Formation en développement d'applications et solutions logicielles pour entreprises
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Compétences techniques</h3>
                <ul className="ml-6 mt-2 list-disc text-sm text-muted-foreground space-y-1">
                  <li>Développement web frontend (HTML, CSS, JavaScript, React)</li>
                  <li>Développement backend (PHP, Node.js)</li>
                  <li>Bases de données (MySQL, MongoDB)</li>
                  <li>Gestion de projet et méthodes agiles</li>
                  <li>Conception et modélisation UML</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-emerald-600" />
                <CardTitle>Expérience Professionnelle</CardTitle>
              </div>
              <CardDescription>Mes expériences en entreprise</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Alternance Développeur - LTI informatique</h3>
                <p className="text-sm text-gray-500">2023 - 2024</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Développement et maintenance d'applications métiers pour les clients de l'entreprise. Participation à
                  l'ensemble du cycle de développement, de la conception à la mise en production.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Stage Développement Web - LTI informatique</h3>
                <p className="text-sm text-gray-500">2023</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Création d'interfaces utilisateur et intégration de fonctionnalités pour des applications web.
                  Collaboration avec l'équipe de développement sur des projets clients.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-emerald-600" />
                <CardTitle>Objectifs Professionnels</CardTitle>
              </div>
              <CardDescription>Mes ambitions et projets d'avenir</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Je souhaite poursuivre ma formation en intégrant une licence professionnelle en développement web et
                mobile, puis éventuellement un master en ingénierie logicielle. Mon objectif est de devenir développeur
                full-stack spécialisé dans les technologies web modernes et de participer à des projets innovants.
              </p>
              <p className="text-muted-foreground">
                À long terme, j'aimerais acquérir suffisamment d'expérience pour devenir lead developer ou architecte
                logiciel, et potentiellement créer ma propre entreprise dans le domaine du développement d'applications.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Button className="bg-emerald-600 hover:bg-emerald-700">Télécharger mon CV complet</Button>
        </div>
      </div>
    </div>
  )
}

