import { CalendarCheck, HomeIcon, LucideProps, Settings, User2 } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface iAppProps {
    id: number;
    name: string;
    href: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
} 

export const dashboardLinks: iAppProps[] = [
    {
        id: 0,
        name: "Event Types",
        href: "/dashboard",
        icon: HomeIcon,
    }, 
    {
        id: 1,
        name: "Meetings",
        href: "/dashboard/meetings",
        icon: User2,
    },
    {
        id: 2,
        name: "Availability",
        href: "/dashboard/availability",
        icon: CalendarCheck,
    },
    {
        id: 3,
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    }
]


export function DashboardLinks() {
    return(
        <>
            {dashboardLinks.map((link)=>{
                <Link key={link.id} href={link.href}>
                    <link.icon className="size-4" />
                    {link.name}
                </Link>
            })}
        </>
    )
}