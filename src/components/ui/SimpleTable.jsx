import React from "react";
import Table from 'rc-table';
//columns: objeto con datos de columnas
//data: objeto con el contenido de la tabla
//type: table

const SimpleTable = ({ columns = {}, data = {}, type = "" }) => {
    return (
        <Table columns={columns} data={data} className={type} />
    );
};

export default SimpleTable;