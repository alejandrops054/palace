import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Panel, AddMember, CustomerSearch, BeneficiariesModal, CreditCard } from './components/index'
import ReportsRoutes from './routes/ReportsRoutes'
import DocumentsRoutes from './routes/DocumentsRoutes'
import ComponentesUI from './views/ComponentesUI'
//Pruebas Live share
import MasterPageAddMember from './views/New-Member/MasterPageAddMember'

import NewProvision from './views/New-Member/NewProvision'
import NewSocioPromisses from './components/nuevo-socio-promisses/NuevoSocioPromisses'
import MemberInquiry from './components/member-inquiry/MemberInquiry'
import {MemberResume} from './components/index'


import ProvisionsBenefits from './components/provisions/Provisions'
import RoomTypesAccess from './components/member-typeaccess/RoomTypesAccess'
import VatRateGuestInformation from './components/guest-information/VatRateGuestInformation'
import VerificacionDatos from './views/Verificacion-Datos/VerificacionDatos'
import members from './components/members/members'
import Usuario from './components/users/Usuario'
import { Provider } from 'react-redux';
import store from './redux2/store';
import ColorEdit from './components/color-editor/ColorEdit'

function App() {
  return (
    <Router>
      <Provider store = { store }>
        <Switch>

          {/* Pruebas live share*/}
          <Route path='/newsociopromisses' component={NewSocioPromisses} />
          <Route exact path='/NewProvision' component={NewProvision} />
          <Router path="/promises" component={MemberInquiry} />
          <Route exact path="/Provisions" component={ProvisionsBenefits}/>
          <Route path='/VatRateGuestInformation' component={VatRateGuestInformation}/>
          <Route path='/RoomTypesAccess' component={RoomTypesAccess}/>
          {/*  */}
          <Route path="/member-resume" component={MemberResume} />
          <Route path="/note-beneficiaries" component={BeneficiariesModal} />
          <Route path="/verification" component={VerificacionDatos} />
          <Route path="/members" component={members} />
          <Route path="/Usuario" component={Usuario} />

          <Route exact path='/' component={Login} />
          <Route exact path='/panel' component={Panel} />
          <Route exact path='/new-member' component={MasterPageAddMember} />


          <Route path='/reports' component={ReportsRoutes} />
          <Route path='/documents' component={DocumentsRoutes} />
          <Route exact path='/reports/customer' component={CustomerSearch} />
          <Route exact path='/componentesui' component={ComponentesUI} />
          <Route exact path='/color-editor' component={ColorEdit}/>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
