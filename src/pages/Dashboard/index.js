import React from "react";
import { useHistory } from "react-router-dom";
import Navigation from "../../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import landing from "../../assets/images/doctor_principal.svg";
import "./styles.css";

export default function Dashboard() {
  const history = useHistory();
  return (
    <div>
      <Navigation />
      <Row className=" align-items-md-center justify-content-md-center p-0 m-0">
        <Col sm={12} md={6} className="m-0 p-0">
          <Card style={{ width: "32rem", margin: "auto" }}>
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
              <Button
                onClick={() => history.push("/paciente/consultas/agendar")}
                size="lg"
                variant="primary"
              >
                Agende sua consulta
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="m-0 text-center">
          <img id="landing" src={landing} alt="Pacientes" />
        </Col>
      </Row>
    </div>
  );
}
