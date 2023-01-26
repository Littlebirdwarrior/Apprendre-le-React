import {plantList} from '../datas/plantList'
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
            <ul>
                {plantList.map((plant) => (
                    <li key={ plant.id }>
                        {plant.name}{plant.isBestSale && <span>🔥</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList