import { useEffect, useState } from "react";
import { Link } from "react-router";
import Header from "./Header";

export default function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [alertMsg, setAlertMsg] = useState("");

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setAlertMsg(`${product.title} added to cart`);

    // تخفي الرسالة بعد ثانيتين
    setTimeout(() => setAlertMsg(""), 5000);
  };

  const handleNext = () => {
    if (page <= 190) {
      setPage((prev) => prev + 12);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage((prev) => prev - 12);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const api = search
        ? `https://dummyjson.com/products/search?q=${search}`
        : `https://dummyjson.com/products?limit=12&skip=${page}`;

      const res = await fetch(api);
      const data = await res.json();
      setProducts(data.products);
    }

    fetchData();
  }, [page, search]);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Header showLogin={true} showSign={true} showCart={true} />

        {/* مربع البحث */}
        <div className="bg-gray-100 py-6 px-4 flex justify-center">
          <input
            type="text"
            placeholder="Search by name, category or brand"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* الرسالة المؤقتة */}
        {alertMsg && (
          <div className="flex justify-center px-4">
            <div
              role="alert"
              className="alert alert-success shadow-lg w-full md:w-1/2 mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{alertMsg}</span>
            </div>
          </div>
        )}

        {/* عرض المنتجات */}
        <div className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-100">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-bold mb-2 text-gray-800 text-center">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 flex-1 text-center">
                  {product.description.slice(0, 80)}...
                </p>
                <h3 className="text-gray-900 text-center font-bold mt-2">
                  {product.price}$
                </h3>
                <div className="flex justify-center gap-2">
                  <Link to={`/product/${product.id}`} className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500">
                    Show Info
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* أزرار التنقل */}
        <div className="flex justify-center gap-6 bg-gray-100 mb-12">
          <button
            className="bg-yellow-400 rounded-2xl p-2 cursor-pointer font-semibold"
            onClick={handlePrev}
            disabled={page === 0}
          >
            Previous
          </button>
          <button
            className="bg-yellow-400 rounded-2xl p-2 cursor-pointer font-semibold"
            onClick={handleNext}
            disabled={page > 190}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
