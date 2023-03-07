export const fallbackLng = "en"; // Definiere eine Konstante 'fallbackLng' mit dem Wert "en"
export const languages = [fallbackLng, "de"]; // Definiere eine Konstante 'languages' als Array mit den Sprachen 'fallbackLng' und "de"
export const defaultNS = "translation"; // Definiere eine Konstante 'defaultNS' mit dem Wert "translation"

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  // Exportiere eine Funktion namens 'getOptions', die 'lng' und 'ns' als Parameter erhält und standardmäßig 'fallbackLng' und 'defaultNS' verwendet
  return {
    // debug: true,
    supportedLngs: languages, // Gib die unterstützten Sprachen als Array zurück
    fallbackLng, // Gib die Sprache zurück, die als Fallback verwendet werden soll
    lng, // Gib die aktuelle Sprache zurück
    fallbackNS: defaultNS, // Gib den Standard-NS zurück, wenn kein NS angegeben ist
    defaultNS, // Gib den Standard-NS zurück
    ns, // Gib den angegebenen NS zurück
  };
}
