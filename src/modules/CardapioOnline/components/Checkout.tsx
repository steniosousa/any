import { useState } from "react";

export default function Checkout({ handle }: { handle: () => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const [collect, setCollect] = useState<string | null>(null)


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div
            className="bg-white fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif] " >
            <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full bg-white">
                <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
                    <div className="relative h-full">
                        <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                            <div className="space-y-4">

                                <div className="flex items-start gap-4">
                                    <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                                        <img src='https://readymadeui.com/images/coffee1.webp' className="w-full object-contain" />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-base text-white">Split Sneakers</h3>
                                        <ul className="text-xs text-gray-300 space-y-2 mt-2">
                                            <li className="flex flex-wrap gap-4">Preço <span className="ml-auto">37</span></li>
                                            <li className="flex flex-wrap gap-4">Quantity <span className="ml-auto">2</span></li>
                                            <li className="flex flex-wrap gap-4">Total Price <span className="ml-auto">$40</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
                            <h4 className="flex flex-wrap gap-4 text-base text-white">Total <span className="ml-auto">$40.00</span></h4>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0 bg-white">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-black">Informação adicional</h2>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="cheddar1"
                                name="cheese"
                                className="w-5 h-5"
                                onChange={() => setCollect('Delivery')}
                            />
                            <label htmlFor="cheddar1" className="text-sm text-black ml-4">
                                Delivery
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="cheddar2"
                                name="cheese"
                                className="w-5 h-5"
                                onChange={() => setCollect('Balcão')}
                            />
                            <label htmlFor="cheddar2" className="text-sm text-black ml-4">
                                Retirar no balcão
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="cheddar3"
                                name="cheese"
                                className="w-5 h-5"
                                onChange={() => setCollect('Mesa')}
                            />
                            <label htmlFor="cheddar3" className="text-sm text-black ml-4">
                                Entregar na mesa
                            </label>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0 bg-white">
                    <h2 className="text-2xl font-bold text-black">Complete seu pedido</h2>
                    <form className="mt-8">
                        <div>
                            <h3 className="text-base text-gray-800 mb-4">Informações pessoais</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input type="text" placeholder="Nome"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>

                                <div>
                                    <input type="number" placeholder="Whatsapp"
                                        className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                            </div>
                        </div>
                        {collect == "Delivery" ? (
                            <div className="mt-8">
                                <h3 className="text-base text-gray-800 mb-4">Informações de endereço</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input type="text" placeholder="Rua/Avenida"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                    </div>


                                    <div>
                                        <input type="number" placeholder="Número da casa"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-base text-gray-800 mb-4">Informações de pagamento</h3>
                                    <div className="space-y-6">

                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="Dinheiro"
                                                name="pagamento"
                                                className="w-5 h-5"
                                            />
                                            <label htmlFor="Dinheiro" className="text-sm text-black ml-4">
                                                Dinheiro
                                            </label>
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="Cŕedito"
                                                name="pagamento"
                                                className="w-5 h-5"
                                            />
                                            <label htmlFor="Cŕedito" className="text-sm text-black ml-4">
                                                Cŕedito
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="Débito"
                                                name="pagamento"
                                                className="w-5 h-5"
                                            />
                                            <label htmlFor="Débito" className="text-sm text-black ml-4">
                                                Débito
                                            </label>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        ) : collect == "Mesa" ? (
                            <div className="mt-8">
                                <h3 className="text-base text-gray-800 mb-4">Informação de entrega</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input type="text" placeholder="Número da mesa"
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                    </div>

                                </div>

                            </div>
                        ) : null}





                    </form>
                </div>
                <div className="flex gap-4 max-md:flex-col mt-8 max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0 bg-white">
                    <button type="button" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1" onClick={handle}>Cancel</button>
                    <button type="button" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white">Finalizar pedido</button>
                </div>
            </div >
        </div >
    )
}