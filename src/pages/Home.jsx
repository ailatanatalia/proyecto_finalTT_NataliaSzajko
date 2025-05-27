import { Container, Image } from "react-bootstrap";
import Products from "../components/Products";
import logo from "../assets/Dragon-Ball-Logo-1996.png"

export default function Home() {
    return (
        <div className="m-0 bg-warning">
            <h1 className='pt-5' style={{ textAlign: "center", color: "blue", fontWeight: "bolder" }}>Personajes de</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    src={logo}
                    alt="Logo"
                    fluid
                    width="30%"
                />
            </div>
            <Products query="" title="" />
        </div>
    )
}
