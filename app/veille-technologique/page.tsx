import { CalendarDays, Cpu, Server, ComponentIcon as ChipIcon, Zap, Monitor, Gamepad } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function VeilleTechnologique() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Veille Technologique</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Suivi des processeurs AMD (2023-2025)
          </p>
        </div>

        <Tabs defaultValue="presentation" className="w-full">
          <TabsList className="grid w-full grid-cols-3 text-xs sm:text-sm">
            <TabsTrigger value="presentation">Présentation</TabsTrigger>
            <TabsTrigger value="methode">Méthode</TabsTrigger>
            <TabsTrigger value="evolution">Évolutions</TabsTrigger>
          </TabsList>

          <TabsContent value="presentation" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Micro Devices (AMD)</CardTitle>
                <CardDescription>Un acteur majeur dans l'industrie des semi-conducteurs (2023-2025)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/amd-banner.png"
                    alt="AMD - together we advance"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Évolution récente (2023-2025)</h3>
                  <p className="text-sm text-muted-foreground">
                    Entre 2023 et 2025, AMD a consolidé sa position de leader technologique dans l'industrie des
                    semi-conducteurs. Sous la direction de Dr. Lisa Su, l'entreprise a continué à innover avec le
                    déploiement de ses architectures Zen 4 et Zen 5, tout en renforçant sa présence sur les marchés des
                    serveurs, des stations de travail, des ordinateurs de bureau et des ordinateurs portables.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cette période a été marquée par une forte croissance des parts de marché d'AMD, particulièrement
                    dans le segment des serveurs où l'entreprise a dépassé les 30% de parts de marché pour la première
                    fois de son histoire. L'adoption de procédés de fabrication avancés (4nm et 3nm) et l'intégration de
                    technologies d'IA ont été au cœur de la stratégie d'AMD durant cette période.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Cpu className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Architecture Zen 5</h3>
                    <p className="text-sm text-muted-foreground">
                      Nouvelle architecture avec gains d'IPC significatifs et optimisations pour l'IA
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Server className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">EPYC Turin</h3>
                    <p className="text-sm text-muted-foreground">
                      5ème génération de processeurs pour serveurs avec jusqu'à 128 cœurs
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Monitor className="h-8 w-8 text-emerald-600" />
                    <h3 className="font-medium">Ryzen AI</h3>
                    <p className="text-sm text-muted-foreground">
                      Intégration d'unités de traitement neuronal (NPU) pour l'IA
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Avancées stratégiques 2023-2025</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                    <li>Acquisition de Xilinx finalisée et intégration complète des technologies FPGA</li>
                    <li>Lancement de la gamme Instinct MI300 pour concurrencer NVIDIA dans l'IA et le HPC</li>
                    <li>Partenariats renforcés avec les principaux fournisseurs cloud (AWS, Google, Microsoft)</li>
                    <li>Développement de solutions spécifiques pour l'IA générative</li>
                    <li>Adoption des procédés de fabrication 3nm de TSMC pour les produits haut de gamme</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Segments de marché (2023-2025)</h3>
                  <p className="text-sm text-muted-foreground">
                    Entre 2023 et 2025, AMD a renforcé sa présence sur tous ses segments de marché :
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Centres de données</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Parts de marché passées de 25% à plus de 35%, avec les séries EPYC Genoa, Bergamo et Turin
                        offrant jusqu'à 128 cœurs et des performances exceptionnelles pour l'IA et le HPC.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Stations de travail</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Domination du segment haut de gamme avec les Threadripper PRO 7000 et 8000, offrant jusqu'à 96
                        cœurs et des performances inégalées pour les créateurs de contenu.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium">Grand public</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Consolidation avec les Ryzen 7000 et 8000, intégrant des capacités d'IA et des performances
                        gaming exceptionnelles grâce à la technologie 3D V-Cache améliorée.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="methode" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Ma méthode de veille technologique</CardTitle>
                <CardDescription>
                  Organisation et processus pour suivre les évolutions des processeurs AMD
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Sources d'information</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Réseaux sociaux</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                        <li>Instagram</li>
                        <li>X (Twitter)</li>
                        <li>LinkedIn</li>
                        <li>Reddit</li>
                        <li>Forums spécialisés</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Contenu vidéo</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                        <li>YouTube (chaînes tech)</li>
                        <li>Conférences en ligne</li>
                        <li>Présentations officielles AMD</li>
                        <li>Événements tech (CES, Computex)</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Sources officielles</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                        <li>Site officiel AMD</li>
                        <li>Blog AMD</li>
                        <li>Communiqués de presse</li>
                        <li>Documentation technique</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Approche de veille</h3>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">
                      Ma méthode de veille technologique sur AMD est principalement basée sur une découverte organique
                      via les réseaux sociaux, suivie d'une recherche approfondie :
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-sm space-y-1 text-muted-foreground break-words">
                      <li>
                        <strong>Découverte</strong> : Je repère les nouvelles tendances et annonces sur les réseaux
                        sociaux (Instagram, X, LinkedIn)
                      </li>
                      <li>
                        <strong>Approfondissement</strong> : Lorsqu'un sujet m'intéresse, je recherche des informations
                        plus détaillées via YouTube, sites spécialisés et documentation officielle
                      </li>
                      <li>
                        <strong>Vérification</strong> : Je consulte les sources officielles AMD pour confirmer les
                        informations
                      </li>
                      <li>
                        <strong>Analyse</strong> : J'utilise l'IA pour m'aider à comprendre certains concepts techniques
                        complexes et synthétiser l'information
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Outils utilisés</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Découverte et recherche</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                        <li>Applications de réseaux sociaux (Instagram, X, LinkedIn)</li>
                        <li>YouTube pour les analyses vidéo</li>
                        <li>Navigateur web pour les recherches</li>
                        <li>Outils d'IA (ChatGPT, Claude) pour l'analyse et la synthèse</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Organisation des connaissances</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                        <li>Notes personnelles</li>
                        <li>Marque-pages et favoris</li>
                        <li>Historique de recherche</li>
                        <li>Partage d'informations avec la communauté tech</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Application pratique</h3>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">Cette veille technologique me permet de :</p>
                    <ul className="list-disc pl-5 mt-2 text-sm space-y-1 text-muted-foreground break-words">
                      <li>
                        Anticiper les évolutions technologiques pour mieux conseiller sur les choix d'infrastructure
                      </li>
                      <li>
                        Comprendre les avantages et inconvénients des différentes architectures pour des cas d'usage
                        spécifiques
                      </li>
                      <li>Optimiser les déploiements serveur en fonction des caractéristiques des processeurs</li>
                      <li>Estimer les coûts et bénéfices d'une migration vers de nouvelles plateformes</li>
                      <li>
                        Participer de manière éclairée aux discussions techniques avec les fournisseurs et partenaires
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="evolution" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Évolutions des processeurs AMD (2023-2025)</CardTitle>
                <CardDescription>Suivi des innovations pour les marchés professionnel et grand public</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <Tabs defaultValue="professionnel" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 text-xs sm:text-sm">
                    <TabsTrigger value="professionnel">Professionnel</TabsTrigger>
                    <TabsTrigger value="particuliers">Particuliers</TabsTrigger>
                  </TabsList>

                  <TabsContent value="professionnel" className="mt-6 space-y-6">
                    <div className="space-y-6">
                      <div className="rounded-lg border p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Server className="h-8 w-8 text-emerald-600" />
                            <h3 className="text-xl font-bold">EPYC Bergamo</h3>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            Avril 2023
                          </div>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h4 className="font-medium mb-2">Caractéristiques principales</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                              <li>Architecture Zen 4c (optimisée pour la densité)</li>
                              <li>Jusqu'à 128 cœurs / 256 threads</li>
                              <li>Gravure en 5nm (TSMC)</li>
                              <li>TDP de 200W à 400W</li>
                              <li>Support PCIe 5.0 et DDR5</li>
                              <li>Jusqu'à 12 canaux mémoire DDR5</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Avantages pour les entreprises</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                              <li>Densité de calcul inégalée avec 128 cœurs par socket</li>
                              <li>Optimisé pour les charges de travail cloud à haute densité</li>
                              <li>Excellente efficacité énergétique</li>
                              <li>Réduction des coûts d'infrastructure par VM ou conteneur</li>
                              <li>Compatible avec l'écosystème EPYC existant</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Zap className="h-8 w-8 text-emerald-600" />
                            <h3 className="text-xl font-bold">Threadripper PRO 7000 WX-Series</h3>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            Novembre 2023
                          </div>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h4 className="font-medium mb-2">Caractéristiques principales</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                              <li>Architecture Zen 4</li>
                              <li>Jusqu'à 64 cœurs / 128 threads</li>
                              <li>Gravure en 5nm (TSMC)</li>
                              <li>Fréquences boost jusqu'à 5.3 GHz</li>
                              <li>TDP de 350W</li>
                              <li>Support PCIe 5.0 (128 lignes)</li>
                              <li>8 canaux mémoire DDR5</li>
                              <li>Cache L3 jusqu'à 256 Mo</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Avantages pour les professionnels</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                              <li>Performances single-thread et multi-thread exceptionnelles</li>
                              <li>Capacité d'extension massive avec 128 lignes PCIe 5.0</li>
                              <li>Support jusqu'à 2 To de mémoire DDR5 ECC</li>
                              <li>Fonctionnalités de gestion et sécurité professionnelles</li>
                              <li>Performances jusqu'à 37% supérieures à la génération précédente</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <ChipIcon className="h-8 w-8 text-emerald-600" />
                            <h3 className="text-xl font-bold">AMD Instinct MI300</h3>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            Décembre 2023
                          </div>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h4 className="font-medium mb-2">Caractéristiques principales</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                              <li>Architecture APU hybride (CPU + GPU)</li>
                              <li>24 cœurs CPU Zen 4 + 228 unités de calcul CDNA 3</li>
                              <li>Mémoire HBM3 unifiée de 128 Go</li>
                              <li>Bande passante mémoire de 5,3 To/s</li>
                              <li>Performance FP16 jusqu'à 383 TFLOPS</li>
                              <li>Technologie d'empilage 3D avancée</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Avantages pour l'IA et le HPC</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                              <li>Architecture unifiée CPU+GPU avec mémoire partagée</li>
                              <li>Performances exceptionnelles pour l'IA et le calcul scientifique</li>
                              <li>Réduction de la latence entre CPU et GPU</li>
                              <li>Support des principaux frameworks d'IA (PyTorch, TensorFlow)</li>
                              <li>Efficacité énergétique supérieure aux solutions concurrentes</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Server className="h-8 w-8 text-emerald-600" />
                            <h3 className="text-xl font-bold">EPYC Turin</h3>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            Q3 2024
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Caractéristiques confirmées</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                            <li>Architecture Zen 5</li>
                            <li>Jusqu'à 128 cœurs / 256 threads</li>
                            <li>Gravure en 4nm (TSMC)</li>
                            <li>Améliorations significatives de l'IPC (+15-20%)</li>
                            <li>Fonctionnalités d'IA intégrées améliorées</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="particuliers" className="mt-6 space-y-6">
                    <div className="space-y-6">
                      <div className="rounded-lg border p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Cpu className="h-8 w-8 text-emerald-600" />
                            <h3 className="text-xl font-bold">Ryzen 7000X3D Series</h3>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            Février 2023
                          </div>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h4 className="font-medium mb-2">Caractéristiques principales</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                              <li>Architecture Zen 4 avec 3D V-Cache</li>
                              <li>Cache L3 supplémentaire empilé verticalement (96 Mo)</li>
                              <li>Fréquences légèrement réduites par rapport aux modèles X</li>
                              <li>Optimisés pour les jeux et applications sensibles à la latence</li>
                              <li>Socket AM5 (LGA 1718)</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Modèles disponibles</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                              <li>
                                <strong>Ryzen 9 7950X3D</strong> : 16 cœurs / 32 threads, 5.7 GHz max
                              </li>
                              <li>
                                <strong>Ryzen 9 7900X3D</strong> : 12 cœurs / 24 threads, 5.6 GHz max
                              </li>
                              <li>
                                <strong>Ryzen 7 7800X3D</strong> : 8 cœurs / 16 threads, 5.0 GHz max
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Monitor className="h-8 w-8 text-emerald-600" />
                            <h3 className="text-xl font-bold">Ryzen AI 8040 Series</h3>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            Décembre 2023
                          </div>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h4 className="font-medium mb-2">Caractéristiques principales</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                              <li>Architecture Zen 4 avec NPU intégré</li>
                              <li>NPU jusqu'à 50 TOPS de performance</li>
                              <li>Jusqu'à 8 cœurs / 16 threads</li>
                              <li>Graphiques RDNA 3.5 intégrés</li>
                              <li>Gravure en 4nm (TSMC)</li>
                              <li>Optimisé pour les charges de travail IA sur PC</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Modèles phares</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                              <li>
                                <strong>Ryzen AI 9 8945HS</strong> : 8 cœurs / 16 threads, NPU 50 TOPS, 5.2 GHz max
                              </li>
                              <li>
                                <strong>Ryzen AI 7 8840HS</strong> : 8 cœurs / 16 threads, NPU 40 TOPS, 5.1 GHz max
                              </li>
                              <li>
                                <strong>Ryzen AI 5 8640HS</strong> : 6 cœurs / 12 threads, NPU 30 TOPS, 5.0 GHz max
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Gamepad className="h-8 w-8 text-emerald-600" />
                            <h3 className="text-xl font-bold">Ryzen 8000 Series (Zen 5)</h3>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            Juillet 2024
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Caractéristiques principales</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                            <li>Architecture Zen 5 (nouvelle architecture)</li>
                            <li>Gravure en 4nm pour les cœurs (TSMC)</li>
                            <li>Amélioration de l'IPC de 16% par rapport à Zen 4</li>
                            <li>Jusqu'à 16 cœurs / 32 threads</li>
                            <li>Fréquences boost jusqu'à 5.7 GHz</li>
                          </ul>
                        </div>
                      </div>

                      <div className="rounded-lg border p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Monitor className="h-8 w-8 text-emerald-600" />
                            <h3 className="text-xl font-bold">Ryzen AI 9000 Series</h3>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            Prévu Q1 2025
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Caractéristiques attendues</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                            <li>Architecture Zen 5 avec NPU de nouvelle génération</li>
                            <li>NPU jusqu'à 75 TOPS de performance</li>
                            <li>Gravure en 3nm (TSMC)</li>
                            <li>Jusqu'à 12 cœurs / 24 threads</li>
                            <li>Graphiques RDNA 4 intégrés</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Impact sur le marché (2023-2025)</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2 text-emerald-500">Marché professionnel</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                        <li>Parts de marché dans les serveurs passées de 25% à plus de 35%</li>
                        <li>Adoption massive par les fournisseurs de cloud (AWS, Google Cloud, Microsoft Azure)</li>
                        <li>Percée significative dans le marché de l'IA avec les accélérateurs Instinct MI300</li>
                        <li>Domination du segment des stations de travail haut de gamme avec Threadripper PRO</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2 text-emerald-500">Marché grand public</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground break-words">
                        <li>Parts de marché desktop passées de 30% à environ 45%</li>
                        <li>Parts de marché laptop passées de 20% à environ 35%</li>
                        <li>Domination du segment gaming haut de gamme avec les processeurs X3D</li>
                        <li>Percée significative dans le segment des PC IA avec les séries Ryzen AI</li>
                      </ul>
                    </div>
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
