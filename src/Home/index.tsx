import CardHome from "../modules/CardHome";
import { Modal } from "./index-css";

export default function Home(){
    return(
        <Modal>
            <CardHome moduleTitle="Locação" src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png" to="AutoCheck"/>
            
        </Modal>
    )
}