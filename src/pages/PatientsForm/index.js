import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../../components/Navbar";
import AsidePanel from "../../components/AsidePanel";
import FormProfile from "../../components/FormProfile";
import "./styles.css";

export default function PatientForm() {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <AsidePanel />
          </Col>

          <Col>
            <div className="title">
              <h1>Paciente</h1>
            </div>
            <FormProfile />
          </Col>
        </Row>
      </Container>
    </>
  );
}
