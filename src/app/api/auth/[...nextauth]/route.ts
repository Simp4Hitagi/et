import NextAuth from "next-auth";
import { authOptions } from "../../../../../libs/components/utils/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };