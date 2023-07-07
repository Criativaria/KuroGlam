import './Logo.css'
import { logo } from "../imgs/kuromi.png";
export default function Logo() {



    return (

        <>
            <div className='logo'>

                <img src={logo} className="img-logo" />

                <div className="nome-logo">
                    <p className="kuro">Kuro</p>
                    <p className="glam">Glam</p>
                </div>
            </div>


        </>
    )

}