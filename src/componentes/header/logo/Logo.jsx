import './Logo.css'
import logoimg from "/imgs/kuromi.png";
export default function Logo() {



    return (

        <>
            <div className='logo'>

                <img src={logoimg} className="img-logo" />

                <div className="nome-logo">
                    <p className="kuro">Kuro</p>
                    <p className="glam">Glam</p>
                </div>
            </div>


        </>
    )

}