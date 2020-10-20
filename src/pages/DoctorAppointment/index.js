import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import AsidePanelPacient from "../../components/AsidePanelPacient";
import Navigation from "../../components/Navbar";

export default function DoctorAppointment() {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <AsidePanelPacient />
          </Col>
          <Col>
            <div className="title">
              <h1>Consulta</h1>
            </div>

            <div className="form-container">
              <Form onSubmit={() => {}} method="post">
                <fieldset>
                  <legend>
                    <strong>Dados da consulta</strong>
                  </legend>              
                    <Row className="mt-4">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label htmlFor="doctor-name">
                            Nome do paciente
                          </Form.Label>
                          <Form.Control as="select" name="pacient" id="pacient">
                            <option value="1">Arthur Camurça</option>
                            <option value="2">Reinaldo Juvino</option>
                            <option value="3">Fábio</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label htmlFor="date">Data</Form.Label>
                          <Form.Control
                            type="date"
                            name="date"
                            controlId="date"
                          />
                        </Form.Group>
                      </Col>
                    </Row>           

                  <Form.Group>
                    <Form.Label htmlFor="date">Exames</Form.Label>
                    <Form.Control type="text" name="tests" controlId="tests" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label htmlFor="date">Remédios</Form.Label>
                    <Form.Control
                      type="text"
                      name="medicines"
                      controlId="medicines"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label htmlFor="annotations">Anotações</Form.Label>
                    <FormControl
                      as="textarea"
                      rows="4"
                      name="annotations"
                      controlId="annotations"
                    ></FormControl>
                  </Form.Group>
                </fieldset>
                <div className="buttons">
                  <Button size="lg" variant="primary" type="submit">
                    Salvar
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
