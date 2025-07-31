import { useContext, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from '../components/CartContext';

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);

    const eliminarDelCarrito = (id) => {
        setCart(prev => prev.filter(producto => producto.id !== id));
    };

    const aumentarCantidad = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
            )
        );
    };

    const disminuirCantidad = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.cantidad > 0
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            )
        );
    };

    const total = cart.reduce((acc, item) => acc + item.cantidad, 0);


    if (cart.length === 0) {
        return (
            <Container className="mt-4">
                <h3>Tu carrito está vacío</h3>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <h3>Carrito</h3>
            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr>
                        <th>Personaje</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <Button
                                        variant="success"
                                        size="sm"
                                        onClick={() => { aumentarCantidad(item.id) }}
                                    >+
                                    </Button>
                                    <span>{item.cantidad}</span>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => { disminuirCantidad(item.id) }}
                                    >−
                                    </Button>
                                </div>
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => eliminarDelCarrito(item.id)}
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h5 className="text-end">Total de personajes: {total}</h5>
        </Container>
    );
};

