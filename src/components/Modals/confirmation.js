import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalConfirmation() {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Atenção</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Tem certeza que deseja excluir?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger">Cancelar</Button>
        <Button variant="success">OK</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
