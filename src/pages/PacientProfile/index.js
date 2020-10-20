import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../../components/Navbar";
import AsidePanelPacient from "../../components/AsidePanelPacient";
import FormProfile from "../../components/FormProfile";
import "./styles.css";

export default function PacientProfile() {
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
              <h1>Meu perfil</h1>
            </div>
            <FormProfile />
          </Col>
        </Row>
      </Container>
    </>
  );
}
