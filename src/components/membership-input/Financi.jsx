/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import {Modal,FinancingPromesis } from "../index";


export default function Financi(props) {
return (

    <form>
        <Modal
        title={"Financing promises"}
        component= {<FinancingPromesis/>}
        />
    </form>
);
}
