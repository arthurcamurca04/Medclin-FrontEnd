import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiPlus } from "react-icons/fi"
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
              <h1>Seu perfil</h1>
            </div>

            <div className="form-container">
              <h3>Comorbidades</h3>
              <form method="post">
                <div className="add-comorbity">
                  <input
                    className="input"
                    type="text"
                    placeholder="Pressão alta"
                    required
                  />
                  <Button className="bg-light" type="button"><FiPlus/></Button>
                </div>

                <select
                  className="input"
                  multiple
                  disabled
                  name="comorbities"
                  id="comorbities"
                >
                  <option value="alergia">Alergia</option>
                  <option value="asma">Asma</option>
                  <option value="diabetes">Diabetes</option>
                </select>

                <h3>Anotações</h3>

                <textarea
                  className="input"
                  name="annotations"
                  id="annotations"
                  cols="30"
                  rows="10"
                ></textarea>

                <div className="buttons">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"                  >
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
