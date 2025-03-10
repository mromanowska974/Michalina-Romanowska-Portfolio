import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
                    text: 'Are you interested in inviting me to your team? Please let me know. I look forward to hearing from you.',
                    form: {
                        fullName: 'Full Name or Company Name',
                        yourMessage: 'Your Message',
                        submit: 'Submit'
                    },
                    linkedIn: 'You can also visit my LinkedIn profile.'
                },
                lang: {
                    en: 'English',
                    pl: 'Polish'
                },
                aboutMe: {
                    title: 'Something about me',
                    whoAmI: 'Who am I?',
                    skills: 'My skills'
                },
                introText: 'Junior Web Developer with passion, curiosity and readiness to gain new experience.'
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
                    text: 'Chcesz zaprosić mnie do swojego zespołu? Daj mi znać. Czekam na Twoją wiadomość.',
                    form: {
                        fullName: 'Imię i Nazwisko lub Nazwa Firmy',
                        yourMessage: 'Twoja Wiadomość',
                        submit: 'Wyślij'
                    },
                    linkedIn: 'Możesz również odwiedzić mój profil na LinkedIn.'
                },
                lang: {
                    en: 'Angielski',
                    pl: 'Polski'
                },
                aboutMe: {
                    title: 'Kilka słów o mnie',
                    whoAmI: 'Kim jestem?',
                    skills: 'Moje umiejętności'
                },
                introText: 'Początkująca programistka stron internetowych z pasją, ciekawością i gotowością do zdobywania nowych doświadczeń.'
            }
        }
    }
})

export default i18n;