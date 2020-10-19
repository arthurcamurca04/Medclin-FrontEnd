import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
          <Col >
            <div className="title">
              <h1>Agendamento</h1>
            </div>

            <div className="form-container">
              <form onSubmit={() => {}} method="post">
                <fieldset>
                  <legend>Dados do profissional</legend>

                  <label htmlFor="specialty">Especialidade</label>
                  <select className="input" name="specialty" id="specialty">
                    <option value="cardiologista">Cardiologista</option>
                    <option value="ortopedista">Ortopedista</option>
                    <option value="pneumologista">Pneumologista</option>
                  </select>

                  <label htmlFor="doctor-name">Nome do médico</label>
                  <select className="input" name="doctor-name" id="doctor-name">
                    <option value="1">Arthur Camurça</option>
                    <option value="2">Reinaldo Juvino</option>
                    <option value="3">Fábio</option>
                  </select>
                </fieldset>

                <fieldset>
                  <legend>Dados da consulta</legend>

                  <label htmlFor="date">Data</label>
                  <input className="input" type="date" name="date" id="date" />

                  <legend>Horário</legend>

                  <select multiple className="input" name="hour" id="hour">
                    <option value="700">7:00</option>
                    <option value="730">7:30</option>
                    <option value="800">8:00</option>
                    <option value="830">8:30</option>
                    <option value="900">9:00</option>
                  </select>
                </fieldset>
                <div className="buttons">
                  <Button
                    size="lg"
                    variant="primary"
                    type="submit"
                  >
                    Finalizar agendamento
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
