import '../styles/Cart.css'
import {plantList} from '../datas/plantList'
import {Product} from "../types/product";

function displayProduct(product: Product) {
    return (
        <li> {product.name} : {product.price} €</li>
    )
}

//Nb; pour rappeller une const, le $ n'est pas nécessaire en react
function Cart() {

    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                {plantList.map((plant) => displayProduct(plant))}
            </ul>
        </div>

    )
}

//Construction du panier avec une fonction


//export pour render
export default Cart