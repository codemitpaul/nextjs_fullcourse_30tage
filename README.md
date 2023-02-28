# Was ist SSR?

SSR ist ein Prozess, bei dem der HTML-Code einer Webseite auf dem Server generiert wird, bevor er an den Browser des Benutzers gesendet wird.
In Next.js kann SSR durch die Verwendung von getServerSideProps in einer Seite implementiert werden.
getServerSideProps ermöglicht es, Daten von einem Server abzurufen und sie in die Seite einzubetten, bevor sie an den Browser gesendet wird.
SSR kann die Geschwindigkeit einer Webseite verbessern, da der Benutzer eine vollständig gerenderte Seite erhält, anstatt auf den Ladevorgang von dynamischen Inhalten zu warten.
Es kann auch helfen, das SEO einer Webseite zu verbessern, da Suchmaschinen auf den vollständig gerenderten HTML-Code zugreifen können.
Allerdings kann SSR auch die Serverbelastung erhöhen, da jede Anfrage an den Server führen kann, dass die Seite neu generiert wird.
SSR kann auch dazu führen, dass die Client-seitige Interaktivität eingeschränkt wird, da die Seite erst vollständig geladen werden muss, bevor sie vom Benutzer interagiert werden kann.

# useState

useState ist ein Hook in React, der es ermöglicht, Zustände innerhalb von Funktionskomponenten zu speichern und zu aktualisieren.
Der erste Wert, den useState zurückgibt, ist der aktuelle Zustand (state), der zweite ist eine Funktion, die diesen Zustand aktualisiert.
Die Funktion, die den Zustand aktualisiert, löst eine erneute Ausführung der Komponente aus und sorgt dafür, dass der aktualisierte Zustand in der DOM aktualisiert wird.

# useEffect

useEffect ist ein weiteres Hook in React, das es ermöglicht, Nebeneffekte innerhalb von Funktionskomponenten auszuführen.
useEffect führt eine Funktion aus, die definiert, was passieren soll, wenn die Komponente gerendert wird oder sich der Zustand ändert.
Die Funktion, die useEffect definiert, kann auch eine Aufräumfunktion zurückgeben, die ausgeführt wird, wenn die Komponente aufgeräumt wird.

# API

API steht für "Application Programming Interface".
Eine API ist eine Schnittstelle, über die verschiedene Anwendungen oder Systeme miteinander kommunizieren und Daten austauschen können.
Eine API kann als ein digitaler Vermittler zwischen verschiedenen Anwendungen oder Systemen betrachtet werden.
Eine API kann verwendet werden, um auf Datenbanken, Webservices oder andere Systeme zuzugreifen und diese zu manipulieren.
Eine API definiert die Regeln und Protokolle für die Kommunikation zwischen verschiedenen Anwendungen oder Systemen.
Eine API kann von Entwicklern genutzt werden, um eigene Anwendungen oder Funktionen zu erstellen, indem sie auf die von der API bereitgestellten Funktionen und Daten zugreifen.

# async await

async und await sind Schlüsselwörter in JavaScript, die bei der Arbeit mit asynchronem Code helfen.
Asynchroner Code ist Code, der nicht sofort ausgeführt wird und Zeit benötigt, um ein Ergebnis zu liefern.
Eine Funktion, die mit dem Schlüsselwort async gekennzeichnet ist, gibt immer ein Promise-Objekt zurück.
Das Schlüsselwort await wird innerhalb einer mit async gekennzeichneten Funktion verwendet, um die Ausführung des Codes zu blockieren, bis eine asynchrone Operation abgeschlossen ist und ein Ergebnis zurückgibt.
Wenn await verwendet wird, muss die umgebende Funktion auch mit async gekennzeichnet sein.
Durch die Verwendung von async und await können wir asynchronen Code lesbarer und einfacher zu verstehen machen, da der Code wie synchroner Code aussieht und in einer logischen Reihenfolge ausgeführt wird.

# async/await or then

async/await und then() sind beides Möglichkeiten, asynchrone Funktionen in JavaScript zu behandeln. Der Hauptunterschied besteht darin, dass async/await ein syntaktischer Zucker für die Verwendung von Promises mit then() darstellt.

## Vorteile von SSR (Server Side Rendering):

Besseres SEO: Suchmaschinen können den vollständigen HTML-Inhalt der Seite leichter durchsuchen und indexieren, da der Server den HTML-Inhalt generiert und an den Client sendet.
Schneller erster Seitenaufruf: Da der Server den HTML-Inhalt vor dem Senden an den Client generiert, kann der Browser sofort den Inhalt rendern, anstatt auf JavaScript zu warten, das ausgeführt wird, um den Inhalt zu generieren.
Barrierefreiheit: Die Nutzung von SSR kann dazu beitragen, dass die Seite für Benutzer mit eingeschränkten Browserfunktionen, z.B. für Benutzer von Screenreadern, zugänglicher ist.
Sicherheit: Vertrauliche Daten können auf dem Server verarbeitet und vor dem Senden an den Client geschützt werden.

## Nachteile von SSR:

Größerer Serveraufwand: Das Generieren von HTML-Inhalten auf dem Server erfordert mehr Rechenleistung und Ressourcen als das Rendern von Inhalten auf dem Client.
Verzögerung bei der Navigation: Bei jedem Seitenwechsel muss der Server die HTML-Inhalte für die neue Seite generieren, was zu einer Verzögerung bei der Navigation führen kann.
Schwieriger zu implementieren: Die Implementierung von SSR kann für Entwickler, insbesondere für Anfänger, schwieriger sein als das Rendern von Inhalten auf dem Client.
