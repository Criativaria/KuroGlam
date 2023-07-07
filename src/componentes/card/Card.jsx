import './card.css';
import React from 'react';
import { useEffect, useState } from 'react';


export function Card(props) {



    useEffect(() => processarProdutos, []); //chamou a função processarProdutos

    async function processarProdutos() {
        const resposta = await fetch("https://json-produtos-kuroglam.vercel.app/db.json");

        const dados = await resposta.json();

        props.setProducts(dados);


    }

    function filterCategory() {

        if (props.category == "") {
            return props.products;
        }

        return props.products.filter(product => product.categoria == props.category);
    }

    return (

        <div className='cards'>
            {filterCategory().map((product, index) => <ProductCard {...product} index={index} AddProductToCart={props.AddProductToCart} />)} {/* passa todos os produtos para o productCard */}
        </div>
    )

}


export function ProductCard(produto) {



    return (

        <div className="card">
            <div className="img-texto">
                <p className="nome">{produto.nome}</p>
                <img className='img_produto' src={produto.imagem} alt="" />
                <div className="descricao">
                    <p>{produto.descricao}</p>
                </div>
                <div className='preco-botao'>
                    <p className="preco">R${produto.preco}</p>
                    <button className='botao' onClick={() => produto.AddProductToCart(produto.id)}>Eu Quero!</button>
                </div>
            </div>
        </div>
    )
}
