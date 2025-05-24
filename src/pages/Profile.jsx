import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";

export default function Profile() {
    const { id } = useParams();
    return (
        <Container className="mt-4">
            <h1>Perfil {id}</h1>
        </Container>
    )
}