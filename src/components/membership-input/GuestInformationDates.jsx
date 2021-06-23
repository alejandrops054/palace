/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React, { useState, useEffect } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { Input, TableGestId } from "../index";
import FormContact from "../guest-information/FormContact";

import { useForm } from "../../hooks/index";
import MembersProfileTable from "../guestInformationTable/MembersProfileTable";

import {useSelector, useDispatch} from 'react-redux'
import InvoicingInfo from "../invoicing-info/InvoicingInfo";
import TributaryInfo from "../tributaryInfo/TributaryInformation";

//import {getAffiliationBasicAction} from '../../redux/actions/guestInformationActions/affiliationBasicActions'

const GuestInformation = () => {
const dispatch = useDispatch()
const memberbyapplication = useSelector(state => state.member.data)
const memberProfileData = useSelector((state) => state.member.MemberProfiles);
//const profileIdData = useSelector((state) => state.profileid.profileId);

//const data = useSelector((state) => state.guestid.guestId);



  const [activeTab, setActiveTab] = useState("1");

  const [guestInfo, setGuestInfo] = useState({});

  const [contact, setContact] = useState({})

  const [invoicing, setInvoicing] = useState({})

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [defaultData, setDefaultData]=useState({
    guestid:'',
    profileid: '',
    ownerid: '',
    firstname: '',
    guestname: '',
    profilename: '',
    title: '',
    lastname: ''
  })


  

  const handleInputChange= e =>{
    setDefaultData({
      ...defaultData,
      [e.target.name]: e.target.value
    })
  }

  // const { handleInputChange, inputs } = useForm({
  //   guestid:'',
  //   profileid: '',
  //   ownerid: '',
  //   ownername: '',
  //   guestname: '',
  //   profilename: '',
  //   title: '',
  //   lastname: ''
  // });

  let { guestid, profileid, ownerid, firstname, guestname, profilename, title, lastname, nss } = defaultData;

  



  
    if(memberbyapplication) {
      memberbyapplication.map(data=>{
        guestid=data.GUID,
        firstname=data.FIRST1,
        lastname=data.LAST1
        ownerid=data.RECNUM
        guestname=(data.FIRST1+' '+data.LAST1)
        title=data.TITLE
        
      })
    }
    // if(data){
    //   data.map(data=>{
    //     guestname=(data.guFirstName1+' '+data.guLastName1)

    //   })
  
    // }

    // if(profileIdData){
    //   profilename=profileIdData[0].name
    //   profileid=profileIdData[0].idprofile
    // }
  console.log('member',memberbyapplication)
  useEffect(() => {
    if(memberbyapplication){
      // const getAffiliationBasic= () =>{dispatch(getAffiliationBasicAction(memberbyapplication[0].APPLICATION))}
      // getAffiliationBasic()
    setGuestInfo({
      guestid,
      profileid,
      ownerid,
      firstname,
      guestname,
      profilename,
      title,
      lastname,
      nss
    });

    }
      
       //eslint-disable-next-line
  
  }, []);

  if(memberProfileData >0) {
    const setProfileData=_=>{
      profileid=memberProfileData[0].idprofileopera
    //  profilename=memberProfileData[0].name  //verificar con otras applicaciones y guesid
    }
    setProfileData()
  }

  //  if(memberProfileData){
  //    memberProfileData.map(item=>{
  //      profileid=item.idprofileopera
  // profilename=item.name
  //    })
  //  }

  return (
    <>
      <div className="container">
        <Nav tabs>
          <NavItem>
            <NavLink
              // className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle("1");
              }}
            >
              Guest Information
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              // className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle("2");
              }}
            >
              Contact
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              // className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle("3");
              }}
            >
              Invoicing Information
          </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="card mb-4" style={{border:'none', padding:'1rem'}} >
              <div className="row">
                <div id="gm-group" className="col-lg-6 mb-3">
                  <div className="col-lg-12 mb-3">
                    <label>Guest ID</label>
                    <div className="input-group">
                      <input onChange={handleInputChange} type="text" className='form-control' name="guestid" value={guestid} disabled />
                      <TableGestId />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label>Profile ID</label>
                    <div className="input-group">
                      <input onChange={handleInputChange} type="text" className='form-control' name="profileid" value={profileid} />
                      <MembersProfileTable />
                    </div>
                  </div>
                  <Input
                    type="text"
                    label="Owner ID"
                    col={12}
                    placeholder="0"
                    name="ownerid"
                    value={ownerid}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    label="First name"
                    col={12}
                    placeholder="First name"
                    name="firstrname"
                    value={firstname}
                    onChange={handleInputChange}
                  />
                  <div className="col-lg-12 mb-3">
                    <label>NSS</label>
                    <div className="input-group">
                      <input onChange={handleInputChange} type="text" className='form-control' name="nss" value={nss} />
                      <TributaryInfo/>
                    </div>
                  </div>
                </div>
                <div id="gm-group" className="col-lg-6 mb-3">
                  <Input
                    type="text"
                    label="Guest name"
                    col={12}
                    placeholder="Complete name"
                    name="guestname"
                    value={guestname}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    label="Profile name"
                    col={12}
                    placeholder=""
                    name="profilename"
                    value={profilename}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    label="Title"
                    col={12}
                    placeholder=""
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    label="Last name"
                    col={12}
                    placeholder=""
                    name="lastname"
                    value={lastname}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="card mb-4" style={{border:'none'}}>
              <div className="row">
                <FormContact setContact={setContact} />
              </div>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="card mb-4" style={{border:'none'}}>
              <div className="row">
                <InvoicingInfo setInvoicing={setInvoicing} />
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>

    </>
  );
};

export default GuestInformation;
