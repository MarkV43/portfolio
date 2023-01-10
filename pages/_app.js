import Head from 'next/head'
import { useRouter } from 'next/router';
import '../styles/globals.css';

import en from "../lang/en.json";
import pt from "../lang/pt.json";
import fr from "../lang/fr.json";
import de from "../lang/de.json";
import es from "../lang/es.json";
import { IntlContext } from '../lib/intl-context';

const messages = { en, pt, fr, de, es };

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (<>
    <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"/>
    </Head>

    <IntlContext.Provider value={{ locale, def: "en" }} >
      <Component {...pageProps} />
    </IntlContext.Provider>
  </>);
}

export default MyApp
