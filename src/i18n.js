import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { skills } from './skills-data';

async function getTextFromFile(path) {
    const res = await fetch(`${path}`);

    if(!res.ok) {
        throw res;
    }

    return res.text();
}

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'pl',
    returnObjects: true,
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
                    whoAmI: {
                        title: 'Who am I?',
                        description: await getTextFromFile('text-files/EN/whoAmI.txt')
                    },
                    whyIChose: {
                        title: 'Why did I choose programming?',
                        description: await getTextFromFile('text-files/EN/whyIChose.txt'),
                    },
                    whatAmIDoingNow: {
                        title: 'What am I working on currently?',
                        description: await getTextFromFile('text-files/EN/whatAmIDoingNow.txt'),
                    },
                    skills: {
                        title: 'My skills',
                        technical: {
                            title: 'Technical',
                            list: [...skills.universal.technical, ...skills.en.technical]
                        },
                        soft: {
                            title: 'Soft',
                            list: skills.en.soft
                        }
                    }
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
                    whoAmI: {
                        title: 'Kim jestem?',
                        description: await getTextFromFile('text-files/PL/whoAmI.txt'),
                    },
                    whyIChose: {
                        title: 'Dlaczego programuję?',
                        description: await getTextFromFile('text-files/PL/whyIChose.txt'),
                    },
                    whatAmIDoingNow: {
                        title: 'Czym się zajmuję obecnie?',
                        description: await getTextFromFile('text-files/PL/whatAmIDoingNow.txt'),
                    },
                    skills: {
                        title: 'Moje umiejętności',
                        technical: {
                            title: 'Techniczne',
                            list: [...skills.universal.technical, ...skills.pl.technical]
                        },
                        soft: {
                            title: 'Miękkie',
                            list: skills.pl.soft
                        }
                    }
                },
                introText: await getTextFromFile('text-files/PL/intro.txt')
            }
        }
    }
})

export default i18n;