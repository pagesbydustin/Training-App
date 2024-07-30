import { Container } from "react-bootstrap";

export default function FooterComponent() {


    return (
        <div style={{
            position: "absolute",
            display: "flex",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,.10)",
            padding: "1rem",
            height: "50px",
        }}>
            <Container className="w-100" style={{ textAlign: "center" }}><p>2024 HLC</p></Container>

        </div >
    );
}

