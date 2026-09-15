import { CalendarDays, FileText, HeartPulse, Home, UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Profile", icon: UserRound, path: "/user-profile" },
  { label: "Medical Records", icon: FileText, path: "/medical-records" },
  { label: "Appointments", icon: CalendarDays, path: "/user-home" },
];

export default function UserHome() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="relative flex w-full flex-col border-b border-border bg-card px-5 py-6 md:fixed md:inset-y-0 md:left-0 md:w-72 md:border-b-0 md:border-r">
        <Link to="/" className="flex items-center gap-3 px-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <HeartPulse className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">ArogyaAI</span>
        </Link>

        <div className="mt-12 px-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">My Health</p>
          <nav className="mt-4 space-y-2">
            {navigation.map(({ label, icon: Icon, path }) => (
              <Link
                key={label}
                to={path}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                  location.pathname === path && "bg-accent text-accent-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto border-t border-border pt-5">
          <Link to="/" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
            <Home className="h-5 w-5" />
            Home
          </Link>
        </div>
      </aside>

      <main className="min-h-screen p-6 sm:p-10 md:ml-72">
        <div className="mx-auto max-w-5xl">
          <header>
            <p className="text-sm font-medium text-primary">Welcome back</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Your health space</h1>
          </header>
          <div className="mt-10 min-h-[calc(100vh-220px)] rounded-3xl border border-dashed border-border bg-card/30" />
        </div>
      </main>
    </div>
  );
}
