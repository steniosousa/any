import { useContext, useState } from "react";
import AuthContext from "../context/Auth";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export default function Auth() {
  const { Login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password)
    Login(e, email, password);
  };

  return (
    <div className="min-h-screen bg-blue-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img src="https://scontent-for1-1.xx.fbcdn.net/v/t39.30808-6/326361771_736546317894422_4684804476295082240_n.png?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=_-ioHhpIj40Q7kNvgGnNszB&_nc_ht=scontent-for1-1.xx&oh=00_AYC7GuR3tNXXJ_6ZGocUl9oY3L3YLlXJ84ubmwkD3An5qg&oe=66C9BDE1"
              className="w-mx-auto" />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4" />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853" />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04" />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335" />
                    </svg>
                  </div>
                  <span className="ml-4">
                    Logar com Gmail
                  </span>
                </button>

              </div>

              <div className="my-12 border-b text-center">
                <div
                  className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Ou faça login com e-mail cadastrado
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <div className="flex items-center border border-gray-200 rounded-lg bg-gray-100">
                  <div className="p-4">
                    <FaUser className="text-gray-500" />
                  </div>
                  <input
                    onChange={(e: any) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border-none placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex items-center border border-gray-200 rounded-lg bg-gray-100 mt-3">
                  <div className="p-4">
                    <RiLockPasswordFill className="text-gray-500" />
                  </div>
                  <input
                    onChange={(e: any) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border-none placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password" placeholder="Password" />
                </div>
                <button
                  onClick={(e: any) => handleLogin(e)}
                  className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

                  <span className="ml-">
                    Logar
                  </span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Concordo em cumprir os
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Termos de serviços
                  </a>
                  e a
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Política de privacidade
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
        </div>
      </div>
    </div>
  );
}
