import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    fallbackLng:'uz',
    lng:'uz',
    resources:{
        uz:{
            translations: require('./locals/uz/translations.json')
        },
        en:{
            translations: require('./locals/en/translations.json')
        },
        kr:{
            translations: require('./locals/kr/translations.json')
        },
        ru:{
            translations: require('./locals/ru/translations.json')
        }
    },
    ns:['translations'],
    defaultNS:"translations"

});

i18next.languages = ['uz', 'ru', 'en', 'kr'];

export default i18next;