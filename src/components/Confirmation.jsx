import Header from "./Header";
import { useState } from "react";

export default function Confirmation({ cart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirm = () => {
    alert("✅ Payment successful! Thank you for your purchase.");
  };

  return (
    <>
      <Header showProducts={true} />
      <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-green-600 mb-4 text-center">
          Order Confirmation
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Thank you for shopping with us! Please review your order and complete
          the payment.
        </p>

        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-3xl mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Order Summary
          </h2>
          <ul className="divide-y divide-gray-200">
            {cart.map((item, index) => (
              <li key={index} className="py-3 flex justify-between text-black">
                <span>{item.title}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-lg font-bold flex justify-between text-gray-900">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-3xl">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Payment Details
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={paymentDetails.name}
              onChange={handleChange}
              className="w-full border p-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={paymentDetails.expiry}
                onChange={handleChange}
                className="w-1/2 border p-3 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={paymentDetails.cvv}
                onChange={handleChange}
                className="w-1/2 border p-3 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <button
            onClick={handleConfirm}
            className="mt-6 w-full bg-green-500 text-white p-3 rounded-lg font-bold hover:bg-green-600 transition"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </>
  );
}
