/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos Dev01
Comentarios: xxxxx
*/

import React from "react";
import { Editor } from "@tinymce/tinymce-react";

//initialValue: valor inicial que se muestra en el editor
//col: tamaño de columna de bootstrap
//menubar: mostrar la barra de menu true o false
//height : anchura  del editor

const EditorComponent = ({ initialValue = "", height, menubar, col }) => {
  return (
    <div className={`col-lg-${col} mb-3`}>
      <Editor
        initialValue={initialValue}
        init={{
          height: height,
          menubar: menubar,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        }}
      />
    </div>
  );
};

export default EditorComponent;
