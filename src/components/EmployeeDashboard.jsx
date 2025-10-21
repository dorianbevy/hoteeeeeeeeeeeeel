import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Bell,
    Calendar,
    Search,
    Users,
    Bed,
    LogOut,
    UtensilsCrossed,
    MessageCircle,
    LayoutDashboard,
} from "lucide-react";

// Palette chaude inspirée de Solin
// Fond app: bg-[#FAF9F7]
// Accent: text-[#D4A373] / bg-[#D4A373]
// Hover accent: bg-[#C58C62]

const nav = [
    { label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
    { label: "Réservations", icon: <Calendar className="h-4 w-4" /> },
    { label: "Planning", icon: <Users className="h-4 w-4" /> },
    { label: "Restaurant / Menu", icon: <UtensilsCrossed className="h-4 w-4" /> },
    { label: "Chambres", icon: <Bed className="h-4 w-4" /> },
    { label: "Messages", icon: <MessageCircle className="h-4 w-4" /> },
    { label: "Employés", icon: <Users className="h-4 w-4" /> },
];

const reservations = [
    { name: "Marie Durant", room: "203", in: "21 Oct", out: "24 Oct", status: "Confirmée" },
    { name: "Alex Kim", room: "105", in: "21 Oct", out: "22 Oct", status: "En attente" },
    { name: "Jonas Meyer", room: "402", in: "22 Oct", out: "25 Oct", status: "Confirmée" },
    { name: "Lina Rossi", room: "307", in: "21 Oct", out: "23 Oct", status: "Annulée" },
];

const tasks = [
    { title: "Chambre 204 à nettoyer", tag: "Housekeeping", tone: "info" },
    { title: "Mini-bar 310 à vérifier", tag: "Maintenance", tone: "warn" },
    { title: "Allergie gluten client 105", tag: "Restaurant", tone: "info" },
    { title: "Rideau 118 cassé", tag: "Maintenance", tone: "warn" },
];

const kpis = [
    { label: "Taux d'occupation", value: "82%", sub: "+4% vs hier" },
    { label: "Arrivées aujourd'hui", value: "27", sub: "5 early check-in" },
    { label: "Départs aujourd'hui", value: "19", sub: "3 late check-out" },
];

export default function EmployeeDashboard() {
    return (
        <div className="flex min-h-screen bg-[#FAF9F7] text-[#2E2A27]">
            {/* Sidebar */}
            <aside className="hidden md:flex w-64 flex-col border-r bg-[#FFF8F1]">
                <div className="px-6 py-5">
                    <div className="text-2xl font-semibold tracking-tight">Solin</div>
                    <div className="mt-1 text-sm text-neutral-500">Interface employé</div>
                </div>
                <Separator />
                <nav className="flex-1 px-2 py-4 space-y-1">
                    {nav.map((item) => (
                        <button
                            key={item.label}
                            className="w-full flex items-center gap-3 rounded-xl px-3 py-2 text-left hover:bg-[#F5EDE5]"
                        >
                            <span className="text-[#D4A373]">{item.icon}</span>
                            <span className="text-sm font-medium">{item.label}</span>
                        </button>
                    ))}
                </nav>
                <Separator />
                <div className="p-4 flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="https://i.pravatar.cc/100?img=12" alt="" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="text-sm font-medium">Alex Dupont</div>
                        <div className="text-xs text-neutral-500">Réception</div>
                    </div>
                    <Button variant="ghost" size="icon" aria-label="Déconnexion">
                        <LogOut className="h-4 w-4" />
                    </Button>
                </div>
            </aside>

            {/* Main */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex h-16 items-center gap-3 border-b bg-white px-4 md:px-6">
                    <div className="relative max-w-xl flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                        <Input
                            className="pl-9 rounded-xl"
                            placeholder="Rechercher une réservation, un client, une chambre"
                        />
                    </div>
                    <Button variant="ghost" size="icon" aria-label="Notifications">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="https://i.pravatar.cc/100?img=5" alt="" />
                        <AvatarFallback>AU</AvatarFallback>
                    </Avatar>
                </header>

                {/* Content */}
                <main className="flex-1 p-4 md:p-6 space-y-6">
                    {/* KPIs */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {kpis.map((k) => (
                            <Card key={k.label} className="rounded-2xl">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium text-neutral-600">{k.label}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-end justify-between">
                                    <div className="text-3xl font-semibold">{k.value}</div>
                                    <Badge className="bg-[#F5EDE5] text-[#C58C62] hover:bg-[#F5EDE5]">{k.sub}</Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Tabs */}
                    <Tabs defaultValue="reservations" className="space-y-4">
                        <TabsList className="rounded-xl bg-[#FFF8F1]">
                            <TabsTrigger value="reservations">Réservations</TabsTrigger>
                            <TabsTrigger value="planning">Planning</TabsTrigger>
                            <TabsTrigger value="messages">Messages</TabsTrigger>
                        </TabsList>

                        {/* Réservations */}
                        <TabsContent value="reservations" className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="text-base font-medium">Réservations récentes</div>
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" className="rounded-xl">Exporter</Button>
                                    <Button className="rounded-xl bg-[#D4A373] hover:bg-[#C58C62] border-0">+ Nouvelle</Button>
                                </div>
                            </div>
                            <Card className="rounded-2xl">
                                <CardContent className="p-0">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Client</TableHead>
                                                <TableHead>Chambre</TableHead>
                                                <TableHead>Check-in</TableHead>
                                                <TableHead>Check-out</TableHead>
                                                <TableHead>Statut</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {reservations.map((r) => (
                                                <TableRow key={r.name}>
                                                    <TableCell className="font-medium">{r.name}</TableCell>
                                                    <TableCell>#{r.room}</TableCell>
                                                    <TableCell>{r.in}</TableCell>
                                                    <TableCell>{r.out}</TableCell>
                                                    <TableCell>
                                                        <Badge
                                                            variant="secondary"
                                                            className={
                                                                r.status === "Confirmée"
                                                                    ? "bg-green-100 text-green-700"
                                                                    : r.status === "Annulée"
                                                                        ? "bg-red-100 text-red-700"
                                                                        : "bg-amber-100 text-amber-700"
                                                            }
                                                        >
                                                            {r.status}
                                                        </Badge>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Planning */}
                        <TabsContent value="planning" className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="text-base font-medium">Planning semaine</div>
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" className="rounded-xl">Exporter PDF</Button>
                                    <Button className="rounded-xl bg-[#D4A373] hover:bg-[#C58C62] border-0">Éditer</Button>
                                </div>
                            </div>
                            <Card className="rounded-2xl">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium text-neutral-600">21 Oct → 27 Oct</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {/* Placeholder timeline simple */}
                                    <div className="grid grid-cols-7 gap-3">
                                        {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((d) => (
                                            <div key={d} className="space-y-2">
                                                <div className="text-xs text-neutral-500">{d}</div>
                                                <div className="h-24 rounded-xl bg-[#F5EDE5]" />
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Messages */}
                        <TabsContent value="messages" className="space-y-4">
                            <div className="text-base font-medium">Messages et signalements</div>
                            <Card className="rounded-2xl">
                                <CardContent className="p-0">
                                    <ScrollArea className="h-64 p-4">
                                        <div className="space-y-3">
                                            {tasks.map((t, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center justify-between rounded-xl border bg-white p-3"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <Badge
                                                            className={
                                                                t.tone === "warn"
                                                                    ? "bg-amber-100 text-amber-700"
                                                                    : "bg-[#F5EDE5] text-[#C58C62]"
                                                            }
                                                        >
                                                            {t.tag}
                                                        </Badge>
                                                        <div className="text-sm font-medium">{t.title}</div>
                                                    </div>
                                                    <Button variant="outline" size="sm" className="rounded-xl">
                                                        Marquer fait
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    );
}
