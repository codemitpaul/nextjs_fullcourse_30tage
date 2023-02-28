# Was ist SSG?

Static Generation ist ein Konzept des Server Renderings, bei dem der Inhalt einer Webseite zur Buildzeit generiert und als statische Dateien gespeichert wird.
Die statischen Dateien werden dann bei Anfragen an den Server ausgeliefert, wodurch die Webseite sehr schnell und effizient geladen werden kann.
Im Gegensatz dazu werden bei einer dynamischen Serverseitigen Rendermethode die Seiteninhalte bei jeder Anfrage an den Server neu generiert.
Static Generation ist besonders effektiv für Inhalte, die selten oder gar nicht geändert werden, wie z.B. Produktseiten in einem Online-Shop.
Um Static Generation zu implementieren, können Frameworks wie Next.js genutzt werden, die spezielle Funktionen wie getStaticProps zur Verfügung stellen.

# Verwendung von getStaticProps

Funktion in Next.js, um SSG zu implementieren
Lädt Daten zur Build-Zeit und gibt sie als Props zurück
Daten können von externen APIs oder Datenbanken stammen

# Vor- und Nachteile von SSG

## Vorteile:

Schnellere Seitenaufrufe und bessere Performance
Weniger Serverlast, da Seiten zur Build-Zeit generiert werden
Bessere SEO, da der Inhalt bereits zur Build-Zeit vorhanden ist

## Nachteile:

Daten können veraltet sein, wenn sie selten aktualisiert werden
Keine Möglichkeit für dynamische Inhalte zur Laufzeit
Build-Zeit kann länger dauern, wenn viele Seiten generiert werden müssen

# yarn build

yarn build ist ein Befehl, der von Next.js bereitgestellt wird, um eine Produktionsversion der Anwendung zu erstellen. Es erstellt eine optimierte Version der Anwendung, die für die Verwendung auf einem Live-Server bereit ist. Der Befehl führt verschiedene Aktionen durch, wie z.B. die Zusammenstellung von JavaScript-Dateien, die Generierung von statischen Dateien und die Optimierung von Bildern.

#### Hier sind einige der Schritte, die beim Ausführen des yarn build-Befehls in Next.js durchgeführt werden:

Erstellung einer optimierten Version der Anwendung
Zusammenstellung aller JavaScript-Dateien in einer Datei
Minimierung des Codes zur Optimierung der Ladezeiten
Generierung von statischen HTML-Dateien für jede Seite
Generierung von optimierten Bildern
Zusammenstellung von CSS-Dateien und deren Optimierung
Überprüfung auf Fehler und Warnungen
Insgesamt optimiert der yarn build-Befehl die Anwendung für den produktiven Einsatz und sorgt dafür, dass sie schneller und effizienter läuft.

# .next Ordner

cache: In diesem Ordner speichert Next.js seine Zwischenspeicher (cache) für die statischen Seitengenerierung (SSG) und Serverseitige Rendering (SSR). Dadurch werden die Seiten schneller generiert, da bestimmte Teile nicht immer wieder neu berechnet werden müssen.

server: Hier befinden sich die kompilierten Server-Seitenkomponenten, die vom Node.js-Server zur Laufzeit ausgeführt werden. Wenn der Next.js-Server gestartet wird, werden diese Dateien kompiliert.

static: In diesem Ordner werden statische Dateien wie Bilder, Schriftarten, Icons usw. gespeichert. Diese Dateien werden direkt an den Browser gesendet und sind somit sofort verfügbar, ohne dass eine Serveranfrage notwendig ist.

# Static Regeneration

Static Regeneration ist eine Funktion von Next.js, die es ermöglicht, statisch generierte Seiten dynamisch zu aktualisieren, ohne dass der Server neu gestartet werden muss.
Diese Funktion ermöglicht es Entwicklern, statisch generierte Seiten auf der Grundlage von Zeitplänen, Ereignissen oder anderen externen Faktoren dynamisch zu aktualisieren.
Mit Static Regeneration kann die Aktualisierung von statisch generierten Seiten gesteuert und optimiert werden, um die Benutzererfahrung zu verbessern und sicherzustellen, dass die Inhalte stets aktuell sind.
