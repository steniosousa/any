export default function Checkout({ handle }: { handle: () => void }) {
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
                                        <img src='https://readymadeui.com/images/product10.webp' className="w-full object-contain" />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-base text-white">Split Sneakers</h3>
                                        <ul className="text-xs text-gray-300 space-y-2 mt-2">
                                            <li className="flex flex-wrap gap-4">Size <span className="ml-auto">37</span></li>
                                            <li className="flex flex-wrap gap-4">Quantity <span className="ml-auto">2</span></li>
                                            <li className="flex flex-wrap gap-4">Total Price <span className="ml-auto">$40</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                                        <img src='https://readymadeui.com/images/product11.webp' className="w-full object-contain" />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-base text-white">Velvet Boots</h3>
                                        <ul className="text-xs text-gray-300 space-y-2 mt-2">
                                            <li>Size <span className="float-right">37</span></li>
                                            <li>Quantity <span className="float-right">2</span></li>
                                            <li>Total Price <span className="float-right">$40</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                                        <img src='https://readymadeui.com/images/product14.webp' className="w-full object-contain" />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-base text-white">Echo Elegance</h3>
                                        <ul className="text-xs text-gray-300 space-y-2 mt-2">
                                            <li>Size <span className="float-right">37</span></li>
                                            <li>Quantity <span className="float-right">2</span></li>
                                            <li>Total Price <span className="float-right">$40</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                                        <img src='https://readymadeui.com/images/product13.webp' className="w-full object-contain" />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-base text-white">Pumps</h3>
                                        <ul className="text-xs text-gray-300 space-y-2 mt-2">
                                            <li>Size <span className="float-right">37</span></li>
                                            <li>Quantity <span className="float-right">2</span></li>
                                            <li>Total Price <span className="float-right">$40</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
                            <h4 className="flex flex-wrap gap-4 text-base text-white">Total <span className="ml-auto">$84.00</span></h4>
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

                            <div className="flex gap-4 max-md:flex-col mt-8">
                                <button type="button" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1" onClick={handle}>Cancel</button>
                                <button type="button" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white">Finalizar pedido</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}