import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navigation from "../../components/Navbar";
import AsidePanel from "../../components/AsidePanel";
import avatarIcon from "../../assets/images/undraw_profile_pic_ic5t.svg";
import "./styles.css";

export default function ProfissionalForm() {
  const { goBack } = useHistory();
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <AsidePanel />
          </Col>

          <Col >
            <div className="title">
              <h1>Profissionais</h1>
            </div>
            <div className="form-container">
              <form onSubmit={() => {}} method="post">
                <fieldset>
                  <div className="fieldset-1">
                    <div>
                      <img id="avatarIcon" src={avatarIcon} alt="Avatar" />
                    </div>
                    <div className="name">
                      <label htmlFor="name">Nome completo</label>
                      <input
                        className="input"
                        type="text"
                        id="name"
                        name="name"
                        required
                      />
                    </div>

                    <div className="profissional-data">
                      <div>
                        <label htmlFor="crm">CRM</label>
                        <input
                          className="input"
                          type="text"
                          id="crm"
                          name="crm"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="specialties">Especialidades</label>
                        <select
                          className="input"
                          name="specialties"
                          id="specialties"
                          multiple
                          required
                        >
                          <option>CARDIOLOGISTA</option>
                          <option>PNEUMOLOGISTA</option>
                          <option>REUMATOLOGISTA</option>
                          <option>ORTOPEDISTA</option>
                          <option>OFTALMOLOGISTA</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Dados pessoais</legend>
                  <div className="fieldset-2">
                    <div>
                      <label htmlFor="gender">Sexo</label>
                      <select
                        required
                        className="input"
                        name="gender"
                        id="gender"
                      >
                        <option>Masculino</option>
                        <option>Feminino</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="birthday">Data de Nascimento</label>
                      <input
                        className="input"
                        name="birthday"
                        id="birthday"
                        type="date"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone">Telefone</label>
                      <input
                        className="input"
                        name="phone"
                        id="phone"
                        type="text"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="cpf">CPF</label>
                      <input
                        className="input"
                        name="cpf"
                        id="cpf"
                        type="text"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="civil-state">Estado civil</label>
                      <select
                        className="input"
                        name="civil-state"
                        id="civil-state"
                        required
                      >
                        <option>Solteiro(a)</option>
                        <option>Casado(a)</option>
                        <option>Divórciado(a)</option>
                        <option>Viúvo(a)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="email">E-mail</label>
                      <input
                        className="input"
                        name="email"
                        id="email"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Endereço</legend>
                  <div className="fieldset-3">
                    <div>
                      <label>Rua</label>
                      <input className="input" type="text" required />
                    </div>

                    <div>
                      <label>nº</label>
                      <input required className="input" min="0" type="number" />
                    </div>

                    <div>
                      <label>Bairro</label>
                      <input className="input" type="text" required />
                    </div>

                    <div>
                      <label>País</label>
                      <select required className="input">
                        <option>Brasil</option>
                      </select>
                    </div>

                    <div>
                      <label>Estado</label>
                      <select required className="input">
                        <option>Paraíba</option>
                        <option>Pernambuco</option>
                      </select>
                    </div>

                    <div>
                      <label>Cidade</label>
                      <select required className="input">
                        <option>Patos</option>
                        <option>Piancó</option>
                      </select>
                    </div>
                  </div>
                </fieldset>

                <div className="buttons">
                  <Button
                    onClick={() => goBack()}
                    variant="success"
                    size="lg"
                    type="button"
                  >
                    Voltar
                  </Button>
                  <Button
                    className="ml-4"
                    variant="primary"
                    size="lg"
                    type="submit"
                  >
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
