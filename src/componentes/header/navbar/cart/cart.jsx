import './cart.css';
import { useEffect, useState } from "react";
import { CloseCard } from './x/closecard';



export function Cart(props) {

    const [products, setProducts] = useState([]);

    const [precoTotal, setPrecoTotal] = useState(0);

    useEffect(() => {
        const tempProducts = [];
        let tempPreco = 0;

        <clean tempProducts={tempProducts} />

        for (const [productId, count] of Object.entries(props.cartProducts)) {

            const dadosDoProduto = props.products.find((products) => products.id === productId) //pegando as infos dos produtos

            tempProducts.push({

                ...dadosDoProduto,
                quantidade: count,
                add: props.AddProductToCart,
                remove: props.RemoveProductCart
            })

            tempPreco = tempPreco + dadosDoProduto.preco * count;
        }



        setProducts(tempProducts)

        setPrecoTotal(tempPreco)




    }, [props.cartProducts])




    return (

        <div className={props.style}>

            <div className="cartContent">

                <div className='closeCard-mae'>
                    < CloseCard close={() => props.changeStyle('cartSumiu')} />
                </div>
                <div className='todosProdutos'>
                    {products.map((product) => <ProductComanda {...product} />)}
                </div>




                <div className='precoTotal'>
                    <div className='texto-preco'>
                        <p>Preço Total: </p>
                        <p>R${precoTotal.toFixed(2)}</p>
                    </div>
                    <div className='button-comprar'>
                        <button className="button-plus" onClick={() => props.setcartProducts({})}>Comprar!</button>
                    </div>
                </div>

            </div>
        </div>


    )
}


export function ProductComanda(produtos) {

    return (
        <div className="produto">
            <div className="img-titulo">
                <div className="img-div-cart">
                    <img src={produtos.imagem} alt="" className='img-produto' />
                </div>

                <div className='preco-quantia'>
                    <p className='nome-cart'>{produtos.nome}</p>

                    <div className="quantia">
                        <p className='preco-cart'>R${(produtos.preco * produtos.quantidade).toFixed(2)}</p>
                        <div className="AddRemove">
                            <button className="button-plus" onClick={() => produtos.remove(produtos.id)}>-</button>
                            <p className='quantidade'>{produtos.quantidade}</p>
                            <button className="button-plus" onClick={() => produtos.add(produtos.id)}>+</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )

}


