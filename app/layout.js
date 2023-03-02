import "./globals.css";

// Metadaten sind Daten, die Informationen über andere Daten enthalten,
// wie zum Beispiel Titel, Beschreibung und Schlüsselwörter einer Webseite.
export const metadata = {
  title: "Home",
  description: "Ipsum ea est Lorem excepteur sunt.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
