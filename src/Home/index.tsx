import CardHome from "../modules/CardHome";
import { Modal } from "./index-css";
import AutoCheckImage from '../Assets/modules/autoCheck.jpeg'
import CardapioOnlineImage from '../Assets/modules/cardpioOnline.jpeg'
import Header from "../component/header";
export default function Home() {

    return (
        <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CardHome moduleTitle="AutoCheck" to="AutoCheck" src={AutoCheckImage} />
                <CardHome moduleTitle="Cardapio Online" to="CardapioOnline" src={CardapioOnlineImage} />
            </div>
        </div>
    )
}