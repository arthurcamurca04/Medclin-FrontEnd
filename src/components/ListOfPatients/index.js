import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  Pagination,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import refreshIcon from "../../assets/icons/refresh.svg";
import filterIcon from "../../assets/icons/filter.svg";
import avatarIcon from "../../assets/images/undraw_profile_pic_ic5t.svg";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import "./styles.css";

export default function ListOfPatients() {
  return (
    <Container fluid>
      <Row id="row-title">
        <Col md={10}>
          <div className="title">
            <h1>Pacientes</h1>
          </div>
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
                  <Col md={4}>
                    <Link to="/admin/atualizar/paciente">
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
                  <Col md={4}>
                    <Link to="/admin/atualizar/paciente">
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
        <Col>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>
        <Col className="d-flex justify-content-end">
          <Link id="link-add" to="/admin/cadastrar/paciente">
            <strong>
              <FiPlus /> Adicionar
            </strong>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
