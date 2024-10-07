import React from 'react';

interface CartProps {
    name: string;
    age: number;
    rollno: number;
    classe: string;
}

const Cart: React.FC<CartProps> = ({ name, age, rollno, classe }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full transform transition-transform duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:shadow-2xl hover:text-white cursor-pointer">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Student ID Card</h2>
            <p className="text-gray-800 text-lg">Name: <span className="font-semibold">{name}</span></p>
            <p className="text-gray-800 text-lg">Age: <span className="font-semibold">{age}</span></p>
            <p className="text-gray-800 text-lg">Roll No: <span className="font-semibold">{rollno}</span></p>
            <p className="text-gray-800 text-lg">Class: <span className="font-semibold">{classe}</span></p>
        </div>
    );
};

export default Cart;
