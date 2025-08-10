import { Link } from "react-router";
import Header from "./Header";

export default function Cart({ cart, setCart }) {

  // حذف منتج من الكارت
  const removeFromCart = (indexToRemove) => {
    setCart(prevCart => prevCart.filter((_, index) => index !== indexToRemove));
  };

  // حساب إجمالي السعر
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <Header showProducts={true} />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="p-4 bg-white rounded-xl shadow flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>

            {/* إجمالي السعر */}
            <div className="mt-6 p-4 bg-yellow-100 text-black rounded-lg text-lg font-bold flex justify-between items-center">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            {/* زرار التأكيد */}
            <div className="flex justify-center mt-8">
              <Link to={'/confirmation'} className="bg-black text-white px-6 py-3 text-lg rounded-2xl hover:bg-gray-800 transition">
                Confirm
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
