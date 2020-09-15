import React from "react";
import Navigation from "../../components/Navbar";
import AsidePanel from "../../components/AsidePanel";
import avatarIcon from "../../assets/icons/user.svg";
import "./styles.css";

export default function ProfissionalForm() {
  return (
    <>
      <Navigation />
      <div className="admin-dashboard">
       
          <div className="col-1">
            <AsidePanel />
          </div>

          <div className="col-2">
            <div className="container-title">
              <h1>Profissionais</h1>
            </div>
            <img id="avatarIcon" src={avatarIcon} alt="Avatar" />
            <form>
              <div className="container-cadastro">
                <label>Nome</label>
                <input type="text" />

                <label>Sobrenome</label>
                <input type="text" />

                <label>ID. PROF.</label>
                <input type="text"></input>

                <label>Profissão</label>
                <select>
                  <option>MÉDICO</option>
                  <option>FISIOTERAPEUTA</option>
                  <option>NUTRICIONISTA</option>
                </select>

                <label>Especialidades</label>
                <select multiple>
                  <option>CARDIOLOGISTA</option>
                  <option>PNEUMOLOGISTA</option>
                  <option>REUMATOLOGISTA</option>
                  <option>ORTOPEDISTA</option>
                  <option>OFTALMOLOGISTA</option>
                </select>

                <h3>Dados pessoais</h3>

                <label>Sexo</label>
                <select>
                  <option>Masculino</option>
                  <option>Feminino</option>
                </select>

                <label>Data de Nascimento</label>
                <input type="date" />

                <label>Telefone</label>
                <input type="text" />

                <label>CPF</label>
                <input type="text" />

                <label>Estado civil</label>
                <select>
                  <option>Solteiro(a)</option>
                  <option>Casado(a)</option>
                  <option>Divórciado(a)</option>
                  <option>Viúvo(a)</option>
                </select>

                <label>E-mail</label>
                <input type="email" />

                <h3 className="mt-4">Endereço</h3>

                <label>Rua</label>
                <input type="text" />

                <label>nº</label>
                <input min="0" type="number"></input>

                <label>Bairro</label>
                <input type="text" />

                <label>País</label>
                <select>
                  <option>Brasil</option>
                </select>

                <label>Estado</label>
                <select>
                  <option>Paraíba</option>
                  <option>Pernambuco</option>
                </select>

                <label>Cidade</label>
                <select>
                  <option>Patos</option>
                  <option>Piancó</option>
                </select>

                <button type="button">Voltar</button>
                <button type="submit">Salvar</button>
              </div>
            </form>
          </div>
        </div>
    </>
  );
}
