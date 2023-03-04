import axios from "axios";
import Link from "next/link";

export const revalidate = 100;

const HomePage = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return (
    <div className="flex flex-col space-y-3">
      {data.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          {product.title}
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
