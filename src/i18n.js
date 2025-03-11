import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

async function getTextFromFile(path) {
    const res = await fetch(`${path}`);

    if(!res.ok) {
        throw res;
    }

    return res.text();
}

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                navbar: {
                    mainPage: 'Main Page',
                    aboutMe: 'About Me',
                    projects: 'Projects',
                    contact: 'Contact',
                    language: 'Language'
                },
                contact: {
                    title: 'Contact Me',
                    text: await getTextFromFile('text-files/EN/contact.txt'),
                    form: {
                        fullName: 'Full Name or Company Name',
                        yourMessage: 'Your Message',
                        submit: 'Submit'
                    }
                },
                aboutMe: {
                    title: 'Something about me',
                    whoAmI: 'Who am I?',
                    skills: 'My skills'
                },
                introText: await getTextFromFile('text-files/EN/intro.txt')
            }
        },
        pl: {
            translation: {
                navbar: {
                    mainPage: 'Strona Główna',
                    aboutMe: 'O Mnie',
                    projects: 'Projekty',
                    contact: 'Kontakt',
                    language: 'Język'
                },
                contact: {
                    title: 'Skontaktuj się',
                    text: await getTextFromFile('text-files/PL/contact.txt'),
                    form: {
                        fullName: 'Imię i Nazwisko lub Nazwa Firmy',
                        yourMessage: 'Twoja Wiadomość',
                        submit: 'Wyślij'
                    }
                },
                aboutMe: {
                    title: 'Kilka słów o mnie',
                    whoAmI: 'Kim jestem?',
                    skills: 'Moje umiejętności'
                },
                introText: await getTextFromFile('text-files/PL/intro.txt')
            }
        }
    }
})

export default i18n;