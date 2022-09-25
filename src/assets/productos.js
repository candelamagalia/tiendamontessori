export const products = [{
        id: 1,
        image: 'https://i.ibb.co/7bDkpWQ/arcoiris.jpg',
        product: "Arcoíris",
        category: "Muebles",
        description: "Arcoíris decorativo de madera",
        price: 2000,
        stock: 3
    },
    {
        id: 2,
        image: 'https://i.ibb.co/pyx31B5/cuadrito.jpg',
        product: 'Cuadrito',
        category: 'Deco',
        description: 'cuadrito de princesa con globos',
        price: 3000,
        stock: 2,

    },
    {
        id: 3,
        image: 'https://i.ibb.co/rvwXXrX/gimnasio.jpg',
        product: 'Gimnasio para bebés',
        category: 'Juegos',
        description: 'Gimnasio para bebés con 4 juegos diferentes para estimular los sentidos',
        price: 5000,
        stock: 2
    },
    {
        id: 4,
        image: 'https://i.ibb.co/6Hwn0N0/sonajero.jpg',
        product: 'Sonajero de zorrito',
        category: 'Accesorios',
        description: 'Kit sonajero de zorrito para bebés',
        price: 2000,
        stock: 4
    }
];

// export function getProducts() {
//     return products;
// }

export function getProducts(category) {
    return products.find(
        (products) => products.category === category
    );
}