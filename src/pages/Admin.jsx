import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ProductoForm from '../components/ProductForm';
import ListaProductos from '../components/ListaProductos';

const db = "https://683ac98443bb370a8673bc9a.mockapi.io/DB/products";

export default function Admin() {

    const [productos, setProductos] = useState([]);
    const [productoAEditar, setProductoAEditar] = useState(null);
    const [contadorId, setContadorId] = useState(1);

    useEffect(() => {
        fetch(db)
            .then(res => res.json())
            .then(data => setProductos(data))
    }, []);

    const agregarProducto = (producto) => {
        const nuevoProducto = { ...producto, id: contadorId };
        setProductos([...productos, nuevoProducto]);
        setContadorId(contadorId + 1);

        fetch(db, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoProducto)
        });
    };

    const actualizarProducto = async (productoActualizado) => {
        setProductos(productos.map(p => (p.id === productoActualizado.id ? productoActualizado : p)));
        await fetch(`${db}/${productoActualizado.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productoActualizado)
        })
        setProductoAEditar(null);
    };

    const borrarProducto = async (id) => {
        setProductos(productos.filter(p => p.id !== id));
        if (window.confirm('¿Seguro que quieres eliminar este producto?')) {
            await fetch(`${db}/${id}`, { method: 'DELETE' });
        }
    };

    const editarProducto = (producto) => {
        setProductoAEditar(producto);
    };


    return (

        <Container className="my-4">
            <h2>Agregar nuevos personajes</h2>
            <ProductoForm
                onSubmit={productoAEditar ? actualizarProducto : agregarProducto}
                productoAEditar={productoAEditar}
                onCancel={() => setProductoAEditar(null)}
            />
            <hr />
            <ListaProductos
                productos={productos}
                onEdit={editarProducto} onDelete={borrarProducto}
            />
        </Container>
    );
}
