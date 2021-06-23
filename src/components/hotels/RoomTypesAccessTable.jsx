import React from 'react'
import Table from 'rc-table'
import {checkbox} from 'reactstrap'

const columns = [
    {
      title: "Code Room Type",
      dataIndex: "codeRoomTyp",
      key: "codeRoomType",
      width: 130,
    },
    {
      title: "Room Type Access",
      dataIndex: "roomTypeAccess",
      key: "roomTypeAccess",
      width: 130,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quiantity",
      width: 130,
    },
    {
      title: "Min Floor",
      dataIndex: "minFloor",
      key: "minFloor",
      width: 130,
      render: () => <Input type="checkbox"/>,
    },
    {
    title: "Room Types Access",
    dataIndex: "roomTypesAccess",
    key: "roomTypesAccess",
    width: 130,
    render: () => <Input type="checkbox"/>,
  },
{
  title: "Room Type Access + Cabo",
  dataIndex: "roomTypesAccessCabo",
  key: "roomTypesAccessCabo",
  width: 130,   
  render: () => <Input type="checkbox"/>,
},
  ];

function RoomTypesAccessTable() {
    return (
        <>
          <Table columns={columns} />  
        </>
    )
}


export default RoomTypesAccessTable
