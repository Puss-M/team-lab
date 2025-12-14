import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: "read:user read:org",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (process.env.NODE_ENV === "development" && process.env.SKIP_ORG_CHECK === "true") {
        return true;
      }

      if (account?.provider === "github") {
        try {
          const token = account.access_token;
          const res = await fetch("https://api.github.com/user/orgs", {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github.v3+json",
            },
          });
          
          if (!res.ok) {
            console.error("Failed to fetch user orgs");
            return false;
          }

          const orgs = await res.json();
          const targetOrg = process.env.GITHUB_ORG_NAME || "swift-coding-club";
          
          const isMember = orgs.some((org: any) => org.login === targetOrg);

          if (!isMember) {
            console.log(`User ${user.email} is not a member of ${targetOrg}`);
            return false;
          }

          return true;
        } catch (error) {
          console.error("Error checking GitHub Org membership", error);
          return false;
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
