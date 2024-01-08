import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import { User as AuthUser } from "next-auth/core/types";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectMongoDB } from "./mongodb";
import User from "../models/user";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
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