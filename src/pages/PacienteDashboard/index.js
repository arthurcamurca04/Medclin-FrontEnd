import React from "react";
import Navigation from "../../components/Navbar";
import AsidePanelPacient from "../../components/AsidePanelPacient";
import avatarIcon from "../../assets/icons/user.svg";
import './styles.css';

export default function PacientDashboard() {
  return (
    <>
      <Navigation />
      <div className="admin-dashboard">
        <div className="col-1">
          <AsidePanelPacient />
        </div>

        <div className="col-2">
          <h1>Pacientes</h1>

          <div className="form-container">
            <form method="post">
              <fieldset>
                <div className="fieldset-pacient">
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
                  <div className="avatarIcon">
                    <img id="avatarIcon" src={avatarIcon} alt="Avatar" />
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
                <button className="button button-back" type="button">
                  Voltar
                </button>
                <button className="button button-save" type="submit">
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
