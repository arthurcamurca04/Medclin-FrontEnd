import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import usersFormIcon from "../../assets/images/undraw_medical_care_movn.svg";
import "./styles.css";

export default function UsersForm() {
  return (
    <Container>
      <Row>
        <Col className="text-center" md={6}>
          <img id="user-form-icon" src={usersFormIcon} alt="Médicos" />
        </Col>
        <Col md={6}>
          <Form className="p-4 ">
            <h1 className="title-form">Faça seu cadastro</h1>
            <h4 className="subtitle-form">Venha cuidar da sua saúde</h4>

            <Form.Group controlId="formForName">
              <Form.Label htmlFor="name">Nome completo</Form.Label>
              <Form.Control required type="text" name="name" controlId="name"/>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formForCpf">
                <Form.Label htmlFor="cpf">CPF</Form.Label>
                <Form.Control required type="text" name="cpf" controlId="cpf"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formForBirthday">
                <Form.Label htmlFor="birthday">Data de nascimento</Form.Label>
                <Form.Control required type="date" name="birthday" controlId="birthday"/>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formForEmail">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control required type="email" name="email" controlId="email"/>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formForPass">
                <Form.Label htmlFor="password">Senha</Form.Label>
                <Form.Control required type="password" name="password" controlId="password"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formForConfirmPas">
                <Form.Label htmlFor="confirm-password">Confirmar senha</Form.Label>
                <Form.Control required type="password" name="confirm-password" controlId="confirm-password"/>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formForAddress">
              <Form.Label htmlFor="address">Endereço</Form.Label>
              <Form.Control required type="text" name="address" controlId="address"/>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formForState">
                <Form.Label htmlFor="state">Estado</Form.Label>
                <Form.Control as="select"  name="address" controlId="address">
                  <option value="paraiba">Paraíba</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formForCity">
                <Form.Label htmlFor="city">Cidade</Form.Label>
                <Form.Control as="select"  name="city" controlId="city">
                  <option value="patos">Patos</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formForNeighbor">
                <Form.Label htmlFor="neightboor">Bairro</Form.Label>
                <Form.Control required type="text"  name="neightboor" controlId="neightboor"/>
              </Form.Group>
            </Form.Row>

            <Button
              block
              size="lg"
              variant="primary"
              className="mt-4"
              type="submit"
            >
              Finalizar cadastro
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
