import CareScale from './CareScale'
import '../styles/PlantItem.css'
import {Product} from "../types/product";

function PlantItem(product: Product) {
    return(
        <li key={product.id} className='lmj-plant-item' onClick={() => handleClick(product.name)}>
            <img className='lmj-plant-item-cover' src={product.cover} alt={`${product.name} cover`}/>
            {product.name}
            <p>{product.price}</p>
            <div>
                <CareScale careType='water' scaleValue={product.water} />
                <CareScale careType='light' scaleValue={product.light} />
            </div>
        </li>
    )
}

function handleClick(plantName) {
    console.log(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
}


export default PlantItem