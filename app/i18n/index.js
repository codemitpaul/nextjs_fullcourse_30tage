import { createInstance } from "i18next"; // Importiere die Funktion 'createInstance' aus dem Paket 'i18next'
import resourcesToBackend from "i18next-resources-to-backend"; // Importiere die Funktion 'resourcesToBackend' aus dem Paket 'i18next-resources-to-backend'
import { initReactI18next } from "react-i18next/initReactI18next"; // Importiere die Funktion 'initReactI18next' aus dem Paket 'react-i18next'
import { getOptions } from "./settings"; // Importiere die Funktion 'getOptions' aus der Datei './settings'

const initI18next = async (lng, ns) => {
  // Definiere eine asynchrone Funktion namens 'initI18next', die 'lng' und 'ns' als Parameter erhält
  const i18nInstance = createInstance(); // Erstelle eine i18n-Instanz mit 'createInstance' und speichere sie in der Variable 'i18nInstance'
  await i18nInstance
    .use(initReactI18next) // Verwende 'initReactI18next' als Middleware in der i18n-Instanz
    .use(
      resourcesToBackend((language, namespace) =>
        import(`./locales/${language}/${namespace}.json`)
      ) // Verwende 'resourcesToBackend' als Middleware in der i18n-Instanz und lade die Ressourcen aus einer JSON-Datei
    )
    .init(getOptions(lng, ns)); // Initialisiere die i18n-Instanz mit den angegebenen Optionen
  return i18nInstance; // Gib die i18n-Instanz zurück
};

export async function useTranslation(lng, ns, options = {}) {
  // Exportiere eine asynchrone Funktion namens 'useTranslation', die 'lng', 'ns' und 'options' als Parameter erhält
  const i18nextInstance = await initI18next(lng, ns); // Initialisiere eine i18n-Instanz mit 'initI18next' und speichere sie in der Variable 'i18nextInstance'
  return {
    t: i18nextInstance.getFixedT(
      // Gib eine Funktion 't' zurück, die von der i18n-Instanz mit 'getFixedT' erstellt wurde
      lng,
      Array.isArray(ns) ? ns[0] : ns, // Gib den ersten Namespace zurück, wenn mehrere angegeben sind
      options.keyPrefix // Füge optional einen Key-Prefix hinzu
    ),
    i18n: i18nextInstance, // Gib die i18n-Instanz zurück
  };
}
