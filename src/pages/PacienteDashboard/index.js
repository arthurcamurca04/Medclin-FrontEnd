import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../../components/Navbar";
import AsidePanelPacient from "../../components/AsidePanelPacient";
import FormPatient from "../../components/PatientsForm";
import "./styles.css";

export default function PacientDashboard() {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <AsidePanelPacient />
          </Col>

          <Col >
            <div className="title">
              <h1>Pacientes</h1>
            </div>
            <FormPatient />
          </Col>
        </Row>
      </Container>
    </>
  );
}
