"use client";
// Importiere die benötigten React Hooks
import { useEffect, useState } from "react";

// Definiere die Komponente
const ClientKomponente = () => {
  // Konsolenausgabe
  console.log("Ich bin eine Client Komponente");

  // Zustandshooks
  const [products, setProducts] = useState([]); // Zustand für Produkte
  const [loading, setLoading] = useState(true); // Zustand für Ladezustand

  // Nebeneffekthook: Datenabruf beim Rendern
  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // Datenabruf
      .then((res) => res.json()) // Antwort in JSON konvertieren
      .then((json) => {
        setProducts(json); // Zustand aktualisieren
        setLoading(false); // Ladezustand aktualisieren
      });
  }, []); // Leerer Array als Abhängigkeit: Effekt nur beim Mounting ausführen

  // Konsolenausgabe
  console.log(products);

  // Rendern einer Ladeanzeige während der Datenabruf läuft
  if (loading) {
    return <p>Laden ...</p>;
  }

  // Rendern der Produktdaten, falls vorhanden
  return (
    <div>
      <h1 className="text-5xl">Client Komponente</h1>

      {products?.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

// Exportiere die Komponente
export default ClientKomponente;
