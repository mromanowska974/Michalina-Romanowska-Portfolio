import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { getQuestion } from './lib/db/questions';

export const {auth, handlers, signIn, signOut} = NextAuth({
    session: {
        strategy: 'jwt',
        maxAge: 60 * 5, // 5 minutes
    },
    providers: [
        CredentialsProvider({
            authorize: async (credentials) => {
                if (!credentials) {
                    return null; 
                }

                let user = null;
                
                const question = await getQuestion(credentials.username);
                const answer = credentials.password;

                if(await bcrypt.compare(answer, question.answer)) {
                    user = question;
                    return user; 
                } else {
                    throw new Error('Invalid answer'); 
                }
            }
        })
    ]
});