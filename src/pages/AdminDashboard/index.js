import React from "react";
import Navigation from "../../components/Navbar/index";
import { Container, Row, Col } from "react-bootstrap";
import cardDoctor from "../../assets/images/doctor.svg";
import cardPatient from "../../assets/images/patient.svg";
import cardAppointment from "../../assets/images/appointment.svg";
import AsidePanel from "../../components/AsidePanel";
import "./styles.css";

export default function AdminDashboard() {
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
                <h1>Painel Admin</h1>
              </div>

              <div className="admin-panel">
                <div className="cards">
                  <ul className="cards-list">
                    <li>
                      <strong>10</strong>
                      <img src={cardDoctor} alt="Médico" />
                    </li>
                    <li>
                    <strong>20</strong>
                      <img src={cardPatient} alt="Paciente" />
                    </li>
                    <li>
                    <strong>30</strong>
                      <img src={cardAppointment} alt="Consulta" />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
    </>
  );
}
