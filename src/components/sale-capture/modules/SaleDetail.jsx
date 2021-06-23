/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React,{ useState, useEffect } from "react";
import { useSelect } from '../../../hooks/index'
import { Input } from '../../index'
const SaleDetail = ({setSaleDetailInformation}) => {

  const options1 = [
    { label: "New Sale", option: "New Sale" },
    { label: "Select a program", option: "Select a program" },
    { label: "Select a subprogram", option: "Select a subprogram" },
    { label: "", option: "" },
    { label: "", option: "" },
    { label: "", option: "" }
  ]

// const [localState, setstate] = useState({});

const [Typeofsale, SelectTypeofsale] = useSelect('Type of sale', '', options1)
const [Program, SelectProgram] = useSelect('Program', '', options1)
const [Subprogram, SelectSubprogram] = useSelect('Subprogram', '', options1)
const [Previusmembership, SelectPreviusmembership] = useSelect('Previus membership', '', options1)
const [Pricelevel, SelectPricelevel] = useSelect('Price level', '', options1)
const [PricelevelNS, SelectPricelevelNS] = useSelect('Price level (NS)', '', options1, '/newsociopromisses')


useEffect(() => {
  setSaleDetailInformation({
    Typeofsale,
    Program,
    Subprogram,
    Previusmembership,
    Pricelevel,
    PricelevelNS,
    
    });
    
},[Typeofsale, Program, Subprogram, Previusmembership, Pricelevel, PricelevelNS]);

  return (
    <form>
        <h3>Sale detail</h3>
        <div className="row d-flex">
          <div className='col'>
            <SelectTypeofsale/>
            <SelectSubprogram/>
            <SelectPricelevel/>
          </div>
          <div className='col'>
              <SelectProgram/>
              <SelectPreviusmembership/>
              <Input
                    icon="fas fa-plus"
                    type="text"
                    label="Price Level (NS)"
                    placeholder=""
                    col={12}
                    name="priceLevelNS"
                    url="/newsociopromisses"
                    value={SelectPricelevelNS}
                  />         
          </div>  
        </div>
    </form>
  );
};

export default SaleDetail;
