import React, {useState} from 'react'
import {SaleDetail, FinancingDetail, StayDetail } from '../../../components/index'

const SaleCaptureView = () => {
    /*Estado de la vista que se enviara por Redux*/
    const [state, setstate] = useState({})

    /*Estados de cada vista que se combinaran para el estado principal que se envía por Redux*/
    const [saleDetail, setSaleDetailInformation] = useState({});
    const [financingDetail, setFinancingDetailInformation] = useState({});
    const [eliteProductsDetails, setEliteProductsInformation] = useState({});
    
    return (
        <>
      <div className="m-1 mb-4">
        <div className="card">
          <div className="card-body">
            <SaleDetail setSaleDetailInformation={setSaleDetailInformation} />
          </div>
        </div>
      </div>
      <div className="m-1 mb-4">
        <div className="card">
          <div className="card-body">
            <FinancingDetail setFinancingDetailInformation={setFinancingDetailInformation} />
          </div>
        </div>
      </div>
      <div className="m-1 mb-4">
        <div className="card">
          <div className="card-body">
            <StayDetail setEliteProductsInformation={setEliteProductsInformation}/>
          </div>
        </div>
      </div>
    </>
    )
}

export default SaleCaptureView
