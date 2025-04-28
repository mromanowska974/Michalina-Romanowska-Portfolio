import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { getQuestion } from '../lib/questions';

export const {auth, handlers, signIn, signOut} = NextAuth({
    session: {
        strategy: 'jwt',
        maxAge: 60 * 10, // 10 minutes
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                if (!credentials) {
                    return null; 
                }

                try {
                    const answer = credentials.answer;
                    const question = getQuestion(credentials.questionId); 

                    if(await bcrypt.compare(answer, question.answer)) {
                        return req; 
                    } else {
                        throw new Error('Invalid answer'); 
                    }
                } catch (error) {
                    console.error('Error during authorization:', error);
                }
            }
        })
    ]
});