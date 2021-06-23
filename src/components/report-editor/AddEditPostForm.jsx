/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/


import React from "react";
import { Button, EditorComponent } from "../index";


export default function AddEditPostForm() {
  return (
    <>
      <AddEditForm />
    </>
  );
}

function AddEditForm(props) {
  return (
    <div className="container">
      <EditorComponent height={500} menubar={true} col={9} />
      <br></br>

      <div className="col-lg-9 mb-3">
        <div className="container">
          <div className="row justify-content-md-right">
            <div className="col-6"></div>

            <div className="col">
              <Button icon={"fas fa-times"} typebootstrap="secondary" col={12} style={{width:'100%'}}/>
            </div>
            <div className="col">
              <Button icon={"far fa-save"} typebootstrap="primary" col={12} style={{width:'100%'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
