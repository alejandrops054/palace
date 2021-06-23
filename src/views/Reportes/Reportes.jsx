/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React  from "react";
import {
  Navigation,
  Header,
} from "../../components/index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import AffiliationUtility from "./modules/affiliation-utility/AffiliationUtility";
//import MemberReportsFor from "./modules/MemberReportsFor";

const Reportes = () => {
  let match = useRouteMatch();
  return (
    <div className="App container">
      <div className="page">
        <header id="menubar" className="app-header menu-bar">
          <Navigation />
        </header>

        <section className="app-content">
          <Header title={"Reports"} icon={"fas fa-paste"} />

          <main>
            <Router>
              <Switch>
                <Route
                  exact
                  path={`${match.url}`}
                 
                />
             
                <Route
                  exact
                  path={`${match.path}/affiliation`}
                  component={AffiliationUtility}
                />
              </Switch>
            </Router>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Reportes;
