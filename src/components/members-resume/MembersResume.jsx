/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: xxxxx
*/
import React,{ useState, useEffect } from "react";
import Table from 'rc-table'

//Components
import {Search, Button} from '../index'
import Etiqueta from '../ui/Label';
import Checkbox from '../ui/Checkbox';
import { Link, useHistory } from "react-router-dom";

//import { getUser } from '../../webservice/memberService'



const MemberResume = ({ setMember }) => {
    const history = useHistory();
    const redirectNewMember = () => {
        setMember(true)
    }

    const renderAction = (o, row, index) => (
      <button className='btn-default' style={{backgroundColor:'transparent', color:'#233586', border:'1px solid grey' }}> <Link to="verification"  type="button" onClick={()=>handleClick(index) }>Go</Link></button>
      );

    const columns = [
        { title:  'Priority', dataIndex: 'priority', key: 'priority', width: 195, align: 'center' },
        { title: 'Id', dataIndex: 'idMembers', key: 'idMembers', width: 195, align: 'center'},
        { title: 'Profile Id', dataIndex: 'profileId', key: 'profileId', width: 195, align: 'center'},
        { title: 'Firt Name', dataIndex: 'firstname', key: 'firstname', width: 195, align: 'center'},
        { title: 'Last Name', dataIndex: 'lastname', key: 'lastname', width: 195, align: 'center'},
        { title: 'Status', dataIndex: 'status', key: 'status', width: 195, align: 'center'},
        { key: '7', title: 'Go', dataIndex: '', width: 195, render: renderAction }
    ];

    const [data, setData] =useState ([
        {key:"11111", priority: '1', idMembers: '1234567', profileId: '1234567', firstname: 'Penny', lastname: 'Lane', status: 'Active',age:'25',office:'', project:'' },
        {key:"2", priority: '2', idMembers: '1234567', profileId: '1234567', firstname: 'Miguel', lastname: 'Sánchez', status: 'Active' },
        {key:"3", priority: '3', idMembers: '1234567', profileId: '1234567', firstname: 'Jude', lastname: 'Hudson', status: 'Active' },
        {key:"4", priority: '4', idMembers: '1234567', profileId: '1234567', firstname: 'John', lastname: 'Doe', status: 'Active' },
        {key:"5", priority: '5', idMembers: '1234567', profileId: '1234567', firstname: 'Mikáel', lastname: 'Akeson', status: 'Active' }
    ])

    const data1= []

    const [oneUser,twoUser,threeUser,fourUser,fiveUser]=data

    const [userSelected, setUserSelected] = useState({});
    
    const handleClick = index  => {
      console.log(index)
      history.push('/new-member')
      
      };
    //   <Link to='verification' href="!#" onClick={()=>handleClick()}
    //   >Go</Link>

    // useEffect(() => {
    //     const gettingUser = async () => {
    //         const res = await getUser();
    //         setUser(res);
    //     }
    //     gettingUser();
    // }, [])

    return (
            <>
                <div className="row my-5">
                    <Etiqueta etiqueta={"Member Resume"} bold={true} color={"black"} tamanio={25} col={6} />
                </div>

                <div className={"d-flex justify-content-between"}>
                    <Search placeholder={"Get member..."} col={6} />
                    <Button
                        title={"New member"}
                        typebootstrap='primary'
                        col='2'
                        onClick={ redirectNewMember }
                        borderRadius={'0.3rem'}
                    />
                </div>

                <div className="row mt-5">
                    <Etiqueta etiqueta={"Current Members"} bold={true} color={"black"} tamanio={20} col={12} />
                </div>

                <Table
                    className="table"
                    columns={columns}
                    data={data1}
                    rowKey={(record)=>console.log(record)}
                
                />
                <div className="table-footer mt-5">
                    <small id="table-meta">{data.length} of 2000 registrations</small>
                    <nav aria-label="Page navigation">
                        <ul className="table-pagination">
                            <li className="tp-item"><a className="tp-link" href="#"><i className="fas fa-step-backward"></i></a></li>
                            <li className="tp-item"><a className="tp-link active" href="#">1</a></li>
                            <li className="tp-item"><a className="tp-link" href="#">2</a></li>
                            <li className="tp-item"><a className="tp-link" href="#">3</a></li>
                            <li className="tp-item"><a className="tp-link" href="#"><i className="fas fa-step-forward"></i></a></li>
                        </ul>
                    </nav>
                </div>

            </>
    );
}
export default MemberResume


