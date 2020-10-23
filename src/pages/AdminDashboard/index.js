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
    <div className="admin-dashboard-container">
      <Navigation />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <AsidePanel />
          </Col>
          <Col md={8}>
            <div className="title">
              <h1>Painel Admin</h1>
            </div>

            <div className="cards">
              <div className="card">
                <strong className="card-text">10</strong>
                <img className="card-img" src={cardDoctor} alt="médico" />
              </div>
              <div className="card">
                <strong className="card-text">18</strong>
                <img className="card-img" src={cardPatient} alt="médico" />
              </div>
              <div className="card">
                <strong className="card-text">32</strong>
                <img className="card-img" src={cardAppointment} alt="médico" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
