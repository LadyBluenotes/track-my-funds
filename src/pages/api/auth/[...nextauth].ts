import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { clientPromise } from "@/lib/db/mongodb";

export const authOptions: NextAuthOptions = {
  debug: true,
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET || "",
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      return {
        ...session,
        user: {
          ...user,
        },
      };
    },
  },
};

export default NextAuth({
  ...authOptions,
});
