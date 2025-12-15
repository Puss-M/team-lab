import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/internal");
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Internal Hub</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Restricted Access</p>
        </div>
        <nav className="space-y-4">
          <Link
            href="/internal"
            className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Dashboard
          </Link>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
             <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
               User
             </p>
             <div className="px-4 flex items-center gap-3">
                {session.user?.image && (
                    <img src={session.user.image} alt="User" className="w-8 h-8 rounded-full" />
                )}
                <span className="text-sm font-medium truncate">{session.user?.name}</span>
             </div>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-white dark:bg-black">
        {children}
      </main>
    </div>
  );
}
