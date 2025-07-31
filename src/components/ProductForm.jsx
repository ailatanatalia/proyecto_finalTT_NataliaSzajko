import { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';


export default function ProductoForm({ onSubmit, productoAEditar, onCancel }) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [race, setRace] = useState('');
    const [image, setImage] = useState('');
    const [errores, setErrores] = useState([]);

    useEffect(() => {
        if (productoAEditar) {
            setName(productoAEditar.name);
            setGender(productoAEditar.gender);
            setRace(productoAEditar.race);
            setImage(productoAEditar.image);
            setErrores([]);
        } else {
            setName('');
            setGender('');
            setRace('');
            setImage('');
            setErrores([]);
        }
    }, [productoAEditar]);

    const validar = () => {
        const erroresValidacion = [];
        if (!name.trim()) {
            erroresValidacion.push('ingrese un nombre');
        }
        if (!gender.trim()) {
            erroresValidacion.push('ingrese un genero');
        }
        if (!race.trim()) {
            erroresValidacion.push('ingrese una raza');
        }
        setErrores(erroresValidacion);
        return erroresValidacion.length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validar()) return;

        const producto = {
            name: name.trim(),
            gender: gender.trim(),
            race: race.trim(),
            image: image.trim(),
        };

        if (productoAEditar) {
            producto.id = productoAEditar.id;
        }
        onSubmit(producto);

        if (!productoAEditar) {
            setName('');
            setGender('');
            setRace('');
            setImage('');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {errores.length > 0 && (
                <Alert variant="danger">
                    <ul>
                        {errores.map((err, idx) => (
                            <li key={idx}>{err}</li>
                        ))}
                    </ul>
                </Alert>
            )}

            <Form.Group as={Row} className="mb-3" controlId="name">
                <Form.Label column sm={2}>Nombre</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        placeholder="Nombre del personaje"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="gender">
                <Form.Label column sm={2}>Genero</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        placeholder="genero"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="race">
                <Form.Label column sm={2}>Raza</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        placeholder="raza"
                        value={race}
                        onChange={(e) => setRace(e.target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="image">
                <Form.Label column sm={2}>imagen (URL)</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="url"
                        placeholder="image url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Col>
            </Form.Group>


            <Button variant="primary" type="submit" className="me-2">
                {productoAEditar ? 'Actualizar' : 'Agregar'}
            </Button>

            {productoAEditar && (
                <Button variant="secondary" onClick={onCancel}>
                    Cancelar
                </Button>
            )}
        </Form>
    );
};