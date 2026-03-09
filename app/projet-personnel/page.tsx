import { Server, Shield, HardDrive, Network, Cloud, Activity, Cpu, Router, MonitorSmartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProjetPersonnel() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projets Personnels</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Découvrez mon homelab personnel : une infrastructure complète de virtualisation, sécurité et supervision
          </p>
        </div>

        <Tabs defaultValue="proxmox" className="w-full">
          <TabsList className="flex flex-wrap justify-center w-full h-auto gap-1 p-1">
            <TabsTrigger value="proxmox" className="flex-1 min-w-[80px] text-xs sm:text-sm">
              Proxmox
            </TabsTrigger>
            <TabsTrigger value="opnsense" className="flex-1 min-w-[80px] text-xs sm:text-sm">
              OPNsense
            </TabsTrigger>
            <TabsTrigger value="services" className="flex-1 min-w-[80px] text-xs sm:text-sm">
              Services
            </TabsTrigger>
            <TabsTrigger value="supervision" className="flex-1 min-w-[80px] text-xs sm:text-sm">
              Supervision
            </TabsTrigger>
          </TabsList>

          {/* ONGLET PROXMOX */}
          <TabsContent value="proxmox" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Server className="h-8 w-8 text-emerald-600" />
                  Serveur Proxmox VE
                </CardTitle>
                <CardDescription>
                  Hyperviseur de virtualisation avec haute disponibilité et stockage redondant
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Qu'est-ce que Proxmox VE ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Proxmox Virtual Environment (Proxmox VE) est une plateforme de virtualisation open-source basée sur
                    Debian Linux. Elle permet de gérer des machines virtuelles (VM) via KVM et des conteneurs via LXC
                    depuis une interface web intuitive. Proxmox est très populaire pour les homelabs et les
                    environnements professionnels grâce à sa flexibilité, sa gratuité et ses fonctionnalités avancées
                    comme le clustering, la haute disponibilité et les snapshots.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Cpu className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Virtualisation</h3>
                    <p className="text-sm text-muted-foreground">KVM pour les VMs, LXC pour les conteneurs</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <HardDrive className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Stockage RAID</h3>
                    <p className="text-sm text-muted-foreground">2 To + 1 To en RAID</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Network className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Réseau redondant</h3>
                    <p className="text-sm text-muted-foreground">Bonding de cartes réseau</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Configuration matérielle</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Redondance réseau</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        J'ai configuré un bonding (agrégation de liens) sur les cartes réseau du serveur. Cette
                        technique permet de combiner plusieurs interfaces réseau physiques en une seule interface
                        logique, offrant :
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                        <li>Tolérance aux pannes : si une carte tombe, l'autre prend le relais</li>
                        <li>Augmentation potentielle de la bande passante</li>
                        <li>Continuité de service sans interruption</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Stockage RAID</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Le serveur dispose de deux configurations RAID distinctes pour séparer les usages :
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                        <li>
                          <strong>RAID 2 To</strong> : Stockage principal pour les VMs et conteneurs
                        </li>
                        <li>
                          <strong>RAID 1 To</strong> : Stockage dédié aux sauvegardes et données critiques
                        </li>
                        <li>Protection contre la perte de données en cas de panne disque</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Machines virtuelles et conteneurs</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <Badge className="bg-emerald-600 mb-2">Conteneur LXC</Badge>
                      <h4 className="font-medium">Site Web Portfolio</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Ce portfolio est hébergé dans un conteneur LXC sur le serveur Proxmox. Les conteneurs LXC sont
                        plus légers qu'une VM complète car ils partagent le noyau de l'hôte, offrant d'excellentes
                        performances pour les services web.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <Badge className="bg-emerald-600 mb-2">VM</Badge>
                      <h4 className="font-medium">OPNsense</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Pare-feu et routeur virtualisé assurant la sécurité du réseau, le proxy inverse avec HAProxy et
                        la gestion des certificats SSL via ACME.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <Badge className="bg-emerald-600 mb-2">VM</Badge>
                      <h4 className="font-medium">Nextcloud</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Serveur de fichiers personnel avec gestion des utilisateurs, synchronisation et partage de
                        fichiers sécurisé.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <Badge className="bg-emerald-600 mb-2">Autres services</Badge>
                      <h4 className="font-medium">Infrastructure complète</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Possibilité d'ajouter facilement de nouveaux services grâce à la flexibilité de Proxmox et aux
                        ressources disponibles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Compétences développées</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-600">Proxmox VE</Badge>
                    <Badge className="bg-emerald-600">Virtualisation KVM</Badge>
                    <Badge className="bg-emerald-600">Conteneurs LXC</Badge>
                    <Badge className="bg-emerald-600">Configuration RAID</Badge>
                    <Badge className="bg-emerald-600">Bonding réseau</Badge>
                    <Badge className="bg-emerald-600">Gestion du stockage</Badge>
                    <Badge className="bg-emerald-600">Snapshots et sauvegardes</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ONGLET OPNSENSE */}
          <TabsContent value="opnsense" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-emerald-600" />
                  Pare-feu OPNsense
                </CardTitle>
                <CardDescription>
                  Sécurisation du réseau, proxy inverse HAProxy et gestion des certificats SSL
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Qu'est-ce qu'OPNsense ?</h3>
                  <p className="text-sm text-muted-foreground">
                    OPNsense est un pare-feu et routeur open-source basé sur FreeBSD. Il offre une interface web moderne
                    et de nombreuses fonctionnalités de sécurité réseau : filtrage de paquets, VPN, détection
                    d'intrusion (IDS/IPS), proxy, et bien plus. C'est une alternative gratuite et puissante aux
                    solutions commerciales comme pfSense ou les appliances Fortinet/Sophos.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Shield className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Pare-feu</h3>
                    <p className="text-sm text-muted-foreground">Filtrage et règles de sécurité</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Router className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">HAProxy</h3>
                    <p className="text-sm text-muted-foreground">Proxy inverse et load balancing</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Network className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">ACME Client</h3>
                    <p className="text-sm text-muted-foreground">Certificats SSL Let's Encrypt</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Fonctionnalités configurées</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Sécurisation des connexions</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        OPNsense agit comme point d'entrée unique du réseau, filtrant tout le trafic entrant et sortant
                        :
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                        <li>Règles de pare-feu strictes par défaut (deny all)</li>
                        <li>NAT et redirection de ports contrôlés</li>
                        <li>Journalisation des connexions pour audit</li>
                        <li>Protection contre les attaques courantes</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">HAProxy - Proxy inverse</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        HAProxy est un proxy inverse performant qui permet de :
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                        <li>Exposer plusieurs services web sur une seule IP publique</li>
                        <li>Router le trafic vers le bon serveur selon le nom de domaine</li>
                        <li>Terminer les connexions SSL (SSL offloading)</li>
                        <li>Répartir la charge entre plusieurs serveurs (load balancing)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Gestion des certificats SSL</h3>
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">ACME Client - Let's Encrypt</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Le plugin ACME d'OPNsense permet d'obtenir et renouveler automatiquement des certificats SSL
                      gratuits via Let's Encrypt :
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                      <li>Certificats SSL/TLS gratuits et reconnus par tous les navigateurs</li>
                      <li>Renouvellement automatique avant expiration (tous les 90 jours)</li>
                      <li>Validation DNS ou HTTP pour prouver la propriété du domaine</li>
                      <li>Intégration directe avec HAProxy pour le HTTPS</li>
                      <li>Sécurisation de tous mes services exposés (portfolio, Nextcloud, etc.)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Architecture réseau</h3>
                  <div className="rounded-lg border p-4 bg-slate-800/50">
                    <p className="text-sm text-muted-foreground mb-3">Flux de connexion pour accéder aux services :</p>
                    <div className="text-sm text-muted-foreground font-mono">
                      Internet → OPNsense (HAProxy + SSL) → Services internes (Portfolio, Nextcloud, etc.)
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Compétences développées</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-600">OPNsense</Badge>
                    <Badge className="bg-emerald-600">Pare-feu</Badge>
                    <Badge className="bg-emerald-600">HAProxy</Badge>
                    <Badge className="bg-emerald-600">Let's Encrypt</Badge>
                    <Badge className="bg-emerald-600">Certificats SSL</Badge>
                    <Badge className="bg-emerald-600">Proxy inverse</Badge>
                    <Badge className="bg-emerald-600">Sécurité réseau</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ONGLET SERVICES */}
          <TabsContent value="services" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Cloud className="h-8 w-8 text-emerald-600" />
                  Services hébergés
                </CardTitle>
                <CardDescription>Nextcloud, site web portfolio et infrastructure réseau</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Cloud className="h-8 w-8 text-emerald-600" />
                    <div>
                      <h3 className="text-xl font-bold">Nextcloud</h3>
                      <p className="text-sm text-muted-foreground">Serveur de fichiers personnel</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Qu'est-ce que Nextcloud ?</h4>
                      <p className="text-sm text-muted-foreground">
                        Nextcloud est une plateforme de cloud privé open-source, alternative auto-hébergée à Google
                        Drive, Dropbox ou OneDrive. Elle permet de stocker, synchroniser et partager des fichiers tout
                        en gardant le contrôle total sur ses données.
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">Fonctionnalités configurées</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                          <li>Stockage et synchronisation de fichiers</li>
                          <li>Gestion multi-utilisateurs avec comptes dédiés</li>
                          <li>Gestion fine des droits et permissions</li>
                          <li>Partage de fichiers sécurisé (liens, mots de passe)</li>
                          <li>Synchronisation automatique avec les appareils</li>
                        </ul>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">Gestion des utilisateurs</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                          <li>Création de comptes pour famille/amis</li>
                          <li>Quotas de stockage par utilisateur</li>
                          <li>Groupes pour partages simplifiés</li>
                          <li>Authentification sécurisée</li>
                          <li>Journalisation des accès</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MonitorSmartphone className="h-8 w-8 text-emerald-600" />
                    <div>
                      <h3 className="text-xl font-bold">Site Web Portfolio</h3>
                      <p className="text-sm text-muted-foreground">Ce site que vous consultez actuellement</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Ce portfolio est hébergé sur mon infrastructure personnelle, dans un conteneur LXC sur le serveur
                      Proxmox. Il est accessible via HAProxy sur OPNsense avec un certificat SSL Let's Encrypt pour une
                      connexion sécurisée.
                    </p>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Stack technique</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                        <li>Next.js / React pour le frontend</li>
                        <li>Conteneur LXC sur Proxmox</li>
                        <li>Reverse proxy HAProxy sur OPNsense</li>
                        <li>Certificat SSL Let's Encrypt automatisé</li>
                        <li>Domaine personnalisé tilio.tech</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Network className="h-8 w-8 text-emerald-600" />
                    <div>
                      <h3 className="text-xl font-bold">Switch manageable</h3>
                      <p className="text-sm text-muted-foreground">Segmentation réseau avec VLANs</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Un switch manageable permet de configurer des VLANs (Virtual LANs) pour segmenter le réseau en
                      plusieurs sous-réseaux logiques. Cette segmentation améliore la sécurité et l'organisation du
                      réseau.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border p-4">
                        <Badge className="bg-emerald-600 mb-2">VLAN LAN_WAN</Badge>
                        <h4 className="font-medium">Réseau externe</h4>
                        <p className="mt-2 text-sm text-muted-foreground">
                          VLAN dédié à la connexion Internet et aux services exposés publiquement. Isolé du réseau
                          interne pour plus de sécurité.
                        </p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <Badge className="bg-emerald-600 mb-2">VLAN LAN_VM</Badge>
                        <h4 className="font-medium">Réseau des machines virtuelles</h4>
                        <p className="mt-2 text-sm text-muted-foreground">
                          VLAN dédié aux VMs et conteneurs du serveur Proxmox. Permet une communication sécurisée entre
                          les services internes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Compétences développées</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-600">Nextcloud</Badge>
                    <Badge className="bg-emerald-600">Auto-hébergement</Badge>
                    <Badge className="bg-emerald-600">Gestion des utilisateurs</Badge>
                    <Badge className="bg-emerald-600">VLANs</Badge>
                    <Badge className="bg-emerald-600">Switch manageable</Badge>
                    <Badge className="bg-emerald-600">Segmentation réseau</Badge>
                    <Badge className="bg-emerald-600">Next.js</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ONGLET SUPERVISION */}
          <TabsContent value="supervision" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Activity className="h-8 w-8 text-emerald-600" />
                  Supervision Zabbix
                </CardTitle>
                <CardDescription>Surveillance de l'infrastructure sur Raspberry Pi avec Ubuntu</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Qu'est-ce que Zabbix ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Zabbix est une solution de supervision open-source de niveau entreprise. Elle permet de surveiller
                    en temps réel l'état et les performances des serveurs, équipements réseau, applications et services.
                    Zabbix collecte des métriques, génère des alertes en cas de problème et offre des tableaux de bord
                    visuels pour analyser l'état de l'infrastructure.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Cpu className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Raspberry Pi</h3>
                    <p className="text-sm text-muted-foreground">Ubuntu Server comme OS</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Activity className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Zabbix Server</h3>
                    <p className="text-sm text-muted-foreground">Collecte et analyse des données</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Network className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">SNMP/Agent</h3>
                    <p className="text-sm text-muted-foreground">Protocoles de supervision</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Infrastructure supervisée</h3>
                  <p className="text-sm text-muted-foreground">
                    Le serveur Zabbix, installé sur un Raspberry Pi avec Ubuntu, supervise l'ensemble de mon
                    infrastructure homelab :
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Serveur Proxmox</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                        <li>Utilisation CPU, RAM, stockage</li>
                        <li>État des disques et du RAID</li>
                        <li>Température des composants</li>
                        <li>Bande passante réseau</li>
                        <li>Disponibilité (uptime)</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Machines virtuelles</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                        <li>État de chaque VM et conteneur</li>
                        <li>Ressources consommées par VM</li>
                        <li>Services en cours d'exécution</li>
                        <li>Alertes en cas d'arrêt imprévu</li>
                        <li>Métriques applicatives</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Switch manageable</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                        <li>État des ports (up/down)</li>
                        <li>Trafic par port et par VLAN</li>
                        <li>Erreurs et collisions</li>
                        <li>Supervision via SNMP</li>
                        <li>Alertes sur changements d'état</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">OPNsense</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                        <li>État du pare-feu</li>
                        <li>Connexions actives</li>
                        <li>Trafic entrant/sortant</li>
                        <li>État des services (HAProxy, etc.)</li>
                        <li>Certificats SSL (expiration)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Pourquoi un Raspberry Pi ?</h3>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      J'ai choisi d'installer Zabbix sur un Raspberry Pi séparé du serveur principal pour plusieurs
                      raisons :
                    </p>
                    <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                      <li>
                        <strong>Indépendance</strong> : Si le serveur Proxmox tombe, la supervision reste active et peut
                        alerter
                      </li>
                      <li>
                        <strong>Faible consommation</strong> : Le Raspberry Pi consomme très peu d'électricité (5W
                        environ)
                      </li>
                      <li>
                        <strong>Toujours allumé</strong> : Peut fonctionner 24/7 sans impact sur la facture
                        d'électricité
                      </li>
                      <li>
                        <strong>Apprentissage</strong> : Permet de pratiquer l'administration Linux sur ARM
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Alertes et notifications</h3>
                  <div className="rounded-lg border p-4 bg-slate-800/50">
                    <p className="text-sm text-muted-foreground">
                      Zabbix est configuré pour envoyer des alertes en cas de problème :
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-sm space-y-1 text-muted-foreground">
                      <li>Serveur ou VM inaccessible</li>
                      <li>Utilisation CPU/RAM critique (&gt;90%)</li>
                      <li>Espace disque faible</li>
                      <li>Service arrêté (web, base de données, etc.)</li>
                      <li>Port switch down</li>
                      <li>Certificat SSL proche de l'expiration</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Compétences développées</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-600">Zabbix</Badge>
                    <Badge className="bg-emerald-600">Raspberry Pi</Badge>
                    <Badge className="bg-emerald-600">Ubuntu Server</Badge>
                    <Badge className="bg-emerald-600">SNMP</Badge>
                    <Badge className="bg-emerald-600">Supervision</Badge>
                    <Badge className="bg-emerald-600">Monitoring</Badge>
                    <Badge className="bg-emerald-600">Alerting</Badge>
                    <Badge className="bg-emerald-600">Linux ARM</Badge>
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
