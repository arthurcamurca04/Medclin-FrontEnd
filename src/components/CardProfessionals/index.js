import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatarIcon from "../../assets/images/undraw_profile_pic_ic5t.svg";
import { FiEdit } from "react-icons/fi";

export default function CardProfessionals() {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" className="mb-2">
        <div className="list-item">
          <Row className="align-items-md-center">
            <Col md={2}>
              <img id="avatarIcon" src={avatarIcon} alt="Avatar" />
            </Col>
            <Col md={6}>
              <h5>Nome</h5>
              <strong>Arthur</strong>
            </Col>
            <Col md={2}>
              <h5>Especialidade</h5>
              <strong>Cardiologista</strong>
            </Col>
            <Col md={2}>
              <Link to="/admin/atualizar/profissional">
                <FiEdit size={32} />
              </Link>
            </Col>
          </Row>
        </div>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="mb-2">
        <div>
          <Row className="align-items-md-center">
            <Col md={2}>
              <img id="avatarIcon" src={avatarIcon} alt="Avatar" />
            </Col>
            <Col md={6}>
              <h5>Nome</h5>
              <strong>Reinaldo Neto</strong>
            </Col>
            <Col md={2}>
              <h5>Especialidade</h5>
              <strong>Ortopedista</strong>
            </Col>

            <Col md={2}>
              <Link to="/admin/atualizar/profissional">
                <FiEdit size={32} />
              </Link>
            </Col>
          </Row>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}
