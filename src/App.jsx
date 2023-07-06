
import { useRef, useState } from 'react';
import './App.css'
import { Card } from './componentes/card/card';
import { Footer } from './componentes/footer/footer';
import { Header } from './componentes/header/Header';
import { Cart } from './componentes/header/navbar/cart/cart';


function App() {
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState("");

  const [cartProducts, setcartProducts] = useState({}); //obj para add o id do produto e a quantia dentro do carrinho

  // const [preco, setPreco] = useState({});

  // function SomaPreco() {



  // }


  function AddProductToCart(productId) {

    let productCount = 1;

    if (productId in cartProducts) { //se esse produto ja esta no cartProducts

      productCount = cartProducts[productId] + 1
    }
    setcartProducts((cartProducts) => {

      return {
        ...cartProducts,
        [productId]: productCount //alterar o valor dele no cartProducts
      }
    })

  }

  function RemoveProductCart(productId) {

    let productCount = cartProducts[productId] - 1;

    setcartProducts((cartProducts) => {

      console.log(cartProducts, productCount)
      if (productCount <= 0) {
        delete cartProducts[productId];

        return {
          ...cartProducts
        }

      }

      return {
        ...cartProducts,
        [productId]: productCount //alterar o valor dele no cartProducts
      }
    })

  }



  const [style, setStyle] = useState("cartSumiu");

  const changeStyle = (newStyle) => {

    setStyle(newStyle);

  };






  return (
    <>
      <Header category={category} setCategory={setCategory} changeStyle={changeStyle} />

      <Cart cartProducts={cartProducts} setcartProducts={setcartProducts} products={products} AddProductToCart={AddProductToCart} RemoveProductCart={RemoveProductCart} style={style} changeStyle={changeStyle} />

      <Card category={category} AddProductToCart={AddProductToCart} setProducts={setProducts} products={products} />

      <Footer />
    </>
  )
}

export default App;
