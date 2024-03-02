import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
// import bcrypt from "bcrypt";

// const login = async (credentials) => {
//   try {
//     connectToDB();
//     const user = await User.findOne({ username: credentials.username });

//     if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

//     // const isPasswordCorrect = await bcrypt.compare(
//     //   credentials.password,
//     //   user.password
//     // );
//     const isPasswordCorrect = () => {
//       if (user.password === credentials.password) {
//         return true;
//       }
//       return false;
//     };

//     if (!isPasswordCorrect) throw new Error("Wrong credentials!");

//     return user;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to login!");
//   }
// };

// export const { signIn, signOut, auth } = NextAuth({
//   ...authConfig,
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         try {
//           const user = await login(credentials);
//           return user;
//         } catch (err) {
//           return null;
//         }
//       },
//     }),
//   ],
//   // ADD ADDITIONAL INFORMATION TO SESSION
//   callbacks: {
//     async signIn(user) {
//       if (user) {
//         return "/dashboard"; // Redirect to the admin panel
//       } else {
//         return "Invalid credentials"; // Redirect to the user panel
//       }
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.username = user.username;
//         token.img = user.img;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.username = token.username;
//         session.user.img = token.img;
//       }
//       return session;
//     },
//   },
// });

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    const isPasswordCorrect = () => {
      if (credentials.password === user.password) {
        return true;
      }
      return false;
    };

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        // token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        // session.user.img = token.img;
      }
      return session;
    },
  },
});
