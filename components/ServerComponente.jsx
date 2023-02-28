import React from "react";

const fetchData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

const ServerComponente = async () => {
  const products = await fetchData();
  console.log("Ich bin eine Server  Komponente");
  return (
    <div>
      <h1 className="text-5xl">Server Komponente</h1>
      {products?.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ServerComponente;
