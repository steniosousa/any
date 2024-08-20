import { useState } from "react";
import Additional from "./components/additional";
import Card from "./components/card";
import { IoMdCart } from "react-icons/io";
import Checkout from "./components/Checkout";

export default function CardapioOnline() {
    const [openAdditional, setOpenAdditional] = useState(false)
    const [openCheckout, setOpenCheckout] = useState(false)
    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };
    function closeAdditional() {
        setOpenAdditional(!openAdditional)
    }
    function handleCheckout() {
        setOpenCheckout(!openCheckout)
    }


    return (
        <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
            <div className="z-40 fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-600" onClick={handleCheckout}>
                <IoMdCart size={24} />
            </div>

            {openAdditional ? (
                <Additional closeAdditional={closeAdditional} />
            ) : null}

            {openCheckout ? (
                <Checkout handle={handleCheckout} />
            ) : null}

            <div className="relative font-[sans-serif] w-max mx-auto">
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="px-5 py-2.5 border border-gray-300 text-gray-800 text-sm outline-none bg-white hover:bg-gray-50"
                >
                    Filtrar por
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-3 fill-gray-500 inline ml-3 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {isOpen && (
                    <ul className="absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto">
                        <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">Coxinhas</li>
                        <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">Hambuerguer</li>
                        <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">Pizzas</li>
                        <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">Refrigerantes</li>
                        <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">Salgados</li>
                        <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">Sucos</li>
                    </ul>
                )}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div onClick={closeAdditional}>
                    <Card />
                </div>
                <div onClick={closeAdditional}>
                    <Card />
                </div>
                <div onClick={closeAdditional}>
                    <Card />
                </div>
                <div onClick={closeAdditional}>
                    <Card />
                </div>
                <div onClick={closeAdditional}>
                    <Card />
                </div>
            </div>
        </div>
    )
}