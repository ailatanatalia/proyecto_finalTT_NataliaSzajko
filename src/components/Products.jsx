import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Products(props) {

    const [cart, setCart] = useState(0);
    const [cartList, setCartList] = useState([]);
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
                    setPersonajes(data); //con query el json tiene formato {[objeto1,objeto2,...]}
                } else {
                    setPersonajes(data.items); //sin query el json tiene formato {"items":[objeto1,objeto2,...], "meta":[...], "links":[...]}
                }; setLoading(false);
            })
            .catch(err => {
                console.error("Error de carga de API", err);
                setLoading(false);
            });
    }, [props.query]);

    //console.log(cartList);

    return (
        //muestro las cards card  
        <div className="m-0"
            style={{
                margin: "0 0 0 0",
                backgroundImage: `url("https://dragonball-api.com/planetas/Planeta_Vegeta_en_Dragon_Ball_Super_Broly.webp")`,
                backgroundSize: 'auto',
            }}>
            <Container >
                <Row>
                    {/* <Col> */}
                    <h1 className='mt-4' style={{ textAlign: "center", color: "white", fontWeight: "bolder" }}>{props.title}</h1>
                    {/* </Col> */}
                    <Col style={{ color: "white", textAlign: "end" }}>

                        <Badge bg="secondary">{cart}</Badge>
                        <Link to="/cart" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" >
                            </FontAwesomeIcon>
                        </Link>
                        <Button variant="outline-light" style={{ margin: "10px" }} onClick={() => setCart(0)}>vaciar carrito</Button>

                    </Col>
                </Row>
                <Row>
                    {personajes.map(char => (
                        <Col key={char.id} md={4} style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "stretch",
                        }}>
                            <Card className="h-100 w-50 d-flex flex-column"/* className="m-2"*/ style={{
                                width: "100%",
                                background: "black",
                                boxShadow: "0 4px 8px 0 rgba(12, 12, 12, 0.93), 0 6px 50px 0 rgba(245, 235, 235, 0.99)"
                            }} >
                                <Card.Img variant='top' src={char.image} style={{ background: "white", objectFit: "contain", }} />
                                <Card.Body variant='bottom' style={{
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
                                        <h4><strong>Raza</strong></h4>
                                        {char.race || 'N/A'}
                                        <br />
                                        <h4><strong>Género:</strong></h4>
                                        {char.gender || 'N/A'}

                                    </Card.Text>
                                    <Button variant="primary" style={{ margin: "10px 20px", }} onClick={() => {
                                        setCart(cart + 1);
                                        //setCartList(cartList.push(char))
                                        setCartList(cartList.concat([char]));
                                    }
                                    }>agregar al carrito </Button>
                                    <br />
                                    <Button variant="danger" onClick={() => { cart > 0 ? (setCart(cart - 1)) : (setCart(0)) }}>Eliminar</Button>
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