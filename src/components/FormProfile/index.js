import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, Row, Form } from "react-bootstrap";
import avatarIcon from "../../assets/images/undraw_profile_pic_ic5t.svg";
import "./styles.css";

export default function FormProfile() {
  const { goBack } = useHistory();
  return (
    <div className="form-container">
      <Form onSubmit={() => {}}>
        <fieldset>
          <Row>
            <Col md={6}>
              <Form.Group className="name">
                <Form.Label htmlFor="name">Nome completo</Form.Label>
                <Form.Control
                  type="text"
                  controlId="name"
                  name="name"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="avatarIcon">
              <img id="avatarIcon" src={avatarIcon} alt="Avatar" />
            </Col>
          </Row>
        </fieldset>

        <fieldset>
          <legend>
            <strong>Dados pessoais</strong>
          </legend>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label htmlFor="gender">Sexo</Form.Label>
                <Form.Control required as="select" name="gender" id="gender">
                  <option>Masculino</option>
                  <option>Feminino</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label htmlFor="birthday">Data de Nascimento</Form.Label>
                <Form.Control
                  name="birthday"
                  controlId="birthday"
                  type="date"
                  required
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label htmlFor="phone">Telefone</Form.Label>
                <Form.Control
                  name="phone"
                  controlId="phone"
                  type="text"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label htmlFor="cpf">CPF</Form.Label>
                <Form.Control
                  name="cpf"
                  controlId="cpf"
                  type="text"
                  required
                />
              </Form.Group>
            </Col>

            <Col>
            <Form.Group>
              <Form.Label htmlFor="civil-state">Estado civil</Form.Label>
              <Form.Control
                as="select"
                name="civil-state"
                controlId="civil-state"
                required
              >
                <option>Solteiro(a)</option>
                <option>Casado(a)</option>
                <option>Divórciado(a)</option>
                <option>Viúvo(a)</option>
              </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
              <Form.Label htmlFor="email">E-mail</Form.Label>
              <Form.Control
                name="email"
                controlId="email"
                type="email"
                required
              />
              </Form.Group>
            </Col>
          </Row>
        </fieldset>

        <fieldset>
          <legend><strong>Endereço</strong></legend>
          <Row>
            <Col>
              <Form.Group>
              <Form.Label>Rua</Form.Label>
              <Form.Control type="text" required />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
              <Form.Label>nº</Form.Label>
              <Form.Control required min="0" type="number" />
              </Form.Group>
            </Col>

            <Col>
            <Form.Group>
              <Form.Label>Bairro</Form.Label>
              <Form.Control required name="neighborhood" controlId="neighborhood" type="text" />
              </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col>
              <Form.Group>
              <Form.Label htmlFor="country">País</Form.Label>
              <Form.Control required as="select" controlId="country" name="country">
                <option>Brasil</option>
              </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
              <Form.Label htmlFor="state">Estado</Form.Label>
              <Form.Control required as="select" controlId="state" name="state">
                <option>Paraíba</option>
              </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
              <Form.Label htmlFor="city">Cidade</Form.Label>
              <Form.Control required as="select" controlId="city" name="city">
                <option>Patos</option>
              </Form.Control>
              </Form.Group>
            </Col>
          </Row>
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
          <Button className="ml-4" variant="primary" size="lg" type="submit">
            Salvar
          </Button>
        </div>
      </Form>
    </div>
  );
}
