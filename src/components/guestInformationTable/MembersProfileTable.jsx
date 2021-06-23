/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React, {useState, useEffect} from "react";
import { Input, Button, InfoMembers } from "../index";
import { Modal, Row, Col, Card, CardTitle, CardBody, CardHeader, Label, Button as ButtonReactstrap, FormGroup, Input as InputReactstrap } from "reactstrap";
import DataTable from 'react-data-table-component';

import {useDispatch, useSelector} from 'react-redux'

import { getProfileIdAction} from "../../redux2/actions/memberActions";
import { getMemberProfileAction } from "../../redux2/actions/memberActions";


import SweetAlert from 'react-bootstrap-sweetalert';
import {postRelationshipAction} from '../../redux/actions/guestInformationActions/priorityRelationshipActions'



const MembersProfileTable=_=> {
//Toggle modal open / close
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open)

//Se obtiene la data de storage 
  const dispatch = useDispatch();
  const profileIdData = useSelector((state) => state.member.ProfileId);
  const memberProfileData = useSelector((state) => state.member.MemberProfiles);
  const guestData = useSelector((state) => state.member.GuestId);
  const memberbyapplicationData = useSelector((state) => state.member.data);

  //Botón Edit Relationship / Stop Relationship evento Click
  let [titleActive, setTitleActive]= useState({title:"Edit Relationship"})
  let [disabled, setDisabled]=useState(true)
  const activeDisabled =()=>{
    setDisabled(!disabled)
    if(disabled){
      setTitleActive({title:'Stop Edit Relationship'})
    }else{
      setTitleActive({title:"Edit Relationship"})
      setMemberProfileData(memberProfileData)

    }
  }

  //estado para guardar datos de prrofileId
  const [profileIdTable, setProfileIdTable]=useState([])
  //estado guarda datos que se pintaran en la tabla
  let [memberProfileTable, setMemberProfileData]=useState([])

//Valores default <InputReactstrap/>  Select para cambiar priority
  const relationshipData = [
    { relationship: 1, name: "Owner", value: "Owner" },
    { relationship: 2, name: "Co Owner", value: "Co Owner" },
    { relationship: 3, name: "Beneficiary", value: "Beneficiary" },
    { relationship: 4, name: "Guest", value: "Guest" },
  ];

//Pinta datos superiores de la vista y se pintan en la vista  
let setLabels={}
if(profileIdTable){
  profileIdTable.map(item=>{
    setLabels.name=item.name
    setLabels.company=item.company
    setLabels.application=item.application
  })
}
const {name, company, application}=setLabels

  const getData =(guestData,memberbyapplicationData)=>{
    if(guestData){
      const {guIdProfileOpera}=guestData
      const {APPLICATION,COMPANY}=memberbyapplicationData
      dispatch(getProfileIdAction(COMPANY,APPLICATION))
      dispatch(getMemberProfileAction(guIdProfileOpera, COMPANY,APPLICATION ))
    }
  }
  
 
  const [stateSelect, actualizedStateSelect] = useState();

  let newDataRelationship=[]
  if(memberProfileData){
    memberProfileData.map(data=>{
      newDataRelationship.push({recnum:data.recnum, name:data.RelationshipName, value:data.RelationshipName})
    })

  }


  // let dataTable = [];
  // let prio = {};
  // if (memberProfileData!==null && memberProfileData.length > 0) {
  //   memberProfileData.map((data) => {
  //     prio = {
  //       priority: data.priority,
  //       RelationshipName: data.RelationshipName,
  //       idprofileopera: data.idprofileopera,
  //       name: data.name,
  //       company: data.company,
  //       application: data.application
  //     };
  //     dataTable.push(prio);
  //   });
  // }
  
const pintaData = (profileIdData, memberProfileData) => {
  if (profileIdData && memberProfileData!==null) {
    setProfileIdTable(profileIdData);
   setMemberProfileData(memberProfileData)
  }
};

//alerta sweetAlert
const [warningAlert, setWarningAlert] = useState(false);
const [changeTableRelationship, setChangeTableRelationship] = useState(false);
const changeRelationship=()=>setChangeTableRelationship(!changeTableRelationship)

