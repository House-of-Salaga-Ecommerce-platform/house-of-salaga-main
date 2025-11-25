"use client";

import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Star,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AdminShell({ children }) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: ShoppingBag },
    { name: "Orders", href: "/admin/orders", icon: BarChart3 },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Reviews", href: "/admin/reviews", icon: Star },
    { name: "Reports", href: "/admin/reports", icon: BarChart3 },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-zinc-100">
      {/* SIDEBAR */}
      <aside className="w-64 hidden md:flex flex-col 
        bg-gradient-to-b from-[#0b1b33] to-[#071426] 
        text-white shadow-lg"
      >
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold tracking-tight text-amber-400">
            House of Salaga <span className="text-white">Admin</span>
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menu.map((item, index) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium
                  transition-all 
                  ${
                    active
                      ? "bg-white/10 text-white shadow"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Button
            variant="ghost"
            className="w-full flex items-center gap-2 
              border border-white/30 
              text-white 
              bg-transparent
              hover:bg-white/10
              hover:border-white/50"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <header className="w-full bg-white border-b shadow-sm p-4 flex justify-between items-center sticky top-0 z-40">
          <h2 className="text-lg font-semibold">Admin Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-600">Welcome, Admin</span>
          </div>
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
