import { useEffect, useState, useContext } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';


export default function Products(props) {

    const { agregarAlCarrito } = useContext(CartContext);
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let path = 'https://dragonball-api.com/api/characters?limit=21' + props.query;
        console.log(path, props.query);
        // hacer el pedido de la api
        fetch(path)
            .then(res => res.json())
            .then(data => {
                if (typeof data.items === 'undefined') {
                    setPersonajes(data);
                } else {
                    setPersonajes(data.items);
                };
                setLoading(false);
            })
            .catch(err => {
                console.error("Error de carga de API", err);
                setLoading(false);
            });
    }, [props.query]);

    useEffect(() => {
        if (!loading) {
            let path1 = 'https://683ac98443bb370a8673bc9a.mockapi.io/DB/products';
            fetch(path1)
                .then(res1 => res1.json())
                .then(data1 => {
                    setPersonajes(personajes => [...personajes, ...data1]);
                })
                .catch(err => {
                    console.error("Error de carga de API", err);
                    setLoading(false);
                });
        };
    }, [loading]);

    useEffect(() => {
        if (personajes.length > 0) {
            console.log("Personajes después de ambas cargas:", personajes);
        }
    }, [personajes]);

    return (
        //muestro las cards   
        <div className="m-0"
            style={{
                margin: "0 0 0 0",
                backgroundImage: `url("https://dragonball-api.com/planetas/Planeta_Vegeta_en_Dragon_Ball_Super_Broly.webp")`,
                backgroundSize: 'auto',
            }}>
            <Container >
                <Row>
                    <h1 className='mt-4' style={{ textAlign: "center", color: "white", fontWeight: "bolder" }}>{props.title}</h1>
}                </Row>
                <Row>
                    {personajes.map(char => (
                        <Col key={char.id} xs={12} sm={6} md={4} lg={3} style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "stretch",
                        }}>
                            <Card className="h-100 d-flex flex-column" style={{
                                background: "black",
                                boxShadow: "0 4px 8px 0 rgba(12, 12, 12, 0.93), 0 6px 50px 0 rgba(245, 235, 235, 0.99)"
                            }} >
                                <Card.Img variant='top' src={char.image} style={{ background: "white", objectFit: "contain", height: "300px" }} />
                                <Card.Body className="d-flex flex-column justify-content-between"
                                    variant='bottom' style={{
                                        height: "300px",
                                        fontFamily: "Arial, Helvetica, sans-serif",
                                        color: "white",
                                        textAlign: "center",
                                        padding: "20px 20px",
                                    }}>
                                    <Card.Title style={{
                                        color: "rgb(248, 163, 6)",
                                        fontWeight: "bolder",
                                    }}><h1><strong>{char.name}</strong></h1></Card.Title>
                                    <Card.Text style={{ textAlign: "left", paddingTop: "20px" }}>
                                        <strong>Raza: </strong>
                                        {char.race || 'N/A'}
                                        <br />
                                        <strong>Género: </strong>
                                        {char.gender || 'N/A'}

                                    </Card.Text>
                                    <Button variant="primary" style={{ margin: "10px 20px", }} onClick={() => {
                                        agregarAlCarrito(char);
                                    }
                                    }>agregar al carrito </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
            </ Container >
        </div>
    );
}