import Link from "next/link"
import { ArrowLeft, Briefcase, GraduationCap, Server, Shield, Download, Network } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Parcours() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-emerald-500 hover:text-emerald-600"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Retour à l'accueil
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mon Parcours</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Découvrez mon parcours académique, professionnel et mes compétences techniques
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Chronologie</h2>

          <div className="relative border-l-2 border-emerald-600 pl-8 pb-8">
            <div className="mb-12 space-y-8">
              {/* BAC */}
              <div className="relative">
                <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <GraduationCap className="h-3 w-3" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">BAC pro SN RISC mention bien</h3>
                    <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-xs text-emerald-400">
                      2020 - 2023
                    </span>
                  </div>
                  <p className="text-gray-300">Lycée St Vincent de Paul (Collongues sous Salève)</p>
                  <p className="text-sm text-gray-400">
                    Formation en Systèmes Numériques option Réseaux Informatiques et Systèmes Communicants.
                  </p>
                </div>
              </div>

              {/* Stages pendant le BAC Pro */}
              <div className="relative">
                <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <Briefcase className="h-3 w-3" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">Stages pendant le BAC Pro</h3>
                    <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-xs text-emerald-400">
                      2020 - 2023
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Pendant mon BAC Pro, j'ai effectué plusieurs stages en entreprise pour développer mes compétences
                    pratiques :
                  </p>
                  <ul className="ml-4 mt-2 list-disc text-sm text-gray-400">
                    <li>
                      <strong>Stage EDF CIH</strong> (4 semaines) - Centre d'Ingénierie Hydraulique, axé sur la création
                      de matrices de flux réseaux.
                    </li>
                    <li>
                      <strong>Stage JyMCz</strong> (4 semaines) - Création de sites web et développement web.
                    </li>
                    <li>
                      <strong>Stages LTI informatique</strong> (2 x 4 semaines) - Installation et maintenance
                      d'infrastructures réseaux, pose et installation de postes de travail.
                    </li>
                  </ul>
                </div>
              </div>

              {/* BTS */}
              <div className="relative">
                <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <GraduationCap className="h-3 w-3" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">BTS SIO option SISR obtenu</h3>
                    <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-xs text-emerald-400">
                      2023 - 2025
                    </span>
                  </div>
                  <p className="text-gray-300">École Saint Michel, Annecy</p>
                  <p className="text-sm text-gray-400">
                    Formation en Services Informatiques aux Organisations, spécialité Solutions d'Infrastructure,
                    Systèmes et Réseaux, réalisée en alternance.
                  </p>
                  <ul className="ml-4 mt-2 list-disc text-sm text-gray-400">
                    <li>Administration des systèmes Windows Server et Linux</li>
                    <li>Configuration et maintenance des équipements réseau</li>
                    <li>Mise en place de solutions de virtualisation</li>
                    <li>Sécurisation des infrastructures informatiques</li>
                    <li>Gestion de projets informatiques</li>
                  </ul>
                </div>
              </div>

              {/* Bachelor CRIS */}
              <div className="relative">
                <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <GraduationCap className="h-3 w-3" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">Bachelor CRIS en Alternance</h3>
                    <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-xs text-emerald-400">
                      2025 - présent
                    </span>
                  </div>
                  <p className="text-gray-300">École Saint Michel, Annecy</p>
                  <p className="text-sm text-gray-400">
                    Formation Bachelor Concepteur Réseaux Infrastructures et Sécurité en alternance.
                  </p>
                  <ul className="ml-4 mt-2 list-disc text-sm text-gray-400">
                    <li>Conception d'architectures réseau sécurisées</li>
                    <li>Sécurité des systèmes d'information</li>
                    <li>Gestion des incidents de sécurité</li>
                    <li>Audit et conformité des infrastructures</li>
                    <li>Management de projets cybersécurité</li>
                    <li>Conception et déploiement d'infrastructures critiques</li>
                  </ul>
                </div>
              </div>

              {/* LTI Informatique - Alternance */}
              <div className="relative">
                <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <Briefcase className="h-3 w-3" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">Alternance Technicien Systèmes et Réseaux</h3>
                    <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-xs text-emerald-400">
                      2023 - Présent
                    </span>
                  </div>
                  <p className="text-gray-300">LTI informatique, Annecy</p>
                  <p className="text-sm text-gray-400">
                    Alternance en tant que technicien systèmes et réseaux, participant à la mise en place et à la
                    maintenance d'infrastructures IT pour les clients de LTI.
                  </p>
                  <ul className="ml-4 mt-2 list-disc text-sm text-gray-400">
                    <li>Préparation de postes clients avec scripts d'automatisation (Batch, PowerShell)</li>
                    <li>Administration de serveurs Windows et configuration Active Directory</li>
                    <li>Configuration et maintenance des pare-feu Stormshield</li>
                    <li>Déploiement d'infrastructures chez les clients</li>
                    <li>Support technique niveau 2 et 3 pour les clients</li>
                    <li>Participation à des projets de migration (messagerie, serveurs)</li>
                    <li>Installation et configuration de solutions antivirus (ESET, Gravity Zone)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Compétences techniques</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Server className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl font-bold">Systèmes</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span className="text-sm">Windows Server</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Active Directory</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Linux</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Virtualisation (Hyper-V, VMware, Proxmox)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Scripting (Batch, PowerShell)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Déploiement automatisé</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Network className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl font-bold">Réseaux</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span className="text-sm">TCP/IP</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Routage et commutation</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">VLANs</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Stormshield</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Wi-Fi</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Supervision (Zabbix)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-800/50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl font-bold">Sécurité & Support</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span className="text-sm">Pare-feu</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">VPN</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Solutions antivirus (ESET, Gravity Zone)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Gestion des identités (Active Directory)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Dépannage et support technique</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Migration de données et messagerie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <a href="/documents/cv-tilio.pdf" download>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Télécharger mon CV complet <Download className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
