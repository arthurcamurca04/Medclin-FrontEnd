import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";
import ProfissionalsList from "../pages/ProfessionaisList";
import PacientDashboard from "../pages/PacienteDashboard";
import ComorbitiesScreen from "../pages/Comorbities";
import ProfessionalForm from "../pages/ProfessionalsForm";
import ProfessionalFormUpdate from "../pages/ProfessionalsFormUpdate";
import UsersForm from "../pages/UsersForm";
import AgendamentoConsulta from "../pages/AgendamentoConsulta";
import StoreProvider from "../Store/Provider";
import RoutesPrivate from "./Private";
import NotFound from "../pages/NotFound/NotFound";

function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <StoreProvider>
          <Switch>
            <RoutesPrivate exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <RoutesPrivate path="/admin/dashboard" component={AdminDashboard} />
            <RoutesPrivate path="/admin/medicos" component={ProfissionalsList} />
            <RoutesPrivate path="/paciente/perfil" component={PacientDashboard} />
            <RoutesPrivate path="/paciente/comorbidades" component={ComorbitiesScreen} />
            <RoutesPrivate path="/paciente/consultas/agendar" component={AgendamentoConsulta} />
            <RoutesPrivate
              path="/admin/cadastrar/profissional"
              component={ProfessionalForm}
            />
            <RoutesPrivate
              path="/admin/atualizar/profissional"
              component={ProfessionalFormUpdate}
            />
            <Route path="/pacientes/formulario" component={UsersForm} />
            <Route component={NotFound} />
          </Switch>
        </StoreProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
