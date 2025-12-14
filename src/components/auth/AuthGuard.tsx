'use client';

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { Lock } from "lucide-react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  useEffect(() => {
    if (!loading && !session) {
      // Optional: Auto redirect
      // signIn(); 
    }
  }, [loading, session]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-primary">
         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
        <div className="mb-4 p-4 rounded-full bg-primary/10">
          <Lock className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-2 text-white">Access Restricted</h1>
        <p className="text-muted-foreground mb-6 max-w-md">
          This area is exclusive to Swift Coding Club members. Please sign in to verify your membership.
        </p>
        <button
          onClick={() => signIn('github')}
          className="px-6 py-3 rounded-full bg-primary text-white font-bold hover:opacity-90 transition-all"
        >
          Verify Membership
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
