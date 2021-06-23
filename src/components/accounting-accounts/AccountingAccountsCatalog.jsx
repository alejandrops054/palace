/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contrato1s
Comentarios: xxxxx
*/

import React from 'react'
import {Col, Row, Button} from 'reactstrap'
import Table from 'rc-table'

const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      width: 130,
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
        width: 130,
      },
      {
        title: "Society",
        dataIndex: "society",
        key: "society",
        width: 130,
      },
      {
        title: "II",
        dataIndex: "ii",
        key: "ii",
        width: 130,
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: 130,
      },
]
function AccountingAccountsCatalog() {
    return (
        <div>
            <h2>Accounting Accounts</h2>
            <h5>Accounting Accounts Catalog</h5>
            <Row>
                <Col lg={{size:1, offset:7}}>
                    <Button>Log</Button>
                </Col>
                <Col lg={{size:1}}>
                    <Button>Add</Button>
                </Col>
                <Col lg={{size:1}}>
                    <Button>Properties</Button>
                </Col >
                <Col lg={{size:1}}>
                    <Button>Refresh</Button>
                </Col>
                <Col lg={{size:1}}>
                    <Button>Close</Button>
                </Col>
            </Row>
            <Row>
                <Table columns={columns}/>
            </Row>
        </div>
    )
}

export default AccountingAccountsCatalog
