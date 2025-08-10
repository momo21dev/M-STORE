import { useState } from "react"
import Header from "./Header"
import { Link } from "react-router";

export default function SignIn() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        isAdult: false
    })
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUserInfo(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };
    return (
        <>
            <Header showLogin={true} showProducts={true} />
            <div className=" mt-8  flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 p-8 rounded-xl bg-gray-300 shadow-2xl ">
                    <input type="text"
                        className="text-center px-4 py-2 rounded-md border-2 text-white bg-gray-900 placeholder-white focus:outline-none focus:ring-2  w-72"
                        placeholder="Full Name"
                        name="name"
                        onChange={handleChange}
                        value={userInfo.name}
                        required />
                    <input type="text"
                        className="text-center px-4 py-2 rounded-md border-2 text-white bg-gray-900 placeholder-white focus:outline-none focus:ring-2  w-72"
                        placeholder="E-mail"
                        name="email"
                        onChange={handleChange}
                        value={userInfo.email}
                        required />
                    <input type="text"
                        className="text-center px-4 py-2 rounded-md border-2 text-white bg-gray-900 placeholder-white focus:outline-none focus:ring-2  w-72"
                        placeholder="Phone Number"
                        name="phone"
                        onChange={handleChange}
                        value={userInfo.phone}
                        required />
                    <input type="password"
                        className="text-center px-4 py-2 rounded-md border-2 text-white bg-gray-900 placeholder-white focus:outline-none focus:ring-2  w-72"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={userInfo.password}
                        required />
                    <label className="flex items-center text-gray-900 text-m gap-2 shadow-2xl">
                        <input type="checkbox" className="accent-yellow-500"
                            name="isAdult"
                            onChange={handleChange}
                            value={userInfo.isAdult} />
                        I confirm I’m above 18
                    </label>
                    <Link to={'/products'}
                        onClick={() => console.log(userInfo)} // ممكن تبعتها لأي API هنا
                        className="bg-gray-900 p-2 rounded-xl hover:bg-yellow-500 text-white">Sign up</Link>
                </div>
            </div>
        </>
    )
}