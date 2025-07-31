import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCart((prevCarrito) => {
            const existe = prevCarrito.find(item => item.id === producto.id);
            if (existe) {
                return prevCarrito.map(item =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            }
            return [...prevCarrito, { ...producto, cantidad: 1 }];
        });
    };

    const eliminarDelCarrito = (id) => {
        setCart((prevCarrito) => prevCarrito.filter(item => item.id !== id));
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                agregarAlCarrito,
                eliminarDelCarrito,
                vaciarCarrito
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
