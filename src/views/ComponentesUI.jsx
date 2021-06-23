/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
Comentarios: xxxxx
*/

import React from 'react'


/*Componentes IU */
import Checkbox from '../components/ui/Checkbox'
import Input from '../components/ui/Input'
import Label from '../components/ui/Label'
import Label2 from '../components/ui/Label2'
import Select from '../components/ui/Select'
import BenefitsCurrent from '../components/ui/BenefitsCurrent'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Chart from '../components/ui/Chart'
import InfoMembers from '../components/ui/InfoMembers'
import Search from '../components/ui/search'
import TablaUno from '../components/ui/TablaUno'
import TableLine from '../components/ui/TableLine'
import TextArea from '../components/ui/TextArea'
import Tr from '../components/ui/Tr'
import CardIcon from '../components/ui/CardIcon'
import Modal from '../components/ui/Modal'
import ToggleCheck from '../components/ui/ToggleCheck'
import Spinner from '../components/ui/Spinner'
import Spinner2 from '../components/ui/Spinner2'
import Hr from '../components/ui/Hr'
import Payment from '../components/ui/Payment'
import Flex from "../components/ui/Flex"
import LiTab from '../components/ui/LiTab'
import Saved from '../components/modal-saving/Saved'
import SimpleTable from '../components/ui/SimpleTable'
import Header from '../components/ui/Header'
import CustomerData from '../components/ui/CustomerData'
import CustomerResult from '../components/ui/CustomerResult'
import { ACHPayment, AddressMemberByCreditCard, DespositsMaintenance, ElectronicWallet, MemberLog, MemberLogDetail, MemberProfilesRelated, MemberReservationRates, PalaceEliteGolf, ReleaseElectronicPurseProducts, ReportsMember, SalesMen } from '../components'
import MemberSalesLongDetail from '../components/salesmen/MemberSalesmenLogDetail'
import EstadoDeCuenta from '../components/members/ModalEstadoDeCuenta'
import MembersMarkets from '../components/markets/MembersMarkets'
import DayPass from '../components/coOwner/DayPass'
import ModalPerformance from '../components/performance/ModalPerformance'
import View from '../components/catalogo-views/View'
import CatalogoViews from '../components/catalogo-views/CatalogoViews'
import ReportBarclays from '../components/reports/ReportBarclays'
import ReportsSalesCancellation from '../components/reports/ReportSalesCancellation'
import DailySales from '../components/reports/daily/ModalDailySale'
import ReportDeposit from '../components/deposits-maintenance/DespositsMaintenance'
import ReportDownPaymentRemaining from '../components/report-down/ReportDownPaymentsRemaining'
import ReportElectronicPurseDetail from '../components/report-down/ReportElectronicPurseDetail'


import {
    DiamontClassificationDetail, DiamontClassification, DemographicAreas, DemographicAreaEditing, AsmCatalogs,
    AsmCatalogsDetail, AsmCatalogsLog, AsmCatalogsLogDetail, ImperialWeekRate, AdditionalFeesImperialLog, AdditionalFeesImperialLogDetail,
    AdditionalFeesImperialWeeks, AccessHotels, AccessHotelLog, AccessHotelLogDetail, DetailAccessHotels, ManagementBenefit, ListOfBenefits,
    RequerimentoAutorizaciones, TypeBenefitRules, TagManagement, TagDetail, Jobs, DetailsJob, Hotels
} from '../components/index'
import Currency from '../components/currencies/Currency'
import Currencies from '../components/currencies/Currencies'
import Company from '../components/companies/Company'
import Companies from '../components/companies/Companies'
import CompanyLog from '../components/companies/CompanyLog'
import ModalPortafolioCompanies from '../components/companies/ModalPortafolioCompanies'
import Usuario from '../components/users/Usuario'
import ReleaseAffiliationBalance from '../components/release-affiliation-balance/ReleaseAffiliationBalance'
import AccountStatement from '../components/reports/AccountStatement'
import UpdateMasterFile from '../components/update-master-file/UpdateMasterFile'
import DiscountProducts from '../components/discount-products/DiscountProducts'
import DiscountProductModal from '../components/discount-products/DiscountProductModal'
import PromotionsOrder from '../components/promotion/PromotionsOrder'

import MonthlyStock from '../components/monthly-stock/MonthlyStock'
import RaffleWeeks from '../components/monthly-stock/RaffleWeeks'
import StockSaleRoom from '../components/stock-sale-room/StockSaleRoom'
import RoomType from '../components/special-letter-titles-setting/RoomType'
import RoomTypes from '../components/special-letter-titles-setting/RoomTypes'

