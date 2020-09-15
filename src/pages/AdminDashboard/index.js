import React from "react";
import Navigation from "../../components/Navbar/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AsidePanel from "../../components/AsidePanel";
import ListOfProfessionals from "../../components/ListOfProf"
import "./styles.css";

export default function AdminDashboard() {
  return (
    <>
      <Navigation />

      <main>
        <Container fluid className="mt-4">
          <Row>
            <Col md={3}>
              <AsidePanel />
            </Col>
            <Col md={9}>
              <ListOfProfessionals/>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
