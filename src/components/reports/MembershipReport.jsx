
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React, { useState, useEffect } from 'react'
import { SimpleTable, Spinner2, Navigation, Header } from '../index';
import { Link } from 'react-router-dom'
import Download from '../ui/Download'

const MemebershipReport = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stayLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    stayLoading();
  }, []);


  const columns = [
    {
      title: 'Member Name',
      dataIndex: 'item',
      key: 'item',
      width: 400,
    },
    {
      title: <div className='btn-group'>
        <button className='btn btn-link'>
          <i className="fas fa-arrow-left"></i>
          <span>Back</span>
        </button>
        <button className='btn btn-link'>
          <i className="fas fa-print"></i>
        </button>
        <button className='btn btn-link'>
          <Download />
        </button>
      </div>,
      dataIndex: 'item2',
      key: 'item2',
      width: 660,
    },
  ];
  const data = [
    { item: 'Venta menos equity', item2: '$ 12,699.0' },
    { item: 'Tasa', item2: '0' },
    { item: 'Exchange', item2: '$ 0.00' },
    { item: 'Application', item2: '4053379' },
    { item: 'Rel application portofolio', item2: 'PRR' },
    { item: 'Rel application', item2: '1006731' },
    { item: 'Venta afilliation anterior', item2: '$ 15,000.00' },
    { item: 'Tour date rel application', item2: '30/04/2013' },
    { item: 'Monto NC', item2: '$ 0.00' },
    { item: 'Portafolio', item2: 'PER' },
    { item: 'Fecha de procesable', item2: '01/11/2020' },
    { item: 'SSN/SIN', item2: '531767167' },
    { item: 'CEBE', item2: 'CB3010012' },
    { item: 'Monto final', item2: '$ 0.00' },
    { item: 'Escrow', item2: '$ 18,809.70' },
    { item: 'Complemento de enganche', item2: '$ 0.00' },
    { item: 'Collect', item2: '18,809.70' },
    { item: 'Company', item2: '5' },
    { item: 'Application', item2: '4053379' },
    { item: 'Name', item2: 'John Doe' },
    { item: 'Sale type', item2: 'UR-UG RE' },
    { item: 'Nivel de membresia', item2: 'Jacuzzi Elite' },
    { item: 'Fecha de compra', item2: '01/11/2020' },
    { item: 'Importe de venta en USD', item2: '27,699.00' }
  ];
  return (
    <>
      { loading
        ? (
          <div className="container mt-5 pt-5">
            <div className="text-center mt-5 pt-5">
              <Spinner2
                title='Please Wait'
              />
            </div>
          </div>
        )

        : (<>
          <div className="App">
            <div id="page" className="page">
              <Navigation />
              <section className="app-content" id="content">
                <main className="registration-form">
                  <div className="container">
                    <Header title={"Reports"} icon={"fas fa-edit"} />
                    <div className='card'>
                      <div className='card-body'>
                        <SimpleTable columns={columns}
                          data={data}
                          type="table" />
                      </div>
                    </div>

                    <Link to="/reports/membership-reports/membership-result/saved">
                      <button className="btn btn-primary d-block">Siguiente</button>
                    </Link>
                  </div>
                </main>
              </section>
            </div>
          </div>
        </>
        )
      }
    </>

  )
}

export default MemebershipReport