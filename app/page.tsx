import axios from "axios";
import React from "react";

const Homepage = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return (
    <div className="p-5">
      {data.map((product: any) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default Homepage;
