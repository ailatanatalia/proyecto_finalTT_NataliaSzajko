import { Table, Button } from 'react-bootstrap';

export default function ListaProductos({ productos, onEdit, onDelete }) {
    if (productos.length === 0) {
        return <p>lista vacía</p>;
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Raza</th>
                    <th>Genero</th>
                    <th>Imagen</th>
                    <th style={{ width: '150px' }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(({ id, name, race, gender, image }) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{race}</td>
                        <td>{gender}</td>
                        <td>
                            {image?.startsWith('http') ? (
                                <img src={image} alt={name} width={50} />
                            ) : (
                                <span>{image}</span>
                            )}
                        </td>
                        <td>
                            <Button
                                variant="warning"
                                size="sm"
                                className="me-2"
                                onClick={() => onEdit({ id, name, race, gender, image })}
                            >
                                Editar
                            </Button>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => onDelete(id)}
                            >
                                Borrar
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
