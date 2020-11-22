import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Nam dep zai',
            email: 'nam@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'Vuong cute',
            email: 'vuong@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '../images/p1.jpg',
            price: 120,
            brand: 'Nike',
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'Toi se yeu em mai mai  '
        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '../images/p2.jpg',
            price: 120,
            brand: 'Adidas',
            countInStock: 0,
            rating: 4.5,
            numReviews: 10,
            description: 'Xem truoc khi uong'
        },
        {
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '../images/p3.jpg',
            price: 220,
            brand: 'Lascote',
            countInStock: 20,
            rating: 4.8,
            numReviews: 10,
            description: 'Ao hang con ca sau'
        },
        {
            name: 'Lacoste Free Pants',
            category: 'Pants',
            image: '../images/p4.jpg',
            price: 110,
            brand: 'Lascote',
            countInStock: 15,
            rating: 4.8,
            numReviews: 10,
            description: 'Ao hang con ca sau'
        },
        {
            name: 'Puma slimz pant',
            category: 'Pants',
            image: '../images/p5.jpg',
            price: 68,
            brand: 'Puma',
            countInStock: 0,
            rating: 4.3,
            numReviews: 10,
            description: 'Ao hang con ca sau'
        },
        {
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: '../images/p6.jpg',
            price: 117,
            brand: 'Adidas',
            countInStock: 40,
            rating: 3,
            numReviews: 15,
            description: 'Ao hang con ca sau'
        }
    ]
}

export default data;