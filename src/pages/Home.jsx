import { Container } from "react-bootstrap";
import Productos from "../components/Products";

export default function Home() {
    return (
        <div>
            <Container className="mt-4">
                <h1>Home</h1>
            </Container>
            <Productos />
        </div>
    )
}