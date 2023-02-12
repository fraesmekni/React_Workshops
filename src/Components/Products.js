import React from "react";
import Product from "./Product";
import Cardd from "./Product"
import Products from '../Components/Products.css'

import "./Products.css"
function BarchaCards(props){
   return <div className="box"> 
        <Product img="product1.webp"
              title="Lenovo"
              description="Le lorem ipsum est,
              en imprimerie,
              une suite de mots sans signification utilisée
              à titre provisoire pour calibrer une mise en page"
              price="1400"   
                 />
        <Product 
              img="product2.jpg"
              title="Mouse"
              description="Le lorem ipsum est,
              en imprimerie,
              une suite de mots sans signification utilisée
              à titre provisoire pour calibrer une mise en page"
              price="30"   
                 />
        <Product 
              img="product3.jpg"
              title="KeyBoard"
              description="Le lorem ipsum est,
              en imprimerie,
              une suite de mots sans signification utilisée
              à titre provisoire pour calibrer une mise en page"
              price="70"   
                 />                   

    </div>

}
export default BarchaCards;