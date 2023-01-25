import '../styles/Cart.css'

//J'établis la liste de mes produits grace à une classe

class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const product_1 = new product("Monsterra", 8);
const product_2 = new product("Lierre", 13);
const product_3 = new product("Lila blanc", 15);


//Nb; pour rapeller une const, le $ n'est pas nécessaire en react
function Cart(){

    return(
        <div>
            <h2>Panier</h2>
            <ul>
                <li> {product_1.name} : {product_1.price}€</li>
                <li> {product_2.name} : {product_2.price}€</li>
                <li> {product_3.name} : {product_3.price}€</li>

            </ul>
            Total : { product_1.price + product_2.price + product_3.price } €
        </div>

    )
}

export default Cart