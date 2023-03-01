"use client";
import axios from "axios";
import { useEffect, useState } from "react";
// import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
// Insgesamt ist die Verwendung von useSWR eine einfache Möglichkeit,
// Daten von einer API abzurufen und in Ihrer Next.js-Anwendung zu verwenden,
// wodurch unnötige Netzwerkanfragen reduziert und die Leistung verbessert werden können.
const Products = () => {
  // --------------------------------useSWR--------------------------------
  //   const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);
  //   if (error) return <div>Failed to load products</div>;
  //   if (!data) return <div>Loading...</div>;

  // --------------------------------serverside--------------------------------
  //   const { data } = await axios.get("https://fakestoreapi.com/products");

  // --------------------------------clientSide--------------------------------
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setData(data);
    };
    getData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <h1 className="text-7xl col-span-full">Produkte</h1>
      {data.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <img
            src={product.image}
            alt={product.title}
            className="w-full object-cover h-52 rounded-lg"
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-500 mb-2">${product.price}</p>
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
