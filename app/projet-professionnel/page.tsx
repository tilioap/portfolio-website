import { Server, Shield, Terminal, Laptop, HardDrive, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProjetProfessionnel() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projet Professionnel</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Mon parcours et mes réalisations chez LTI Informatique dans le domaine des systèmes et réseaux
          </p>
        </div>

        <Tabs defaultValue="projet1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 text-xs sm:text-sm">
            <TabsTrigger value="projet1">Postes</TabsTrigger>
            <TabsTrigger value="projet2">Serveurs</TabsTrigger>
            <TabsTrigger value="projet3">Clients</TabsTrigger>
          </TabsList>

          <TabsContent value="projet1" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Préparation et déploiement de postes clients</CardTitle>
                <CardDescription>
                  Automatisation et standardisation des installations pour les clients LTI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Description du projet</h3>
                  <p className="text-sm text-muted-foreground">
                    Dans le cadre de mes fonctions chez LTI Informatique, je suis responsable de la préparation des
                    postes clients en atelier avant leur déploiement chez les clients. J'ai participé à l'optimisation
                    du processus d'installation en utilisant et en améliorant un script d'automatisation qui permet de
                    standardiser les configurations et d'assurer une qualité constante.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Terminal className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Script d'automatisation</h3>
                    <p className="text-sm text-muted-foreground">Batch et PowerShell</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Laptop className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Configuration</h3>
                    <p className="text-sm text-muted-foreground">Windows, Office, Logiciels</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Shield className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Sécurité</h3>
                    <p className="text-sm text-muted-foreground">Antivirus, Mises à jour</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Fonctionnalités du script d'automatisation</h3>
                  <div className="rounded-lg border p-4 bg-slate-800/50">
                    <p className="text-sm text-muted-foreground mb-3">
                      J'utilise et maintiens un script batch avancé qui automatise les tâches suivantes :
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                      <li>Configuration des paramètres d'alimentation (désactivation des veilles)</li>
                      <li>Activation du menu F8 au démarrage pour faciliter le dépannage</li>
                      <li>Activation du pavé numérique par défaut</li>
                      <li>Installation des outils de télémaintenance LTI</li>
                      <li>Configuration du WiFi professionnel</li>
                      <li>
                        Installation automatisée via Winget des logiciels standards (7zip, Firefox, Chrome, Java, VLC,
                        etc.)
                      </li>
                      <li>
                        Installation des suites bureautiques selon les besoins (Office 2021/2024/365 ou LibreOffice)
                      </li>
                      <li>Déploiement des solutions antivirus (ESET NOD32, ESET Endpoint, Gravity Zone)</li>
                      <li>Renommage des postes selon la politique de nommage LTI</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Processus de préparation</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Préparation en atelier</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                        <li>Installation du système d'exploitation Windows</li>
                        <li>Exécution du script d'automatisation</li>
                        <li>Configuration spécifique selon les besoins du client</li>
                        <li>Tests de fonctionnement et de performance</li>
                        <li>Création d'une image système de sauvegarde</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Déploiement chez le client</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                        <li>Installation physique des postes</li>
                        <li>Connexion au réseau local et au domaine</li>
                        <li>Configuration des imprimantes et périphériques</li>
                        <li>Transfert des données utilisateurs si nécessaire</li>
                        <li>Formation rapide des utilisateurs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Compétences développées</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-600">Scripting Batch</Badge>
                    <Badge className="bg-emerald-600">PowerShell</Badge>
                    <Badge className="bg-emerald-600">Winget</Badge>
                    <Badge className="bg-emerald-600">Windows 10/11</Badge>
                    <Badge className="bg-emerald-600">Office 365/2021/2024</Badge>
                    <Badge className="bg-emerald-600">Déploiement automatisé</Badge>
                    <Badge className="bg-emerald-600">Gestion des images système</Badge>
                    <Badge className="bg-emerald-600">Solutions antivirus</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projet2" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Administration de serveurs Windows et sécurité</CardTitle>
                <CardDescription>
                  Configuration et maintenance des infrastructures serveurs et solutions de sécurité
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Description des missions</h3>
                  <p className="text-sm text-muted-foreground">
                    Dans le cadre de mon alternance chez LTI Informatique, je participe à l'administration et à la
                    maintenance des serveurs Windows et des solutions de sécurité Stormshield pour nos clients. Ces
                    missions me permettent de développer des compétences avancées en gestion d'infrastructure et en
                    sécurité réseau.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Server className="h-8 w-8 text-emerald-600" />
                      <h3 className="text-xl font-bold">Serveurs Windows</h3>
                    </div>
                    <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                      <li>Installation et configuration de Windows Server</li>
                      <li>Gestion des services Active Directory</li>
                      <li>Configuration des stratégies de groupe (GPO)</li>
                      <li>Mise en place de solutions de sauvegarde</li>
                      <li>Surveillance et maintenance préventive</li>
                      <li>Résolution des incidents</li>
                      <li>Mises à jour et correctifs de sécurité</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-8 w-8 text-emerald-600" />
                      <h3 className="text-xl font-bold">Stormshield</h3>
                    </div>
                    <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                      <li>Configuration des pare-feu Stormshield</li>
                      <li>Mise en place de règles de filtrage</li>
                      <li>Configuration des VPN site-à-site et nomades</li>
                      <li>Segmentation réseau et VLANs</li>
                      <li>Monitoring et analyse des logs</li>
                      <li>Mise à jour des firmwares</li>
                      <li>Gestion des certificats SSL</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Cas concrets</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Mise à niveau de serveurs</h4>
                      <p className="text-sm text-muted-foreground">
                        J'ai participé à plusieurs projets de mise à niveau de serveurs Windows, incluant la migration
                        de Windows Server 2012 R2 vers Windows Server 2019/2022. Ces projets comprenaient l'audit de
                        l'existant, la planification de la migration, la mise en œuvre et les tests post-migration pour
                        assurer la continuité des services.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Sécurisation d'infrastructure</h4>
                      <p className="text-sm text-muted-foreground">
                        J'ai contribué à la sécurisation des infrastructures clients en déployant et configurant des
                        pare-feu Stormshield. Ces projets incluaient l'analyse des besoins de sécurité, la définition
                        des règles de filtrage, la mise en place de VPN pour le télétravail et la documentation des
                        configurations pour faciliter la maintenance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Compétences développées</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-600">Windows Server</Badge>
                    <Badge className="bg-emerald-600">Active Directory</Badge>
                    <Badge className="bg-emerald-600">GPO</Badge>
                    <Badge className="bg-emerald-600">Stormshield</Badge>
                    <Badge className="bg-emerald-600">Pare-feu</Badge>
                    <Badge className="bg-emerald-600">VPN</Badge>
                    <Badge className="bg-emerald-600">Sécurité réseau</Badge>
                    <Badge className="bg-emerald-600">Sauvegarde et restauration</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projet3" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Projets clients et interventions techniques</CardTitle>
                <CardDescription>Déploiements, migrations et support technique pour les clients LTI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Interventions et projets</h3>
                  <p className="text-sm text-muted-foreground">
                    Au sein de LTI Informatique, je participe régulièrement à des projets clients de différentes
                    envergures, allant du dépannage ponctuel aux déploiements complets d'infrastructure. Ces
                    interventions me permettent de mettre en pratique mes compétences techniques dans des environnements
                    variés et de développer mon autonomie professionnelle.
                  </p>
                </div>

                <div className="rounded-lg border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <HardDrive className="h-8 w-8 text-emerald-600" />
                    <h3 className="text-xl font-bold">Déploiement d'infrastructure</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      J'interviens régulièrement lors des déploiements d'infrastructure chez nos clients. Ces projets
                      incluent l'installation physique des équipements, la configuration réseau et la mise en service
                      des postes de travail.
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                      <li>Installation et câblage des postes de travail</li>
                      <li>Configuration des équipements réseau</li>
                      <li>Intégration au domaine Windows</li>
                      <li>Configuration des imprimantes et périphériques</li>
                      <li>Tests de fonctionnement et validation</li>
                      <li>Formation des utilisateurs</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="h-8 w-8 text-emerald-600" />
                    <h3 className="text-xl font-bold">Migration de messagerie et serveur</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      J'ai participé à un projet significatif de migration de messagerie et de changement de serveur
                      pour un client. Ce projet a été réalisé en équipe et m'a permis de développer des compétences en
                      planification et exécution de migrations complexes.
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                      <li>Audit de l'infrastructure existante</li>
                      <li>Planification détaillée de la migration</li>
                      <li>Préparation du nouvel environnement serveur</li>
                      <li>Migration des boîtes aux lettres et des données</li>
                      <li>Configuration des clients de messagerie</li>
                      <li>Tests et validation post-migration</li>
                      <li>Support utilisateurs pendant la transition</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Laptop className="h-8 w-8 text-emerald-600" />
                    <h3 className="text-xl font-bold">Support technique et dépannage</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Une part importante de mon activité consiste à assurer le support technique et le dépannage pour
                      les clients de LTI. Ces interventions me permettent de développer ma capacité à diagnostiquer et
                      résoudre rapidement des problèmes variés.
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                      <li>Résolution des incidents matériels et logiciels</li>
                      <li>Dépannage des problèmes réseau</li>
                      <li>Récupération de données</li>
                      <li>Nettoyage de virus et malwares</li>
                      <li>Optimisation des performances</li>
                      <li>Assistance utilisateurs à distance et sur site</li>
                      <li>Documentation des interventions</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Compétences développées</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-600">Gestion de projet</Badge>
                    <Badge className="bg-emerald-600">Migration de données</Badge>
                    <Badge className="bg-emerald-600">Messagerie</Badge>
                    <Badge className="bg-emerald-600">Déploiement</Badge>
                    <Badge className="bg-emerald-600">Dépannage</Badge>
                    <Badge className="bg-emerald-600">Support technique</Badge>
                    <Badge className="bg-emerald-600">Documentation</Badge>
                    <Badge className="bg-emerald-600">Relation client</Badge>
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
