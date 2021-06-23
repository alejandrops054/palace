import React from "react";
import Table from "rc-table";
const columns = [
  {
    title: "Hotel",
    dataIndex: "hotel",
    key: "hotel",
    width: 130,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 130,
  },
];

function Hotels() {
  return (
    <>
      <Table columns={columns} />
    </>
  );
}

export default Hotels;
