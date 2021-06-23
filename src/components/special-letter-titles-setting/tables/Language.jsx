import React from 'react'
import Table from 'rc-table'

const columns = [
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
      width: 130,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        width: 130,
      },    
]
function Language(props) {
    return (
        <>
         <Table columns={columns}/>   
        </>
    )
}


export default Language
