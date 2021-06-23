/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import { Label, TextArea, Button, Input } from "../index";

const ConcordNotes = () => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">CONCORD Notes</h5>
                <div className="row">
                    <TextArea label="File path" col={12} />
                    <Button title="Open file" icon="fas fa-folder-plus" col={12} typebootstrap="secondary" />
                    <div className="row">
                        <Label etiqueta="Records to process: 0" col={4} />
                        <Label etiqueta="Progress" col={2}/>
                        <Label etiqueta="0 %" col={2} />

                        <Input label="" col={4} />
                    </div>
                    <Button icon="fas fa-cog" col={3} typebootstrap="primary" title="Process" />
                    <Button icon="fas fa-times" col={3} typebootstrap="secondary" title="Cancel" />
                </div>
            </div>
        </div>
    );
};

export default ConcordNotes;
