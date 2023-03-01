import axios from "axios";
// Importieren der axios Library für HTTP-Requests
import Link from "next/link";
// Importieren der Link Komponente von Next.js für clientseitige Navigation
import React from "react";
// Importieren der React Bibliothek
import { getProducts } from "../../../utils/getProducts";
// Importieren der getProducts Funktion aus einer anderen Datei

export const revalidate = 60;
// Definieren einer Konstante für den revalidate Wert, der für die Inkrementelle Statik Generierung von Next.js verwendet wird

// Die folgende Funktion definiert die möglichen statischen Routen für diese Seite.
export async function generateStaticParams() {
  const products = await getProducts();
  // Die getProducts Funktion wird aufgerufen, um alle Produkte zu holen
  const routes = products.map((product) => product.id.toString());
  // Die IDs der Produkte werden als String in ein Array gemappt
  return routes.map((id) => ({
    id,
  }));
  // Ein Array von Objekten wird zurückgegeben, wobei jedes Objekt eine ID enthält
}

// Eine Komponente für die Detailseite eines Produkts wird definiert
const ProductDetailPage = async ({ params }) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${params.id}`
  ); // Die Produktinformationen werden von einer API abgerufen, basierend auf der übergebenen Produkt-ID

  // Die Details des Produkts werden gerendert, zusammen mit einem Link zur Startseite
  return (
    <div>
      <Link href="/">Zurück</Link>
      <h1 className="text-3xl">{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

// Exportieren der Komponente als Standard-Export
export default ProductDetailPage;
