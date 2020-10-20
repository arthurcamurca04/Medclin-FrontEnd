import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../../components/Navbar";
import AsidePanel from "../../components/AsidePanel";
import FormProfileProfessional from "../../components/FormProfileProfessionals";

import "./styles.css";

export default function ProfissionalForm() {
  
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
              <h1>Profissionais</h1>
            </div>
           <FormProfileProfessional></FormProfileProfessional>
          </Col>
        </Row>
      </Container>
    </>
  );
}
