import React from "react";
import Navigation from "../../components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import landing from "../../assets/images/doctor_principal.svg";
import "./styles.css";

export default function Dashboard() {
  return (
    <>
      <Navigation />
      <Container className="dash-container">
        <Row className="justify-content-md-center align-items-md-center">
          <Col md={6}>
            <Card style={{ width: "32rem" }}>
              <Card.Body>
                <Card.Title>
                  <h1>
                    <strong>Medclin</strong>
                  </h1>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <h2>Equipe de profissionais</h2>
                </Card.Subtitle>
                <Card.Text>
                  Tratamento especializados feito por médicos capacitados.
                </Card.Text>
                <Button size="lg" variant="primary">
                  Agende sua consulta
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <img id="landing" src={landing} alt="Pacientes" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