useEffect(() => {
  if(guestData && memberbyapplicationData){
   const executeData=()=>{
    getData(guestData[0],memberbyapplicationData[0])
   }
   executeData()
  }
  if(memberProfileData && profileIdData){
    const executePinta=()=>{
     pintaData(profileIdData, memberProfileData)
    }
    executePinta()
   }
}, [open,profileIdTable,guestData,memberProfileTable])



const onRowChange=(row,index)=>{
    let profileListCopy=memberProfileTable;
    let rowSelect = profileListCopy.filter(data=>data.recnum===row.recnum)
    let count=2
    let countRelationshipChange=0
    let RelationshipOwnerChange=[]
    
    let haveOwner=profileListCopy.filter(data=>data.RelationshipName==='Owner')

    if(row.RelationshipName === "Guest"){
      setWarningAlert(true)
      return
    } 
    if ( row.RelationshipName != "Guest") {
      //******** existe Owner ********
      
     // si pasa de coowner (o owner) a beneficiario, contabilizarlo ++, para pedir override
      if(profileListCopy[index].RelationshipName==="Co Owner" || profileListCopy[index].RelationshipName==="Owner"
      && row.RelationshipName==="Beneficiary" ){
        countRelationshipChange++
      }
      // si pasa de owner a coowner, se guarda
      if(profileListCopy[index].RelationshipName==="Owner" && row.RelationshipName==="Co Owner" ){
        RelationshipOwnerChange.push(row)
      }

      // modificar relationship
      switch(row.RelationshipName){
        case 'Owner':
          if(profileListCopy[index].RelationshipName=="Co Owner" || profileListCopy[index].RelationshipName=="Beneficiary"
          && row.RelationshipName==="Owner" ){
            row.priority=1
            memberProfileTable[0]=row
            if(profileListCopy[index].RelationshipName==="Co Owner"){
              haveOwner[0].RelationshipName="Co Owner"  
              memberProfileTable.splice(index,1,...haveOwner)
             memberProfileTable.sort()
            }else{
              haveOwner[0].RelationshipName="Beneficiary"   
              haveOwner[0].priority=count           
              memberProfileTable.splice(index,1,...haveOwner)
             // memberProfileTable.sort()
              countRelationshipChange++;  
            }
    
          }
          profileListCopy[index].priority=(count+1)
          memberProfileTable[index]=profileListCopy[index]
          break
        case "Co Owner": 
            if(profileListCopy[index].RelationshipName !== "Co Owner"){
              //  Establecemos el nuevo valor
              //row.priority=1
              memberProfileTable[index]=row
              //  Recuperamos la lista de Co Owners
              let coOwnerFilter=memberProfileTable.filter(data=>data.RelationshipName==='Co Owner')
              //  Reasignamos las prioridades
                coOwnerFilter.map(data=>{
                  data.priority=count
                  count++
                })
                //  Al cambiar de Beneficiarios a CoOwners se debe reasignar las prioridades
              //  Recuperamos la lista de Beneficiarios
              let beneficiariesFilter=profileListCopy.filter(data=>data.RelationshipName==='Beneficiary')
              count=1
              beneficiariesFilter.map(data=>{
                data.priority=count
                count++
              })
              //ordenamos 
              coOwnerFilter.sort((a,b)=>a.priority-b.priority)
              beneficiariesFilter.sort((a,b)=>a.priority-b.priority)
              //recuperamos owner
              memberProfileTable=[...haveOwner,...coOwnerFilter,...beneficiariesFilter]
            }
          break
        case 'Beneficiary':
          if(profileListCopy[index].RelationshipName !== "Beneficiary"){
            //  Establecemos el nuevo valor
            //row.priority=1
            memberProfileTable[index]=row
            //  Recuperamos la lista de Co Owners
            let coOwnerFilter=memberProfileTable.filter(data=>data.RelationshipName==='Co Owner')
            //  Reasignamos las prioridades
              coOwnerFilter.map(data=>{
                data.priority=count
                count++
              })             
              //  Al cambiar de Beneficiarios a CoOwners se debe reasignar las prioridades
            //  Recuperamos la lista de Beneficiarios
            let beneficiariesFilter=profileListCopy.filter(data=>data.RelationshipName==='Beneficiary')
            count=1
            beneficiariesFilter.map(data=>{
              data.priority=count
              count++
            })
             //ordenamos 
             coOwnerFilter.sort((a,b)=>a.priority-b.priority)
             beneficiariesFilter.sort((a,b)=>a.priority-b.priority)
            //recuperamos owner
            memberProfileTable=[...haveOwner,...coOwnerFilter,...beneficiariesFilter]
          }
        break;    
        default:
          return
      }
    }
}

