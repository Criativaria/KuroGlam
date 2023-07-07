import './navbar.css';
import { BsCart3 } from 'react-icons/bs';
import React, { useState } from "react";
import hamburguerImg from '/src/assets/bars-solid.svg';

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

                <img src={hamburguerImg} alt="" className='hamburguer' />

            </div>
        </>
    )


}