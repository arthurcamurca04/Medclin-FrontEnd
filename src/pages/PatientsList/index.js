import React from "react";
import Navigation from "../../components/Navbar/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AsidePanel from "../../components/AsidePanel";
import ListOfPatients from "../../components/ListOfPatients"
import "./styles.css";

export default function PatientsList() {
  return (
    <>
      <Navigation />

      <main>
        <Container fluid >
          <Row>
            <Col md={3} className="p-0">
              <AsidePanel />
            </Col>
            <Col md={9}>
              <ListOfPatients/>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
