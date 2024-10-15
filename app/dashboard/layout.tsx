"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { ReactNode } from "react";
import { DashboardLinks } from "../components/DashboardLinks";
import { Icon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"; // Ensure these are correctly imported.
import { ThemeToggle } from "../components/ThemeToggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { auth } from "../lib/auth";

export default async function DashboardLayout({ children }: { children: ReactNode }) {

    const session = await auth();
    return (
        <>
            <div className="min-h-screen w-full grid md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr]">
                {/* Sidebar */}
                <div className="hidden md:block border-r bg-muted/40">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                            <Link href="/" className="flex items-center gap-2">
                                <Image src={Logo} alt="Logo" className="size-8" />
                                <p className="text-xl font-bold px-2">
                                    Chrono<span className="text-primary">App</span>
                                </p>
                            </Link>
                        </div>
                        {/* Normal Side Menu */}
                        <div className="flex-1">
                            <nav className="grid items-start px-2 lg:px-4">
                                <DashboardLinks />
                            </nav>
                        </div>
                    </div>
                </div>
                {/* resplosive Side Menu */}
                <div className="flex flex-col">
                    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className="md:hidden shrink-0" size='icon' variant="outline">
                                    <Menu className="size-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="flex flex-col">
                                <nav className="grid gap-2 mt-10">
                                    <DashboardLinks />
                                </nav>
                            </SheetContent>
                        </Sheet>

                        <div className="ml-auto flex items-center gap-x-4">
                            <ThemeToggle />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant={"secondary"} size="icon" className="rounded-full">
                                        <img src={session?.user?.image as string} alt="Profile Image" width={20} height={20} className="w-full h-full rounded-full " />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild><Link href="/dashboard/settings">Settings</Link></DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <button className="w-full text-left">Logout</button>  </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </header>
                </div >
            </div >
        </>
    );
}
