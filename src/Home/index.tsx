import CardHome from "../modules/CardHome";
import { Modal } from "./index-css";

export default function Home(){
    return(
        <Modal>
            <div style={{padding:"50px"}}>

            <CardHome moduleTitle="AutoCheck" src="https://redefrota.com.br/wp-content/uploads/2020/05/filmes-sobre-caminhoneiros.png" to="AutoCheck"/>
            </div>
        </Modal>
    )
}