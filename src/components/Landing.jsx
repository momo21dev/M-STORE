import { Link } from "react-router";

export default function Landing() {
    return (
        <>

            <div className="bg-gray-800 text-white p-6 md:p-12 rounded-b-3xl">

                <div className="flex items-center justify-between mb-6">
                    <Link to={'/'} className="flex items-center gap-1">
                        <img src="bag_13250085.png" alt="Logo" className="w-12 h-12 mb-2" />
                        <h1 className="font-bold text-3xl font-serif">-Store</h1>
                    </Link>
                    <div className="flex gap-4">
                        <Link to={'/products'} className="bg-white text-black px-4 py-2  rounded-2xl hover:bg-yellow-400 hover:text-white ">
                            Products
                        </Link>
                        <Link to={'/signUp'} className="bg-white text-black px-4 py-2  rounded-2xl hover:bg-yellow-400 hover:text-white">
                            Sign Up
                        </Link>
                        <Link to={'/logIn'} className="bg-white text-black px-4 py-2  rounded-2xl hover:bg-yellow-400 hover:text-white">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row justify-center items-center mt-16 gap-12 px-4">

                <div className="flex flex-col items-start max-w-md">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
                        <span className="block">Discover the Difference.</span>
                        <span className="block">Shop Smart with</span>
                        <span className="block text-yellow-500">M-Store</span>
                    </h2>
                </div>
                <div>
                    <img
                        src="5469621.jpg"
                        alt="Landing visual"
                        className="w-[400px] md:w-[600px] rounded-xl"
                    />
                </div>
            </div>
        </>
    );
}
