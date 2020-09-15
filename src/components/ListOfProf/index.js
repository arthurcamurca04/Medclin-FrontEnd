import React from "react";
import { Container, Row, Col, Form, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import refreshIcon from "../../assets/icons/refresh.svg";
import filterIcon from "../../assets/icons/filter.svg";
import avatarIcon from "../../assets/icons/user.svg";
import { HiOutlinePencilAlt, HiOutlinePlusCircle } from 'react-icons/hi';
import './styles.css';

export default function ListOfProfessionals() {
  return (
    <Container fluid>
      <Row id="row-title">
        <Col md={10}>
          <h3>
            <strong>Lista de Profissionais</strong>
          </h3>
        </Col>
        <Col md={2}>
          <Link to="/admin/dashboard">
            <img id="refreshIcon" src={refreshIcon} alt="Atualizar" />
          </Link>
        </Col>
      </Row>

      <Row className="m-3">
        <img id="filterIcon" src={filterIcon} alt="Filtro" />
        <Col md={4}>
          <Form>
            <Form.Control type="text" placeholder="Filtrar" />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup as="ul">
            <ListGroup.Item as="li" className="mb-2">
              <div className="list-item">
                <Row>
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
                      <HiOutlinePencilAlt fontSize="32" />
                    </Link>
                  </Col>
                </Row>
              </div>
            </ListGroup.Item>

            <ListGroup.Item as="li" className="mb-2">
              <div>
                <Row>
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
                      <HiOutlinePencilAlt fontSize="32" />
                    </Link>
                  </Col>
                </Row>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-end">
          <Link id="link-add" to="/admin/cadastrar/profissional">
            <strong>
              <HiOutlinePlusCircle fontSize="28" /> Adicionar
            </strong>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
