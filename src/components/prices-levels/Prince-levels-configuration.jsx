/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from "react";
import {Input, Select, Checkbox} from "../index";
import RoomTypesAccessTable from '../hotels/RoomTypesAccessTable'

const PrinceLevelsConfiguration = () =>{

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Input type="text" label="Id" col={12} placeholder="" />
                </div>
                <div className="col-md-4">
                    <Select label="Status" options="Alta" col={12}/>
                </div>
                <div className="col-md-4">
                    <Input type="text" label="Membership validty" col={12} placeholder="" />
                </div>
                <div className="col-md-6">
                    <Select label="Programs" options="DIAMOND EXPOERIENCE" col={12}/>
                    <Select label="Project" options="PALACE ELITE" col={12}/>
                </div>
                <div className="col-md-6">
                    <Input type="text" label="Base Commissionable" col={12} placeholder="" />
                    <Input type="text" label="Membership minium price" col={12} placeholder="" />
                </div>
                <div className="col-md-4">
                    <Select label="Coin" options="US" col={12}/>
                    <Input type="text" label="Code access hotels" col={12} placeholder="" />
                    <Input type="text" label="Access code golf" col={12} placeholder="" />
                    <Input type="text" label="Code Promotion" col={12} placeholder="" />
                </div>
                <div className="col-md-4">
                    <Select label="Level Enum" options="Diamond Elite" col={12}/>
                    <Select label="." options="STANDARD SUIITE" col={12}/>
                    <Select label="." options="" col={12}/>
                    <Select label="." options="Experiencia Diamante" col={12}/>
                </div>
                <div className="col-md-4">
                    <Input type="text" label="Membership Maximum price" col={12} placeholder="" />
                    <Input type="text" label="Incetive Week" col={12} placeholder="" />
                    <Checkbox label="Limited Access" col={12}/>
                    <Input type="text" label="Code type Sale" col={12} placeholder="" />
                </div>
            </div>
            <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        // className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}>
                        Room Type Access 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        // className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}>
                        Addmin free & Minimum Floor
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        // className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('3'); }}>
                        Pack Elite
                    </NavLink>
                </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              {/*aqui va el componente */}
              <RoomTypesAccessTable/>
            </TabPane>
            <TabPane tabId="2">
              {/*aqui va el componente */}
 
            </TabPane>
            <TabPane tabId="3">
              {/*aqui va el componente */}
            </TabPane>
          </TabContent>
          </div>
        </div>
        </>
    )
}

export default PrinceLevelsConfiguration