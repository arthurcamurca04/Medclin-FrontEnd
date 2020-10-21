import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";
import ProfissionalsList from "../pages/ProfessionaisList";
import PatientsList from "../pages/PatientsList";
import PacientProfile from "../pages/PacientProfile";
import DoctorProfile from "../pages/DoctorProfile";
import DoctorAppointment from "../pages/DoctorAppointment";
import ComorbitiesScreen from "../pages/Comorbities";
import ProfessionalForm from "../pages/ProfessionalsForm";
import PatientForm from "../pages/PatientsForm";
import ProfessionalFormUpdate from "../pages/ProfessionalsFormUpdate";
import SignupUsers from "../pages/SignupUsers";
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

            {/* Rotas públicas */}
            <Route path="/login" component={Login} />
            <Route path="/pacientes/cadastro" component={SignupUsers} />
            
             {/* Rotas privadas - admin */}
            <RoutesPrivate exact path="/" component={Dashboard} />
            <RoutesPrivate path="/admin/dashboard" component={AdminDashboard} />
            <RoutesPrivate path="/admin/medicos" component={ProfissionalsList} />
            <RoutesPrivate path="/admin/pacientes" component={PatientsList} />
            <RoutesPrivate path="/admin/cadastrar/profissional" component={ProfessionalForm}/>
            <RoutesPrivate path="/admin/cadastrar/paciente" component={PatientForm}/>
            <RoutesPrivate path="/admin/atualizar/paciente" component={PatientForm}/>
            <RoutesPrivate path="/admin/atualizar/profissional" component={ProfessionalFormUpdate}/>
            
             {/* Rotas privadas - pacientes */}
            <RoutesPrivate path="/paciente/perfil" component={PacientProfile} />
            <RoutesPrivate path="/paciente/comorbidades" component={ComorbitiesScreen} />
            <RoutesPrivate path="/paciente/consultas/agendar" component={AgendamentoConsulta} />
            
             {/* Rotas privadas - médicos */}
            <RoutesPrivate path="/medicos/perfil" component={DoctorProfile} />
            <RoutesPrivate path="/medicos/consultas" component={DoctorAppointment} />
          
            <Route component={NotFound} />
          </Switch>
        </StoreProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
