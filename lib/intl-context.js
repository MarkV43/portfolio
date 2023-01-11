import { createContext, useContext } from "react";

import en from "../lang/en.json";
import pt from "../lang/pt.json";
import fr from "../lang/fr.json";
import de from "../lang/de.json";
import es from "../lang/es.json";

const languages = { en, pt, fr, de, es };

export const IntlContext = createContext({ locale: "en", default: "en" });

class IntlProvider {
    constructor(locale, def) {
        this.locale = locale === 'default' ? 'en' : locale;
        this.def = def;

        this.translations = languages[this.locale];

        if (this.def == this.locale) {
            this.defTranslations = null;
        } else {
            this.defTranslations = languages[this.def];
        }
    }

    get(id) {
        const val = this.translations[id];
        if (val !== null) {
            return val;
        } else {
            return this.defTranslations[id];
        }
    }
}

export function useIntl() {
    const {locale, def} = useContext(IntlContext);
    return new IntlProvider(locale, def);
}