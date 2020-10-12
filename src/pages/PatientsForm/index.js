import React from "react";
import Navigation from "../../components/Navbar";
import AsidePanel from "../../components/AsidePanel";
import FormPatient from "../../components/PatientsForm";
import "./styles.css";

export default function PatientForm() {
  return (
    <>
      <Navigation />
      <div className="admin-dashboard">
        <div className="col-1">
          <AsidePanel />
        </div>

        <div className="col-2">
          <div className="title">
            <h1>Paciente</h1>
          </div>
          <div className="form-container">
            <FormPatient/>
          </div>
        </div>
      </div>
    </>
  );
}
