
import type { Product } from '../types';

const products: Product[] = [
    {
        id: 1,
        name: 'Ergonomic Chair',
        price: 249.99,
        imageUrl: 'https://picsum.photos/seed/chair/600/600',
        description: 'Support your back with this state-of-the-art ergonomic office chair, designed for comfort during long hours.',
        category: 'Furniture'
    },
    {
        id: 2,
        name: 'Wireless Noise-Cancelling Headphones',
        price: 349.00,
        imageUrl: 'https://picsum.photos/seed/headphones/600/600',
        description: 'Immerse yourself in sound with these high-fidelity headphones, featuring active noise cancellation.',
        category: 'Electronics'
    },
    {
        id: 3,
        name: 'Minimalist Desk Lamp',
        price: 79.50,
        imageUrl: 'https://picsum.photos/seed/lamp/600/600',
        description: 'Brighten your workspace with this sleek, modern LED desk lamp with adjustable brightness levels.',
        category: 'Home Goods'
    },
    {
        id: 4,
        name: 'Smart Water Bottle',
        price: 59.95,
        imageUrl: 'https://picsum.photos/seed/bottle/600/600',
        description: 'Stay hydrated with this smart bottle that tracks your water intake and glows to remind you to drink.',
        category: 'Gadgets'
    },
    {
        id: 5,
        name: 'Mechanical Keyboard',
        price: 125.00,
        imageUrl: 'https://picsum.photos/seed/keyboard/600/600',
        description: 'Experience a satisfying typing feel with this durable mechanical keyboard, perfect for work and play.',
        category: 'Electronics'
    },
    {
        id: 6,
        name: 'Leather Messenger Bag',
        price: 180.00,
        imageUrl: 'https://picsum.photos/seed/bag/600/600',
        description: 'Carry your essentials in style with this handcrafted full-grain leather messenger bag.',
        category: 'Accessories'
    },
    {
        id: 7,
        name: 'Pour-Over Coffee Maker',
        price: 45.00,
        imageUrl: 'https://picsum.photos/seed/coffee/600/600',
        description: 'Brew the perfect cup of coffee every morning with this elegant glass pour-over coffee maker.',
        category: 'Home Goods'
    },
    {
        id: 8,
        name: 'Yoga Mat',
        price: 65.00,
        imageUrl: 'https://picsum.photos/seed/yoga/600/600',
        description: 'A high-quality, non-slip yoga mat for your daily practice. Made from eco-friendly materials.',
        category: 'Fitness'
    },
];

export const getProducts = async (): Promise<Product[]> => {
    // Simulate network delay
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};
