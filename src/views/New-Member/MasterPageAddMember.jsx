/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Navigation, Header, CustomerData, SaleCapture, PackageAcces, MemberResume, VatRateNew } from '../../components/index';
import Wizard from '../../components/wizard/Wizard'
import GuestInformationView from './modules/GuestInformationView'
import SaleCaptureView from './modules/SaleCaptureView'
import Benefits from '../../components/benefits/Benefits'
import ExcelentJob from './modules/ExcelentJob'


const MasterPage = () => {

    const [isAct, setIsActive] = useState(0);
    const [member, setMember] = useState(false)
    const history = useHistory();

    const handlerLess = () => isAct == 0 ? setIsActive(0) :setIsActive(isAct-1)
    const handlerMore = () => isAct > 5 ? setIsActive(5) : setIsActive(isAct+1);

    return (
        <div className="App">
            <div id="page" className="page">
                <Navigation />
                <section className="app-content" id="content">
                    <Header
                        title={'New Member'}
                        icon={'fas fa-user-plus'}
                    />
                    <main className="registration-form">
                        {isAct == 5 || !member
                            ? null
                            : <CustomerData/>
                        }
                        <article className="content-area">
                            {!member
                                ?null
                                :(<Wizard
                                    className="wizard"
                                    setIsActive={ setIsActive }
                                    isAct={ isAct }
                                />)
                            }
                            
                                {   isAct == 0 && !member ?<MemberResume setMember={ setMember }/>
                                    :isAct == 0 ? <GuestInformationView />
                                    : isAct == 1 ? <div className='container'> <SaleCaptureView /> </div>
                                    : isAct == 2 ? <div className='container'><Benefits/></div>
                                    : isAct == 3 ? <div className='container'><PackageAcces /></div>
                                    : isAct == 4 ? <div className='container'><VatRateNew /></div>
                                    : isAct == 5 && <ExcelentJob />
                                }
                            
                            {isAct == 5 || !member
                                ? null
                                : (
                                    <nav className='form-nav py-4 my-5'>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={ handlerLess }
                                        ><i className="fas fa-times mr-2"></i> Cancel</button>
                                        <button
                                            className="btn btn-primary"
                                            onClick={ handlerMore }
                                        >Next <i className="fas fa-arrow-right ml-2"></i></button>
                                    </nav>
                                )
                            }

                        </article>
                    </main>
                </section>
            </div>
        </div>
     );
}

export default MasterPage