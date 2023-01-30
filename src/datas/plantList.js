//La Liste de mes produits

import monstera from '../assets/monstera.jpg'

import {Product} from "../types/product";

export const plantList: Product[] = [
    {
        name: 'monstera',
        category: 'classique',
        id: '1ed',
        isBestSale : true,
        light: 2,
        water: 3,
        price: 8,
        cover: monstera
    },
    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '2ab',
        light: 1,
        water: 3,
        price: 8,
        cover: monstera
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3sd',
        isSpecialOffer: true,
        light: 3,
        water: 1,
        price: 8,
        cover: monstera
    },
    {
        name: 'yucca',
        category: 'classique',
        id: '4kk',
        light: 2,
        water: 1,
        price: 5,
        cover: monstera
    },
    {
        name: 'olivier',
        category: 'extérieur',
        id: '5pl',
        isAvailable: false,
        light: 1,
        water: 2,
        price: 8,
        cover: monstera
    },
    {
        name: 'géranium',
        category: 'extérieur',
        id: '6uo',
        isAvailable: false,
        light: 2,
        water: 3,
        price: 5,
        cover: monstera
    },
    {
        name: 'basilique',
        category: 'extérieur',
        id: '7ie',
        light: 2,
        water: 1,
        isSpecialOffer: true,
        price: 24,
        cover: monstera
    },
    {
        name: 'aloe',
        category: 'plante grasse',
        id: '8fp',
        isSpecialOffer: true,
        light: 1,
        water: 1,
        price: 13,
        cover: monstera
    },
    {
        name: 'succulente',
        category: 'plante grasse',
        isAvailable: false,
        id: '9vn',
        light: 2,
        water: 3,
        price: 8,
        cover: monstera
    }
]