const verifyOwner=()=>{
  
}

const columns = [
  {
    name: "Priority",
    selector: "priority",
    sortable: true,
  },
  {
    name: "Relationship",
    selector: "RelationshipName",
    button: true,
    cell: (row, index, column, id) =>(
      <>{memberProfileTable.filter(data=>data.recnum===row.recnum)[0].recnum === row.recnum && !disabled &&  
        (<InputReactstrap 
        type="select" 
        name="select"
        id={row.recnum}
        onChange={ e =>{
          onRowChange({...row, RelationshipName:e.target.value}, index);
          changeRelationship() 
        }}
        disabled = {disabled}
        value={row.RelationshipName}
       >
        <option>- Select an option -</option>

          {relationshipData.map(opcion => ( 
          <option key={opcion.id} value={opcion.value}>{opcion.name}</option>
              ))
          }
      </InputReactstrap>) 
      
      || row.RelationshipName}
      </>
    ),
  },
  {
    name: "Profile Id",
    selector: "idprofileopera",
    sortable: true,
  },
  {
    name: "Id Profile Opera JS",
    selector: "idprofileoperajc",
    sortable: true,
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Company",
    selector: "company",
    sortable: true,
  },
  {
    name: "Application",
    selector: "application",
    sortable: true,
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
      fontSize:'17px',
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      fontSize:'15px',
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};




  return (
    <>
    <SweetAlert 
     warning
     confirmBtnText="Ok"
     confirmBtnBsStyle="danger"
      title="No puede cambiar a Guest!" 
      onConfirm={() => {setWarningAlert(false)}}
      onCancel={() => {setWarningAlert(false)}}
      show={warningAlert}
    />
      <button onClick={() => toggle()} type="button" className="input-group-addon btn btn-secondary" style={{borderBottomRightRadius:'.3rem', borderTopRightRadius:'.3rem'}}><i className="fas fa-plus"></i></button>
      <Modal isOpen={open} toggle={toggle} size="lg">
          <Card>
            <CardHeader>
              <CardTitle tag="h2">Member Profile</CardTitle>
            </CardHeader>
            <CardBody>
            <CardTitle tag="h5">Member Information</CardTitle>

            <Row>
              <Col lg="5">
                <InfoMembers title="Member Name:" text={name} />
              </Col>
              <Col lg="3">
                <InfoMembers title="Company" text={company} />
              </Col>
              <Col lg="3">
                <InfoMembers title="Application" text={application} />
              </Col>
            </Row>
            <Row className="pt-3 pb-3">
              <CardTitle tag="h5">Select the Owner</CardTitle>

            </Row>
            <div>
              <DataTable
                noHeader
                className="table"
                id="resume-table"
                rowKey={() => Math.random()}
                customStyles={customStyles}
                columns={columns}
                data={memberProfileTable}
                noDataComponent=''
                dense
                stripedRows
              />
            </div>
            <br />
            <Row>
              <Col lg='6'>
                <Button title={titleActive.title} col="6" typebootstrap="secondary" onClick={() => activeDisabled()} />
              </Col>
            </Row>
            <Row md={5}>
              <Col lg="6"></Col>
              {disabled
              ? (<Button
              icon="fas fa-check"
              typebootstrap="primary"
              width='100%'
              type="button"    
              onClick={()=>toggle()} 
            />)
            : (<Button
              icon="fas fa-save"
            title='Save'
            typebootstrap="primary"
            width='100%'
            type="button"    
            onClick={()=>toggle()} 
          />)
              
              }
              <Button
                icon="fas fa-times"
                typebootstrap="secondary "
                type="button"
                width='100%'
                onClick={() => toggle()}
              />
            </Row>


          </CardBody>
        </Card>
      </Modal>
    </>
  );
}


export default MembersProfileTable






