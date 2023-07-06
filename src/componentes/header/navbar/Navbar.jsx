import './navbar.css';
import { BsCart3 } from 'react-icons/bs';
import React, { useState } from "react";


export default function Navbar(props) {

    const [hamburguer, setHamburguer] = useState("hamburguerOff");

    function hamburguerOnOff() {

        if (hamburguer === 'hamburguerOff') {

            setHamburguer('hamburguerOn')

        } else {

            setHamburguer('hamburguerOff')
        }
    }


    return (
        <>
            <div className={"nav-bar " + hamburguer}>
                <nav onClick={() => props.setCategory("")} className="classes">Home</nav>
                <nav onClick={() => props.setCategory("skincare")} className="classes">Skin Care</nav>
                <nav onClick={() => props.setCategory("pele")} className="classes">Pele</nav>
                <nav onClick={() => props.setCategory("boca")} className="classes">Boca</nav>
                <nav onClick={() => props.setCategory("olhos")} className="classes">Olhos</nav>
                <nav onClick={() => props.changeStyle('cartFundo')}>
                    < BsCart3 className="cart" />
                </nav>

            </div>


            <div className='img-div' onClick={() => hamburguerOnOff()}>

                <img src="src\assets\bars-solid.svg" alt="" className='hamburguer' />

            </div>
        </>
    )


}