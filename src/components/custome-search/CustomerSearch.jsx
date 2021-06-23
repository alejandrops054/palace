/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React, {Fragment, useState, useEffect} from "react";
import {Link} from 'react-router-dom'

import {
  Navigation,
  Header,
  CustomerResult,
  Search,
  Spinner2
} from "../index";

const CustomerSearch = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const stayLoading = () => {
          setTimeout(() => {
              setLoading(false);
          }, 1000);
      }
      stayLoading();
  }, []);


  return (
    <Fragment>
    {
      loading
        ? (  <div className="container mt-5 pt-5">
                <div className="text-center mt-5 pt-5">
                    <Spinner2
                      title='Please Wait'
                    />
                </div>
            </div>
          )

        : (
            <div className="App">
              <div className="page">
                <header className="app-header menu-bar">
                <Navigation />
                </header>
                <section className="app-content">
                  <Header title={"Reports"} icon={"fas fa-edit"} />
                  <div className="d-flex align-items-center mt-5 pt-5">
                    <h2 className="mt-5 mb-5">Memberships report for...</h2>
                    <Search col="4" />
                  
                  </div>
                  <Link to='/reports/membership-reports/membership-result'>
                    <CustomerResult />
                  </Link>
                </section>
              </div>
            </div>
          )

    }
    </Fragment>

  );

};

export default CustomerSearch;


