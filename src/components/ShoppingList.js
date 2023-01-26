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
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <li className='lmj-plant-item' key={ plant.id }>
                        {plant.name}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList