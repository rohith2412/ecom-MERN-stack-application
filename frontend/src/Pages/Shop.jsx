import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2000/api/v1/user/shop"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <div className="p-4"
              key={product._id}
            >
              {product.picture && (
                <img
                  className="w-full h-64 object-cover mb-4 rounded-md"
                  src={`data:image/jpeg;base64,${product.picture}`}
                  alt={product.product.name}
                />
              )}
              <h2 className="text-xl  font-semibold text-center mb-2">
                {product.product.name}
              </h2>
              <p className="text-lg text-center text-gray-700 mb-4">
                ${product.product.price}
              </p>
              <button className="w-full py-2 bg-black text-white rounded-md hover:bg-black transition duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
