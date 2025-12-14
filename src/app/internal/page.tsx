import AuthGuard from "@/components/auth/AuthGuard";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { FileText, Lock } from "lucide-react";

export default async function InternalPage() {
  const docs = await getAllPosts('internal');

  return (
    <AuthGuard>
      <div className="min-h-screen pt-24 pb-12 px-4 container mx-auto">
        <div className="flex items-center gap-4 mb-8">
           <div className="p-3 bg-secondary/10 rounded-full">
             <Lock className="w-6 h-6 text-secondary" />
           </div>
           <div>
             <h1 className="text-4xl font-bold text-white">Internal Knowledge Base</h1>
             <p className="text-muted-foreground">Classified resources for verified members.</p>
           </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {docs.map((doc: any) => (
             <Link 
              key={doc.slug}
              href={`/internal/${doc.slug}`} 
              className="group p-6 bg-card border border-white/10 rounded-xl hover:border-secondary/50 transition-all"
            >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <FileText className="w-6 h-6 text-gray-400 group-hover:text-secondary" />
                  </div>
                  <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                    CONFIDENTIAL
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {doc.title || doc.slug}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {doc.description || "No description provided."}
                </p>
             </Link>
          ))}
        </div>
      </div>
    </AuthGuard>
  );
}
