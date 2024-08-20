import { useState } from "react";

export default function Additional({ closeAdditional }: { closeAdditional: () => void }) {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = (e: any) => {
        e.preventDefault()
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = (e: any) => {
        e.preventDefault()
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    return (
        <div
            className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
                <div className="flex items-center">
                    <h3 className="text-blue-600 text-xl font-bold flex-1">Adicionar no carrinho</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                        viewBox="0 0 320.591 320.591" onClick={closeAdditional}>
                        <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000"></path>
                        <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <form className="space-y-4 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="cheddar1"
                                name="cheese"
                                className="w-5 h-5"
                            />
                            <label htmlFor="cheddar1" className="text-sm text-black ml-4">
                                Cheddar
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="cheddar2"
                                name="cheese"
                                className="w-5 h-5"
                            />
                            <label htmlFor="cheddar2" className="text-sm text-black ml-4">
                                Presunto
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={(e) => decreaseQuantity(e)}
                            className="px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            readOnly
                            className="w-16 text-center border border-gray-300 rounded-lg py-2 px-4 font-medium text-black bg-white focus:outline-none"
                        />
                        <button
                            onClick={(e) => increaseQuantity(e)}
                            className="px-4 py-2 bg-gray-300 text-black font-semibold rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        >
                            +
                        </button>
                    </div>


                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Observação</label>
                        <textarea placeholder='Alguma observação para esse pedido?'
                            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg" rows={3}></textarea>
                    </div>



                    <div className="flex justify-end gap-4 !mt-8">
                        <button type="button"
                            className="px-6 py-3 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300" onClick={closeAdditional}>Cancel</button>
                        <button type="button"
                            className="px-6 py-3 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700">Adicionar ao pedido</button>
                    </div>
                </form>
            </div>
        </div>
    )
}