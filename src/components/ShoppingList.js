import {plantList} from '../datas/plantList'
import PlantItem from "./PlantItem";

import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = plantList.reduce(
        (accumulator, plant) =>
            accumulator.includes(plant.category) ? accumulator : accumulator.concat(plant.category), //ici ternaire
        []
    );

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((product) => (
                    <PlantItem
                        id={product.id}
                        cover={product.cover}
                        name={product.name}
                        price={product.price}
                        water={product.water}
                        light={product.light}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList