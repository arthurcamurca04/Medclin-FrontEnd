import React from "react";
import AsidePanelPacient from "../../components/AsidePanelPacient";
import Navigation from "../../components/Navbar";
import './styles.css'

export default function ComorbitiesScreen() {
  return (
    <>
      <Navigation />

      <div className="paciente-dashboard">
        <div className="col-1">
          <AsidePanelPacient />
        </div>

        <div className="col-2">
          <h1>Seu perfil</h1>

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
                <button type="button">
                    +
                </button>
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

              <button type="submit" className="buttons button button-save">
                Salvar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
