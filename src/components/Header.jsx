import { Link } from "react-router";

export default function Header({ showLogin = false, showSign = false, showProducts = false, showCart = false }) {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-b-2xl">
            <div className="flex items-center justify-between">


                <Link to={'/'} className="flex items-center gap-1">
                    <img src="bag_13250085.png" alt="Logo" className="w-8 h-8" />
                    <h1 className="font-bold text-xl font-serif">-Store</h1>
                </Link>


                <div className="text-center">
                    <h2 className="text-sm md:text-lg font-bold leading-snug">
                        <span>Discover the Difference,</span>
                        <span className="mx-1">Shop Smart with</span>
                        <span className="text-yellow-500">M-Store</span>
                    </h2>
                </div>


                <div className="flex gap-2">
                    {showProducts && (
                        <Link to={'/products'} className="bg-white text-black px-3 py-1.5 text-sm rounded-xl hover:bg-yellow-400 hover:text-white">
                            Products
                        </Link>
                    )}
                    {showLogin && (
                        <Link to={'/logIn'} className="bg-white text-black px-3 py-1.5 text-sm rounded-xl hover:bg-yellow-400 hover:text-white">
                            Log In
                        </Link>
                    )}
                    {showSign && (
                        <Link to={'/signUp'} className="bg-white text-black px-3 py-1.5 text-sm rounded-xl hover:bg-yellow-400 hover:text-white">
                            Sign up
                        </Link>
                    )}
                    {showCart && (<Link to={'/cart'}><img src="cart_18450430.png" width={'30px'} /></Link>)}

                </div>
            </div>
        </div>
    );
}
