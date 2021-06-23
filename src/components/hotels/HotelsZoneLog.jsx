/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from "react";
import Log from "../ui/Log";

const columns = [
  {
    title: "User",
    dataIndex: "user",
    key: "user",
    width: 130,
  },
  {
    title: "Date/Time",
    dataIndex: "date/time",
    key: "date/time",
    width: 130,
  },
  {
    title: "Module",
    dataIndex: "module",
    key: "module",
    width: 130,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: 130,
  },
  {
    title: "Original",
    dataIndex: "original",
    key: "original",
    width: 130,
  },
  {
    title: "Changes",
    dataIndex: "changes",
    key: "changes",
    width: 130,
  },
];

function HotelsZoneLog() {
  return (
    <>
      <Log titles="Hotels Zone Log" columns={columns} />
    </>
  );
}

export default HotelsZoneLog;
