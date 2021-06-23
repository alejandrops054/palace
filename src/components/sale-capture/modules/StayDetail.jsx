/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React,{ useState, useEffect } from "react";
import Select from "../../ui/Select";
import Checkbox from "../../ui/Checkbox";
import { useSelect } from '../../../hooks/index'
import { DialogContent } from "@material-ui/core";
import EliteProductsInfo from "../../elite-products/EliteProductsInfo";


const StayDetail = ({setEliteProductsInformation}) => {

  const selectOptions = [
    { name: '0', value: '0'},
    { name: '1', value: '1'},
    { name: '2', value: '2'},
]

// const [localState, setstate] = useState({});

const [Totalweeks, SelectTotalweeks] = useSelect('Total weeks', '', selectOptions)
const [Eliteweek, SelectEliteweek] = useSelect('Elite week', '', selectOptions)
const [Nights, SelectNights] = useSelect('Nights ( % )', '', selectOptions)
const [Expiration, SelectExpiration] = useSelect('Expiration', '', selectOptions)
const [Elitenights, SelectElitenights] = useSelect('Elite nights', '', selectOptions)
const [OptiontoUGUA, SelectOptiontoUGUA] = useSelect('Option to UG-UA', '', selectOptions)
const [CatalogExtension, SelectCatalogExtension] = useSelect('Catalog Extension', '', selectOptions)
const [RCvalidity, SelectRCvalidity] = useSelect('R-C Validity', '', selectOptions)


useEffect(() => {
  setEliteProductsInformation({
    Totalweeks,
    Eliteweek,
    Nights,
    Expiration,
    Elitenights,
    OptiontoUGUA,
    CatalogExtension,
    RCvalidity,
    
    });
},[Totalweeks, Eliteweek, Nights, Expiration, Elitenights, OptiontoUGUA, CatalogExtension]);

  const checkboxes = ["Extension", "Personal name", "Application test"];

  return (
    <form className="mb-6">
      <h3>Stay details</h3>
        <div className="row">
          <div className='col-3'>
            <SelectTotalweeks/>
          </div>
          <div className='col-3'>
            <SelectNights/>
          </div>
          <div className='col-3'>
            <SelectEliteweek/>
          </div>
          <div className='col-3'>
            <SelectElitenights/>
          </div>
          <div className="col-lg-9 ">
            {checkboxes.map((checkbox) => (
              <Checkbox key={checkbox} name={checkbox} label={checkbox} />
            ))}
          </div>
          <div className='col-3'>
            <EliteProductsInfo/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className='col'>
            <SelectExpiration/>
          </div>
          <div className='col'>
            <SelectOptiontoUGUA/>
          </div>
          <div className='col'>
            <SelectCatalogExtension/>
          </div>
          <div className='col'>
            <SelectRCvalidity/>
          </div>
      </div>
    </form>
  );
};

export default StayDetail;
