import React from "react";
import { Link } from "react-router-dom";
import { Navigation, CustomerData } from "../../components/index";
import Tabs from "../../components/tab/Tabs";

/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

const VerificacionDatos = () => {
  return (
    <div className="App">
      <div className="page">
        <header id="menubar" className="app-header menu-bar">
          <Navigation />
        </header>
        <section className="app-content">
          <main>
            <CustomerData />
            <article className="content-area">
              <Tabs />

              <div className="row col-12">{/*  */}</div>
              {/* <div className="d-flex justify-content-center m-2">
                <button className="btn btn-secundary col-2">Cancel</button>
                <Link to="/excelent" className="col-2">
                  <button className="btn btn-primary">Next</button>
                </Link>
              </div> */}
            </article>
          </main>
        </section>
      </div>
    </div>
  );
};

export default VerificacionDatos;
