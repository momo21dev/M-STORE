import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Header from "./Header";

export default function ProductInfo() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            setProduct(data);
        }
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <>
            <Header showCart={true} showLogin={true} showSign={true} showProducts={true}  />
            <div className="bg-gray-100 min-h-screen p-6">
               
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-4">
                    <img src={product.thumbnail} alt={product.title} className="w-80 h-full object-cover rounded-lg" />
                    <h1 className="text-2xl text-black font-bold mt-4">{product.title}</h1>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <h2 className="text-xl font-bold text-green-600 mt-4">{product.price}$</h2>
                    <div className="flex gap-4 mt-4">
                        {product.images.map((img, idx) => (
                            <img key={idx} src={img} alt="" className="w-24 h-24 object-cover rounded-lg" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
