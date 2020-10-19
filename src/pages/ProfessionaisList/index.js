import React from "react";
import Navigation from "../../components/Navbar/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AsidePanel from "../../components/AsidePanel";
import ListOfProfessionals from "../../components/ListOfProf"
import "./styles.css";

export default function ProfissionalsList() {
  return (
    <>
      <Navigation />

      <main>
        <Container fluid >
          <Row>
            <Col md={2} className="p-0">
              <AsidePanel />
            </Col>
            <Col >
              <ListOfProfessionals/>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
