import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "950249935933-dgl2otsv589mkachndb7uocs5hk14do4.apps.googleusercontent.com",
      clientSecret: "",
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});
export { handler as GET, handler as POST };
