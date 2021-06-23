/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import {
  Navigation,
  Header,
  CustomerResult,
} from "../../../../Components/index";


function AffiliationUtilityResult() {
  return (
    <div className="App">
      <div className="page">
        <header className="app-header menu-bar">
          <Navigation />
        </header>

        <section className="app-content">
          <Header title={"Reports"} icon={"fas fa-edit"} />

          <div className="d-flex align-items-center mt-5 pt-5">
            <CustomerResult />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AffiliationUtilityResult;
