import React from "react";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatarIcon from "../../assets/images/undraw_profile_pic_ic5t.svg";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function CardPacient() {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" className="mb-2">
        <div className="list-item">
          <Row className="align-items-md-center">
            <Col md={1}>
              <img id="avatarIcon" src={avatarIcon} alt="Avatar" />
            </Col>
            <Col md={9}>
              <h5>Nome</h5>
              <strong>Arthur</strong>
            </Col>
            <Col md={2}>
              <Link to="/admin/atualizar/paciente">
                <FiEdit size={28} />
              </Link>
              <Button variant="link" onClick={() => {}}>
                <FiTrash2 color="#ff0000" size={28} />
              </Button>
            </Col>
          </Row>
        </div>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="mb-2">
        <div>
          <Row className="align-items-md-center">
            <Col md={1}>
              <img id="avatarIcon" src={avatarIcon} alt="Avatar" />
            </Col>
            <Col md={9}>
              <h5>Nome</h5>
              <strong>Reinaldo Neto</strong>
            </Col>
            <Col md={2}>
              <Link to="/admin/atualizar/paciente">
                <FiEdit size={28} />
              </Link>
              <Button variant="link" onClick={() => {}}>
                <FiTrash2 color="#ff0000" size={28} />
              </Button>
            </Col>
          </Row>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}
