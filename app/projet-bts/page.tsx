import { Code, Database, Server, Network, Shield, Download, Cloud, GlassWater, Bot, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ProjetBTS() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projets École</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Découvrez les projets réalisés dans le cadre de ma formation
          </p>
          <div className="flex justify-center mt-4">
            <a href="/documents/tableau-synthese.pdf" download>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Download className="mr-2 h-4 w-4" /> Télécharger le tableau de synthèse
              </Button>
            </a>
          </div>
        </div>

        <Tabs defaultValue="projet1" className="w-full">
          <TabsList className="flex flex-wrap justify-center w-full h-auto gap-1 p-1 text-xs sm:text-sm">
            <TabsTrigger value="projet1" className="flex-1 min-w-[80px]">Zabbix</TabsTrigger>
            <TabsTrigger value="projet2" className="flex-1 min-w-[80px]">Réseau</TabsTrigger>
            <TabsTrigger value="projet3" className="flex-1 min-w-[80px]">Picasso</TabsTrigger>
            <TabsTrigger value="projet4" className="flex-1 min-w-[80px]">WineMind</TabsTrigger>
          </TabsList>

          <TabsContent value="projet1" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Serveur de Supervision Zabbix</CardTitle>
                <CardDescription>
                  Mise en place d'un serveur de supervision pour surveiller l'infrastructure réseau
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Présentation du projet</h3>
                  <p className="text-sm text-muted-foreground">
                    Dans le cadre d'un projet collaboratif entre les entreprises ByteMeUp, Pare-Fouine et Cloud
                    Macronique pour répondre à un appel à projet d'une agence gouvernementale de cybersécurité, j'ai été
                    chargé de mettre en place un serveur de supervision Zabbix. Ce projet s'inscrit dans une simulation
                    de cyberattaque visant à tester la résilience et la sécurité des infrastructures mises en place par
                    les trois entreprises.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    L'entreprise Cloud Macronique, spécialisée en réseau, a mis en place une infrastructure avec un wifi
                    sécurisé, un outil de supervision du réseau, un cœur de réseau et une segmentation réseau. Le
                    serveur Zabbix joue un rôle crucial dans la détection en temps réel des attaques et des anomalies
                    sur le réseau, permettant une réaction rapide avant que les dégâts ne se propagent.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Server className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Serveur</h3>
                    <p className="text-sm text-muted-foreground">Ubuntu Server 22.04 LTS</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Database className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Base de données</h3>
                    <p className="text-sm text-muted-foreground">MariaDB</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Code className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Interface Web</h3>
                    <p className="text-sm text-muted-foreground">Apache, PHP</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Architecture Zabbix</h3>
                  <p className="text-sm text-muted-foreground">
                    L'architecture Zabbix est composée des éléments suivants :
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li>Serveur Zabbix : Collecte et analyse les données des hôtes.</li>
                    <li>Base de données MySQL : Stocke les configurations et les données de supervision.</li>
                    <li>
                      Interface Web : Permet l'affichage des données collectées sous forme de graphiques, tableaux et
                      alertes.
                    </li>
                    <li>
                      Agents Zabbix : Installés sur les hôtes supervisés pour remonter des métriques (CPU, RAM, réseau,
                      etc.).
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Tableaux de bord</h3>
                  <p className="text-sm text-muted-foreground">
                    Les tableaux de bord permettent d'afficher des graphiques, des statistiques et des alertes pour les
                    équipements supervisés. Le tableau de bord principal affiche :
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li>
                      L'utilisation de la RAM, du CPU et des disques en temps réel pour les VM Linux et Windows et du
                      serveur d'hyperviseur.
                    </li>
                    <li>Les informations du système où est installé Zabbix.</li>
                    <li>La disponibilité des actifs réseau (les 2 switches et la borne Wifi) et des serveurs.</li>
                    <li>Les alertes et problèmes, triés par date.</li>
                    <li>Les ports des 2 switches avec indication de leur état (up/down).</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Découverte réseau automatisée</h3>
                  <p className="text-sm text-muted-foreground">
                    J'ai mis en place une automatisation de la découverte des PC Windows qui sont sur le DHCP. Cette
                    fonctionnalité permet un gain de temps considérable dans la gestion du parc informatique.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Des règles ont été configurées pour accepter uniquement les PC dans la plage d'adresses
                    172.16.20.100-200, vérifier leur hostname et les ajouter automatiquement à Zabbix. Des actions ont
                    également été mises en place pour supprimer les hôtes inactifs après une période définie.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4">
                <a href="/documents/doc-zabbix.pdf" download className="w-full sm:w-1/2">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Download className="mr-2 h-4 w-4" /> Documentation complète
                  </Button>
                </a>
                <a href="/documents/cahier-charges-zabbix.pdf" download className="w-full sm:w-1/2">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Download className="mr-2 h-4 w-4" /> Cahier des charges
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="projet2" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Cœur de Réseau</CardTitle>
                <CardDescription>
                  Configuration des switches et du pare-feu Stormshield pour le cœur de réseau
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Description du projet</h3>
                  <p className="text-sm text-muted-foreground">
                    Le cœur de réseau est un élément central de l'infrastructure Cloud Macronique, assurant la
                    connectivité et la sécurité entre les différents segments du réseau. Dans le cadre du projet de
                    simulation de cyberattaque, j'ai été chargé de configurer la segmentation réseau, les switches et le
                    pare-feu Stormshield.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    La segmentation réseau a été mise en place avec deux VLAN distincts : un VLAN Administration pour
                    les serveurs (AD, serveur de fichiers) et un VLAN Visiteur pour le wifi public, permettant ainsi de
                    séparer les trafics et renforcer la sécurité du réseau. Deux switches ont été déployés et configurés
                    pour gérer ces VLAN, assurant l'isolation des communications entre les deux segments tout en
                    permettant une interconnexion pour la redondance.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Network className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Switches</h3>
                    <p className="text-sm text-muted-foreground">Configuration VLAN et trunks</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Shield className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Pare-feu</h3>
                    <p className="text-sm text-muted-foreground">Stormshield SN320</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Server className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Surveillance</h3>
                    <p className="text-sm text-muted-foreground">SNMP, Zabbix</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Configuration des VLAN</h3>
                  <p className="text-sm text-muted-foreground">
                    Les VLAN permettent de segmenter logiquement le réseau pour améliorer la sécurité et l'efficacité.
                    Les VLAN configurés sont les suivants :
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <Badge className="bg-emerald-600 mb-2">VLAN 10</Badge>
                      <h4 className="font-medium">Réseau Public</h4>
                      <ul className="mt-2 text-sm space-y-1 text-muted-foreground">
                        <li>Plage IP : 172.16.10.0/24</li>
                        <li>Passerelle : 172.16.10.254</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <Badge className="bg-emerald-600 mb-2">VLAN 20</Badge>
                      <h4 className="font-medium">Réseau Privé</h4>
                      <ul className="mt-2 text-sm space-y-1 text-muted-foreground">
                        <li>Plage IP : 172.16.20.0/24</li>
                        <li>Passerelle : 172.16.20.254</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <Badge className="bg-emerald-600 mb-2">VLAN 30</Badge>
                      <h4 className="font-medium">Réseau Admin</h4>
                      <ul className="mt-2 text-sm space-y-1 text-muted-foreground">
                        <li>Plage IP : 172.16.30.0/24</li>
                        <li>Passerelle : 172.16.30.254</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Configuration des trunks</h3>
                  <p className="text-sm text-muted-foreground">
                    Les trunks permettent le transport de plusieurs VLAN sur un même lien physique, assurant ainsi la
                    communication entre les switches et autres équipements réseau.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Trunk - Group1</h4>
                      <ul className="mt-2 text-sm space-y-1 text-muted-foreground">
                        <li>ID : 01</li>
                        <li>Type : LACP</li>
                        <li>Ports : 27, 28</li>
                        <li>Description : Lien entre les 2 switches</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Trunk - Group2</h4>
                      <ul className="mt-2 text-sm space-y-1 text-muted-foreground">
                        <li>ID : 02</li>
                        <li>Type : LACP</li>
                        <li>Ports : 3, 4, 5, 6</li>
                        <li>Description : Lien avec le serveur</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Configuration du Stormshield</h3>
                  <p className="text-sm text-muted-foreground">
                    Le Stormshield SN900 est utilisé comme pare-feu principal du cœur de réseau. Il permet de segmenter
                    le trafic, d'appliquer des règles de filtrage et d'assurer la sécurité des communications entre les
                    différents VLANs et sous-réseaux.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Le pare-feu est configuré pour filtrer les flux entrants et sortants grâce à des règles précises
                    basées sur les adresses IP, les ports et les protocoles. Il intègre un système IDS/IPS qui analyse
                    le trafic en temps réel, détecte les comportements suspects et bloque automatiquement les menaces
                    potentielles.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    De plus, le Stormshield SN900 permet de sécuriser l'accès au réseau Wifi en mettant en place un
                    portail captif. Ce portail redirige les utilisateurs vers une page d'authentification avant qu'ils
                    ne puissent accéder à Internet. Les sessions utilisateurs sont enregistrées dans des logs pour un
                    suivi précis des connexions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Règles de filtrage</h3>
                  <p className="text-sm text-muted-foreground">
                    Des règles de filtrage ont été configurées pour contrôler le trafic entre les différents VLANs :
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">VLAN Public (VLAN 10)</h4>
                      <div className="overflow-x-auto mt-2 max-w-[calc(100vw-3rem)] sm:max-w-full">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Source</TableHead>
                              <TableHead>Destination</TableHead>
                              <TableHead>Port dest</TableHead>
                              <TableHead>Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Network_Public</TableCell>
                              <TableCell>Srv-Controleur</TableCell>
                              <TableCell>8088</TableCell>
                              <TableCell>Pass</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium">VLAN Private (VLAN 20)</h4>
                      <div className="overflow-x-auto mt-2 max-w-[calc(100vw-3rem)] sm:max-w-full">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Source</TableHead>
                              <TableHead>Destination</TableHead>
                              <TableHead>Port dest</TableHead>
                              <TableHead>Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Srv-Contrôle</TableCell>
                              <TableCell>AP-WIFI</TableCell>
                              <TableCell>Any</TableCell>
                              <TableCell>Pass</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium">VLAN Admin (VLAN 30)</h4>
                      <div className="overflow-x-auto mt-2 max-w-[calc(100vw-3rem)] sm:max-w-full">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Source</TableHead>
                              <TableHead>Destination</TableHead>
                              <TableHead>Port dest</TableHead>
                              <TableHead>Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Network_Admin</TableCell>
                              <TableCell className="break-words max-w-[120px]">
                                Network_Private Network_Public
                              </TableCell>
                              <TableCell>Any</TableCell>
                              <TableCell>Pass</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Surveillance des Switches</h3>
                  <p className="text-sm text-muted-foreground">
                    Les switches sont surveillés via le protocole SNMP pour collecter des informations telles que les
                    ports actifs, les erreurs, et l'utilisation des interfaces réseau.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li>Communauté SNMP : public</li>
                    <li>Version SNMP : SNMPv2</li>
                    <li>Intégration avec Zabbix pour une surveillance proactive</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4">
                <a href="/documents/doc-coeur-reseau.pdf" download className="w-full sm:w-1/2">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Download className="mr-2 h-4 w-4" /> Documentation complète
                  </Button>
                </a>
                <a href="/documents/cahier-charges-reseau.pdf" download className="w-full sm:w-1/2">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Download className="mr-2 h-4 w-4" /> Cahier des charges
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="projet3" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Projet Picasso</CardTitle>
                <CardDescription>
                  Mise en place d'une infrastructure AWS pour héberger un site d'exposition temporaire
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Présentation du projet</h3>
                  <p className="text-sm text-muted-foreground">
                    Le musée du film d'animation de la ville d'Annecy a organisé une exposition temporaire des œuvres de
                    Pablo Picasso. Dans le cadre de ce projet, j'ai été chargé de mettre en place l'infrastructure
                    d'hébergement du site web de l'exposition sur Amazon Web Services (AWS). Ce projet a été réalisé en
                    tant qu'étudiant en option SISR, tandis que les étudiants en option SLAM se sont occupés du
                    développement du site web.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Cloud className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Infrastructure Cloud</h3>
                    <p className="text-sm text-muted-foreground">Amazon Web Services (AWS)</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Server className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Serveurs</h3>
                    <p className="text-sm text-muted-foreground">Debian 12, Apache, MariaDB</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Shield className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Sécurité</h3>
                    <p className="text-sm text-muted-foreground">UFW, HTTPS, Certificats SSL</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Architecture réseau</h3>
                  <p className="text-sm text-muted-foreground">
                    L'architecture mise en place comprend deux serveurs Linux (Debian 12) :
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li>Un serveur web situé dans un sous-réseau public accessible depuis Internet</li>
                    <li>
                      Un serveur de base de données situé dans un sous-réseau privé, non accessible directement depuis
                      Internet
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Cette séparation permet d'améliorer la sécurité en isolant la base de données des accès directs
                    depuis Internet.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Configuration du VPC</h3>
                  <p className="text-sm text-muted-foreground">
                    J'ai créé un Virtual Private Cloud (VPC) nommé "picasso-expo" avec les sous-réseaux suivants :
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Sous-réseaux publics</h4>
                      <ul className="mt-2 text-sm space-y-1 text-muted-foreground">
                        <li>picasso-expo-subnet-public1 (10.0.2.0/24)</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Sous-réseaux privés</h4>
                      <ul className="mt-2 text-sm space-y-1 text-muted-foreground">
                        <li>picasso-expo-subnet-private1 (10.0.1.0/24)</li>
                        <li>picasso-expo-subnet-private2 (10.0.3.0/24)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Serveur Web</h3>
                  <p className="text-sm text-muted-foreground">
                    Le serveur web a été configuré avec les éléments suivants :
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li>Système d'exploitation Debian 12</li>
                    <li>Serveur web Apache2</li>
                    <li>Configuration HTTPS avec certificat auto-signé</li>
                    <li>Pare-feu UFW avec règles pour HTTP (80), HTTPS (443) et SSH (22)</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Serveur de base de données</h3>
                  <p className="text-sm text-muted-foreground">Le serveur de base de données a été configuré avec :</p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li>Système d'exploitation Debian 12</li>
                    <li>MariaDB Server pour la gestion des données</li>
                    <li>Configuration sécurisée avec mysql_secure_installation</li>
                    <li>
                      Pare-feu UFW avec règles pour SSH (22) et MariaDB (3306) uniquement depuis le réseau interne
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Sécurité</h3>
                  <p className="text-sm text-muted-foreground">
                    Plusieurs mesures de sécurité ont été mises en place :
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li>Groupe de sécurité AWS "Web Security Group" pour contrôler les accès réseau</li>
                    <li>Pare-feu UFW sur les deux serveurs avec des règles spécifiques</li>
                    <li>Isolation de la base de données dans un sous-réseau privé</li>
                    <li>Utilisation de certificats SSL pour le chiffrement des communications</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Problématique du certificat auto-signé :</strong> Un certificat auto-signé ne garantit pas
                    la confiance car il n'est pas validé par une autorité de certification tierce. Cela peut générer des
                    avertissements de sécurité dans les navigateurs et ne convient que pour des environnements de test
                    ou de développement.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4">
                <a href="/documents/doc-picasso.pdf" download className="w-full sm:w-1/2">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Download className="mr-2 h-4 w-4" /> Documentation technique
                  </Button>
                </a>
                <a href="/documents/projet-picasso.pdf" download className="w-full sm:w-1/2">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Download className="mr-2 h-4 w-4" /> Cahier des charges
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="projet4" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>WineMind - Application IA pour le Vin</CardTitle>
                <CardDescription>
                  Projet d'une semaine : application mobile avec chatbot IA pour conseiller les amateurs de vin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Presentation du projet</h3>
                  <p className="text-sm text-muted-foreground">
                    WineMind est une application mobile developpee en une semaine dans le cadre d'un projet intensif. 
                    L'objectif etait de creer une application complete pour iPhone et Android permettant aux utilisateurs 
                    de recevoir des conseils personnalises sur les vins grace a l'intelligence artificielle.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    L'application propose un chatbot IA specialise dans le domaine du vin, capable de recommander 
                    le vin ideal en fonction du plat, de l'occasion ou meme de la meteo. Par exemple, si vous demandez 
                    "Quel temps fait-il aujourd'hui ?", l'IA vous suggerera un vin adapte a la saison ou aux conditions 
                    meteorologiques du moment. Cette approche originale permet de garder l'IA concentree sur son domaine 
                    d'expertise : le vin.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Smartphone className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Application Mobile</h3>
                    <p className="text-sm text-muted-foreground">iPhone et Android</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Bot className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Intelligence Artificielle</h3>
                    <p className="text-sm text-muted-foreground">ChatGPT avec prompts specialises</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Database className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Backend</h3>
                    <p className="text-sm text-muted-foreground">Supabase (Auth + BDD)</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Fonctionnalites principales</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="h-5 w-5 text-emerald-600" />
                        <h4 className="font-medium">Chatbot IA Sommelier</h4>
                      </div>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>Conseils personnalises sur les accords mets-vins</li>
                        <li>Recommandations basees sur vos preferences</li>
                        <li>Suggestions adaptees a l'occasion ou la saison</li>
                        <li>IA specialisee uniquement sur le domaine du vin</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <GlassWater className="h-5 w-5 text-emerald-600" />
                        <h4 className="font-medium">Gestion de Cave</h4>
                      </div>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>Ajout de vins dans sa cave virtuelle</li>
                        <li>Suivi de son inventaire</li>
                        <li>Organisation par type, region ou annee</li>
                        <li>Historique des vins degustes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Architecture technique</h3>
                  <p className="text-sm text-muted-foreground">
                    L'architecture de WineMind repose sur plusieurs composants :
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li><strong>Application mobile :</strong> Developpee nativement pour iOS et Android par l'equipe de developpeurs</li>
                    <li><strong>Authentification :</strong> Gestion des comptes utilisateurs via Supabase Auth</li>
                    <li><strong>Base de donnees :</strong> Stockage des caves, preferences et historiques via Supabase Database</li>
                    <li><strong>Intelligence Artificielle :</strong> Integration de l'API ChatGPT avec des prompts personnalises</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Configuration de l'IA</h3>
                  <p className="text-sm text-muted-foreground">
                    L'intelligence artificielle a ete configuree avec des prompts specifiques pour garantir 
                    qu'elle reste focalisee sur le domaine du vin :
                  </p>
                  <div className="rounded-lg border p-4 bg-slate-800/50">
                    <p className="text-sm text-muted-foreground italic">
                      "Tu es un sommelier expert. Tu ne reponds qu'aux questions liees au vin, aux accords 
                      mets-vins, aux regions viticoles et a la degustation. Si l'utilisateur pose une question 
                      hors sujet, tu dois trouver une maniere creative de la relier au monde du vin."
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Cette approche permet de maintenir une experience utilisateur coherente et specialisee, 
                    tout en gardant un aspect ludique. Par exemple, une question sur la meteo sera interpretee 
                    comme une demande de vin adapte aux conditions climatiques.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Technologies utilisees</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Frontend (Application)</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>Developpement natif iOS (Swift)</li>
                        <li>Developpement natif Android (Kotlin)</li>
                        <li>Interface utilisateur moderne et intuitive</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Backend et Services</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>Supabase pour l'authentification</li>
                        <li>Supabase PostgreSQL pour la base de donnees</li>
                        <li>API OpenAI (ChatGPT) pour l'IA</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Mon role dans le projet</h3>
                  <p className="text-sm text-muted-foreground">
                    Dans le cadre de ce projet d'une semaine, j'ai participe a la mise en place de l'infrastructure 
                    backend avec Supabase, incluant la configuration de l'authentification et la structure de la 
                    base de donnees. J'ai egalement contribue a la conception des prompts pour l'IA afin de 
                    garantir des reponses pertinentes et specialisees dans le domaine viticole.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground italic">
                  Documentation en cours de redaction
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
