import { Image } from "react-bootstrap";
import Products from "../components/Products";
import logo from "../assets/Dragon-Ball-Logo-1996.png"

export default function Home() {
    return (
        <div className="m-0 bg-warning">
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    src={logo}
                    alt="Logo"
                    fluid
                    width="500vw"
                />
            </div>
            <Products query="" title="" />
        </div>
    )
}
