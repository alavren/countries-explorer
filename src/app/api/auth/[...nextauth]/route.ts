import bcrypt from 'bcryptjs';
import { User as AuthUser } from "next-auth";
import NextAuth from 'next-auth/next';
import CredentialsProvider from "next-auth/providers/credentials";

import { connectMongoDB } from "../../../../../lib/mongodb";
import User from '../../../../../models/user';

const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await connectMongoDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({user}: { user: AuthUser }) {
      await connectMongoDB();
      try {
        const existingUser = await User.findOne({email: user.email});
        if (!existingUser) {
          const newUser = new User({
            email: user.email,
          });

          await newUser.save();
          return true;
        }
        return true;
      } catch (err) {
        console.log("Error saving user", err);
        return false;
      }
    }
  },
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
