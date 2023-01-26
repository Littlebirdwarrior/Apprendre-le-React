//La Liste de mes produits

import {product} from "../types/product";

export const plantList: product[] = [
    {
        name: 'monstera',
        category: 'classique',
        id: '1ed',
        isBestSale : true,
        price: 8
    },
    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '2ab',
        price: 8
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3sd',
        isSpecialOffer: true,
        price: 8
    },
    {
        name: 'yucca',
        category: 'classique',
        id: '4kk',
        price: 8
    },
    {
        name: 'olivier',
        category: 'extérieur',
        id: '5pl',
        isAvailable: false,
        price: 8
    },
    {
        name: 'géranium',
        category: 'extérieur',
        id: '6uo',
        price: 8,
    },
    {
        name: 'basilique',
        category: 'extérieur',
        id: '7ie',
        isSpecialOffer: true
    },
    {
        name: 'aloe',
        category: 'plante grasse',
        id: '8fp',
        isSpecialOffer: true,
        price: 8,
    },
    {
        name: 'succulente',
        category: 'plante grasse',
        id: '9vn',
        price: 8
    }
]
