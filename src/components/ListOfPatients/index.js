import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Pagination,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import filterIcon from "../../assets/icons/filter.svg";
import CardPatient from "../CardPatient";
import { FiRefreshCw, FiUserPlus } from "react-icons/fi";
import "./styles.css";

export default function ListOfPatients() {
  return (
    <Container fluid>
      <Row className="align-items-md-center justify-content-md-center">
        <Col md={11}>
          <div className="title">
            <h1>Pacientes</h1>
          </div>
        </Col>
        <Col md={1}>
          <Link to="/admin/dashboard">
            <FiRefreshCw size={28} />
          </Link>
        </Col>
      </Row>

      <Row className="m-3">
        <img id="filterIcon" src={filterIcon} alt="Filtro" />
        <Col md={6}>
          <Form>
            <Form.Control type="text" placeholder="Filtrar" />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
         <CardPatient/>
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
              <FiUserPlus size={28} /></strong>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
