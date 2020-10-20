import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import AsidePanelPacient from "../../components/AsidePanelPacient";
import Navigation from "../../components/Navbar";
import "./styles.css";

export default function ComorbitiesScreen() {
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
              <h1>Meu perfil</h1>
            </div>

            <div className="form-container">
              <Form onSubmit={() => {}}>
                <fieldset>
                  <legend>
                    <strong>Comorbidades</strong>
                  </legend>

                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Pressão alta"
                          controlId="comorbities"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Button variant="primary">
                        <FiPlus color="#fff" />
                      </Button>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Control
                          as="select"
                          multiple
                          disabled
                          name="comorbities"
                          controlId="comorbities"
                        >
                          <option value="alergia">Alergia</option>
                          <option value="asma">Asma</option>
                          <option value="diabetes">Diabetes</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </fieldset>

                <fieldset>
                  <legend>
                    <strong>Anotações</strong>
                  </legend>

                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          name="annotations"
                          controlId="annotations"
                          rows="10"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </fieldset>

                <div className="buttons">
                  <Button type="submit" variant="primary" size="lg">
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
