import React, { useState } from "react";
import { Button, Checkbox, Select } from '../index'
import { Form, Label, Row, Col, Input } from 'reactstrap';
import SpecialGroup from './SpecialGroup';
import { data } from './DataMemRoomTypeAcc'
import DataTable from 'react-data-table-component';

const MemberRoomTypeAccess = () => {
   const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
   const [filterText, setFilterText] = useState('');

   const FilterComponent = ({ filterText, onFilter, onClear }) => (
      <>
         <Col lg={6}>
            <Input id="search" type="text" placeholder="Code / Description" aria-label="Search Input" value={filterText} onChange={onFilter} ></Input>
         </Col>
         <Col lg={6}>
            <Button type="button" onClick={onClear} title="Clear Filter" icon="fas fa-filter" />
         </Col>
      </>
   );

   const subHeaderComponentMemo = React.useMemo(() => {
      const handleClear = () => {
         if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
         }
      };

      return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
   }, [filterText, resetPaginationToggle]);


   const filteredItems = data.filter(item => item.IDTYPEROOM && item.IDTYPEROOM.toLowerCase().includes(filterText.toLowerCase()) || item.DESCRIPTION && item.DESCRIPTION.toLowerCase().includes(filterText.toLowerCase()));

   const columns = [
      {
         name: "Selected",
         selector: "but",
         button: true,
         cell: row => (
            <Checkbox />
         ),
      },
      {
         name: "Code",
         selector: "IDTYPEROOM",
         sortable: true
      },
      {
         name: "Description",
         selector: "DESCRIPTION",
         sortable: true
      },
      {
         name: 'Total Access',
         selector: 'TotAccess',
         sortable: true
      },
      {
         name: 'Period Type',
         selector: 'Period',
         sortable: true
      },
      {
         name: 'Discount Rate',
         selector: 'Discount',
         sortable: true
      },
      {
         name: 'Validity',
         selector: 'Validity',
         sortable: true
      },
      {
         name: 'Link',
         selector: 'Link',
         cell: () => <Checkbox />,
      },
      {
         name: 'Group',
         selector: 'Group',
         cell: () => <Select option="Standard" col={12} />,
      },
      {
         name: 'Scheme',
         selector: 'Scheme',
         sortable: true
      },
      {
         name: 'Import Reason',
         selector: 'Reason',
         sortable: true
      },
      {
         name: 'Afiliation Source',
         selector: 'Afiliation',
         sortable: true
      },
      {
         name: 'Date From',
         selector: 'DATEFROM',
         sortable: true
      },
      {
         name: 'Date to',
         selector: 'DATETO',
         sortable: true
      },
   ];
   const customStyles = {
      rows: {
         style: {
            minHeight: '72px', // override the row height
         }
      },
      headCells: {
         style: {
            fontSize: '15px',
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
         },
      },
      cells: {
         style: {
            fontSize: '14px',
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
         },
      },
   };
   
   return (
      <div className='container mt-3'>
         {/* <Form>
            <Row>
               <Col lg='4'>
                  <Label>Code</Label>
                  <Input type="text" />
               </Col>
               <Col lg='4'>
                  <Label>Description</Label>
                  <Input type="text" />
               </Col>
               <Col lg='4'>
                  <br />
                  <Button
                     col={6}
                     width="100%"
                     icon="fas fa-search"
                     typebootstrap="primary"
                     type="button"
                  />
               </Col>
            </Row>
         </Form> */}
         {/* <br /> */}
         {/* <Table scroll={{ x: 1600 }} className="table" id="resume-table" columns={columns} data={data} /> */}
         <DataTable
            noHeader
            className="table"
            id="resume-table"
            rowKey={() => Math.random()}
            customStyles={customStyles}
            columns={columns}
            data={filteredItems}
            noDataComponent=''
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            responsive
         />
         <Row md={5}>
            <Col lg='6'>
               <SpecialGroup />
            </Col>
            <Col lg='6'></Col>
         </Row>
      </div>
   )
}


export default MemberRoomTypeAccess
