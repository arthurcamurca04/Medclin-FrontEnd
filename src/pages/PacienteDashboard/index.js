import React from "react";
import Navigation from "../../components/Navbar";
import AsidePanelPacient from "../../components/AsidePanelPacient";
import FormPatient from "../../components/PatientsForm";
import './styles.css';

export default function PacientDashboard() {
  return (
    <>
      <Navigation />
      <div className="paciente-dashboard">
        <div className="col-1">
          <AsidePanelPacient />
        </div>

        <div className="col-2">
          <h1>Pacientes</h1>

          <div className="form-container">
            <FormPatient/>
          </div>
        </div>
      </div>
    </>
  );
}
