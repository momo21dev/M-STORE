import { Link } from "react-router";
import Header from "./Header";

export default function LogIn() {
    return (
        <>
            <Header showProducts={true} showSign={true} />
            <div className=" mt-28  flex items-center justify-center">

                <div className="flex flex-col items-center gap-4 p-8 rounded-xl bg-gray-300 shadow-2xl ">
                    <input type="text"
                        className="text-center px-4 py-2 rounded-md border-2 text-white bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2  w-72"
                        placeholder="E-mail"
                        required />
                    <input type="password"
                        className="text-center px-4 py-2 rounded-md border-2 text-white bg-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2  w-72"
                        placeholder="Password"
                        required />
                    <Link to={'/products'} className="bg-gray-900 p-2 rounded-xl hover:bg-yellow-500 text-white">LOGIN</Link>
                </div>
            </div>
        </>
    );




}
