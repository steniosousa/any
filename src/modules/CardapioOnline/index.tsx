import { useState } from "react";
import Additional from "./components/additional";
import Card from "./components/card";
import { IoMdCart } from "react-icons/io";
import Checkout from "./components/Checkout";

export default function CardapioOnline() {
    const [openAdditional, setOpenAdditional] = useState(false)
    const [openCheckout, setOpenCheckout] = useState(false)

    function closeAdditional() {
        setOpenAdditional(!openAdditional)
    }
    function handleCheckout() {
        setOpenCheckout(!openCheckout)
    }


    return (
        <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
            <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-600" onClick={handleCheckout}>
                <IoMdCart size={24} />
            </div>

            {openAdditional ? (
                <Additional closeAdditional={closeAdditional} />
            ) : null}

            {openCheckout?(
                <Checkout handle={handleCheckout}/>
            ):null}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div onClick={closeAdditional}>
                    <Card />
                </div>
            </div>
        </div>
    )
}