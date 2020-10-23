import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import AsidePanelPacient from "../../components/AsidePanelPacient";
import Navigation from "../../components/Navbar";

export default function AgendamentoConsulta() {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <AsidePanelPacient />
          </Col>
          <Col md={8}>
            <div className="title">
              <h1>Agendamento de consulta</h1>
            </div>

            <div className="form-container">
              <Form onSubmit={() => {}} method="post">
                <fieldset>
                  <legend>
                    <strong>Dados do profissional</strong>
                  </legend>

                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="specialty">
                          Especialidade
                        </Form.Label>
                        <Form.Control
                          as="select"
                          name="specialty"
                          controlId="specialty"
                        >
                          <option value="cardiologista">Cardiologista</option>
                          <option value="ortopedista">Ortopedista</option>
                          <option value="pneumologista">Pneumologista</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="doctor-name">
                          Nome do médico
                        </Form.Label>
                        <Form.Control as="select" name="doctor" id="doctor">
                          <option value="1">Arthur Camurça</option>
                          <option value="2">Reinaldo Juvino</option>
                          <option value="3">Fábio</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </fieldset>

                <fieldset>
                  <legend>
                    <strong>Dados da consulta</strong>
                  </legend>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label htmlFor="date">Data</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          controlId="date"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label htmlFor="hour">Horário</Form.Label>
                        <Form.Control as="select" name="hour" controlId="hour">
                          <option value="700">7:00</option>
                          <option value="730">7:30</option>
                          <option value="800">8:00</option>
                          <option value="830">8:30</option>
                          <option value="900">9:00</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </fieldset>
                <div className="buttons">
                  <Button size="lg" variant="primary" type="submit">
                    Finalizar agendamento
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
