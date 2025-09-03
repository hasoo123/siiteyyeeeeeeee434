
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const ShoppingCartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l.383-1.437M7.5 14.25L5.106 5.106A2.25 2.25 0 002.865 3H2.25m9.75 11.25h.375a3.375 3.375 0 013.375 3.375V21a1.125 1.125 0 01-1.125 1.125H5.625a1.125 1.125 0 01-1.125-1.125v-.875c0-1.868 1.507-3.375 3.375-3.375h.375z" />
    </svg>
);


const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative overflow-hidden">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                 <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{product.category}</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h3>
                <p className="text-gray-500 mt-2 flex-grow">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                    <button
                        onClick={() => onAddToCart(product)}
                        className="flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform group-hover:scale-105"
                        aria-label={`Add ${product.name} to cart`}
                    >
                        <ShoppingCartIcon className="h-5 w-5"/>
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
