import { Link } from "react-router";

export default function Landing() {
    return (
        <>
            {/* الهيدر */}
            <div className="bg-gray-800 text-white p-6 md:p-12 rounded-b-3xl">
                <div className="flex flex-wrap items-center justify-between gap-4 md:gap-0">
                    
                    {/* اللوجو */}
                    <Link to={'/'} className="flex items-center gap-1 w-full md:w-auto justify-center md:justify-start">
                        <img src="bag_13250085.png" alt="Logo" className="w-12 h-12" />
                        <h1 className="font-bold text-3xl font-serif">-Store</h1>
                    </Link>

                    {/* الأزرار */}
                    <div className="flex flex-wrap gap-3 w-full md:w-auto justify-center md:justify-end">
                        <Link to={'/products'} className="bg-white text-black px-4 py-2 rounded-2xl hover:bg-yellow-400 hover:text-white transition">
                            Products
                        </Link>
                        <Link to={'/signUp'} className="bg-white text-black px-4 py-2 rounded-2xl hover:bg-yellow-400 hover:text-white transition">
                            Sign Up
                        </Link>
                        <Link to={'/logIn'} className="bg-white text-black px-4 py-2 rounded-2xl hover:bg-yellow-400 hover:text-white transition">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>

            {/* المحتوى الرئيسي */}
            <div className="flex flex-col md:flex-row justify-center items-center mt-12 md:mt-16 gap-8 md:gap-12 px-4">
                
                {/* النص */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
                        <span className="block">Discover the Difference.</span>
                        <span className="block">Shop Smart with</span>
                        <span className="block text-yellow-500">M-Store</span>
                    </h2>
                </div>

                {/* الصورة */}
                <div className="flex justify-center">
                    <img
                        src="5469621.jpg"
                        alt="Landing visual"
                        className="w-[300px] sm:w-[400px] md:w-[600px] rounded-xl"
                    />
                    
                </div>
            </div>
        </>
    );
}
