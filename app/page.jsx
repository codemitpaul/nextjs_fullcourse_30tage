// Definiere eine asynchrone Funktion HomePage, die eine React-Komponente zurückgibt
const HomePage = async () => {
  // Führe eine asynchrone GET-Anfrage an die Random User API durch und speichere das Ergebnis in der Variablen res
  let res = await fetch("https://randomuser.me/api/", {
    // Konfiguriere den nächsten Revalidierungszeitraum für diese Seite auf 10 Sekunden
    next: { revalidate: 10 },
  });
  // Parse die Antwort als JSON und speichere das Ergebnis in der Variablen data
  let data = await res.json();
  // Extrahiere den Namen des ersten Nutzers aus der API-Antwort und speichere es in der Variablen user
  let user = data.results[0].name;
  // Gib ein einfaches HTML-Element zurück, das den Namen des Nutzers anzeigt
  return (
    <div>
      <h1>
        {user.first} {user.last}
      </h1>
    </div>
  );
};

// Exportiere die HomePage-Komponente als Standard-Export
export default HomePage;