import { Container } from 'reactstrap'
import { Navigation } from '../components/index'
const ComponentesUI = () => {
    return (
        <>
            <div className="App">
                <div id="page" className="page">
                    <Navigation />
                    <section className="app-content" id="content">
                        <main className="registration-form">
                            <article className="content-area">
                                <div className='ml-5 pl-5'>

                                    <h1 className="text-center">Componentes</h1>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <SalesMen />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <MemberSalesLongDetail />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <MemberLog />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <MemberLogDetail />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <EstadoDeCuenta />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <ReleaseElectronicPurseProducts />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <PalaceEliteGolf />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <MemberProfilesRelated />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <ACHPayment />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <MembersMarkets />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <AddressMemberByCreditCard />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <MemberReservationRates />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <DayPass />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <ModalPerformance />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <ReportsMember />
                                        </div>
                                    </div>

                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <View />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <CatalogoViews />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <DespositsMaintenance />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <ReportBarclays />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <ReportsSalesCancellation />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <DailySales />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <ReportDeposit />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <ReportDownPaymentRemaining />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div >
                                            <ReportElectronicPurseDetail />
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <PromotionsOrder />
                                    </div>
                                    <div className="p-5">
                                        <ReleaseElectronicPurseProducts />
                                    </div>
                                    <div className="p-5">
                                        <DiscountProductModal />
                                    </div>
                                    <div className="p-5">
                                        <DiscountProducts />
                                    </div>
                                    <div className="p-5">
                                        <UpdateMasterFile />
                                    </div>
                                    <div className="p-5">
                                        <AccountStatement />
                                    </div>
                                    <div className="p-5">
                                        <ReleaseAffiliationBalance />
                                    </div>
                                    <div className="p-5">
                                        <Usuario />
                                    </div>
                                    <div className="p-5">
                                        <DetailAccessHotels />
                                    </div>
                                    <div className="p-5">
                                        <AccessHotelLogDetail />
                                    </div>
                                    <div className="p-5">
                                        <AccessHotelLog />
                                    </div>
                                    <div className="p-5">
                                        <AccessHotels />
                                    </div>
                                    <div className="p-5">
                                        <AdditionalFeesImperialWeeks />
                                    </div>
                                    <div className="p-5">
                                        <AdditionalFeesImperialLogDetail />
                                    </div>
                                    <div className="p-5">
                                        <AdditionalFeesImperialLog />
                                    </div>
                                    <div className="p-5">
                                        <ImperialWeekRate />
                                    </div>
                                    <div className="p-5">
                                        <AsmCatalogsLogDetail />
                                    </div>
                                    <div className="p-5">
                                        <AsmCatalogsLog />
                                    </div>
                                    <div className="p-5">
                                        <AsmCatalogsDetail />
                                    </div>
                                    <div className="p-5">
                                        <AsmCatalogs />
                                    </div>
                                    <div className="p-5">
                                        <ModalPortafolioCompanies />
                                    </div>
                                    <div className="p-5">
                                        <CompanyLog />
                                    </div>
                                    <div className="p-5">
                                        <Companies />
                                    </div>
                                    <div className="p-5">
                                        <Company />
                                    </div>
                                    <div className="p-5">
                                        <Currencies />
                                    </div>
                                    <div className="p-5">
                                        <Currency />
                                    </div>
                                    <div className="p-5">
                                        <DemographicAreaEditing />
                                    </div>
                                    <div className="p-5">
                                        <DemographicAreas />
                                    </div>
                                    <div className="p-5">
                                        <DiamontClassification />
                                    </div>
                                    <div className="p-5">
                                        <DiamontClassificationDetail />
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <MonthlyStock />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <RaffleWeeks />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <StockSaleRoom />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <ManagementBenefit />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <ListOfBenefits />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <RequerimentoAutorizaciones />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <TypeBenefitRules />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <TagManagement />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <TagDetail />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <Jobs />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <RoomType />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <RoomTypes />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <DetailsJob />
                                        </div>
                                    </div>
                                    <div className="container d-flex m-4 p-4 justify-content-around align-self-center">
                                        <div>
                                            <Hotels />
                                        </div>
                                    </div>
                                </div>

                            </article>
                        </main>
                    </section>
                </div>
            </div>
        </>
    );
}

export default ComponentesUI;