/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: xxxxx
*/
import React from "react";
import Label from "../../../Components/ui/Label";
import InforMembers from "../../../Components/ui/InfoMembers";

function MemberInquiryData() {
  return (
    <>
      <Label
        etiqueta={"Member Inquiry"}
        bold={"bold"}
        color={"white"}
        tamanio={25}
        aling={"center"}
        col={12}
      />
      <div className={"row"}>
        <div className="col">
          <InforMembers title="Company" text="7" />
        </div>
        <div className="col">
          <InforMembers title="Scheme" text="New BPG" />
        </div>
        <div className="col">
          <InforMembers title="Application" text="12312312" />
        </div>
        <div className="col">
          <InforMembers title="Sale level" text="7" />
        </div>
      </div>
    </>
  );
}

export default MemberInquiryData;
