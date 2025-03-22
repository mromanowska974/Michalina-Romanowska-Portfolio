module.exports = {

"[project]/messages/en.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>toJSON)
});
const translations = {
    "navbar": {
        "mainPage": "Main Page",
        "aboutMe": "About Me",
        "projects": "Projects",
        "contact": "Contact",
        "language": "Language"
    },
    "contact": {
        "title": "Contact Me",
        "text": "await getTextFromFile('text-files/EN/contact.txt')",
        "form": {
            "fullName": "Full Name or Company Name",
            "yourMessage": "Your Message",
            "submit": "Submit"
        }
    },
    "aboutMe": {
        "title": "Something about me",
        "whoAmI": {
            "title": "Who am I?",
            "description": "await getTextFromFile('text-files/EN/whoAmI.txt')"
        },
        "whyIChose": {
            "title": "Why did I choose programming?",
            "description": "await getTextFromFile('text-files/EN/whyIChose.txt')"
        },
        "whatAmIDoingNow": {
            "title": "What am I working on currently?",
            "description": "await getTextFromFile('text-files/EN/whatAmIDoingNow.txt')"
        },
        "skills": {
            "title": "My skills",
            "technical": {
                "title": "Technical",
                "list": "[...skills.universal.technical, ...skills.en.technical]"
            },
            "soft": {
                "title": "Soft",
                "list": "skills.en.soft"
            }
        }
    },
    "home": {
        "introText": "await getTextFromFile('text-files/EN/intro.txt')"
    }
};
function toJSON() {
    return JSON.stringify(translations);
}
}}),

};

//# sourceMappingURL=messages_en_52b951a8.js.map