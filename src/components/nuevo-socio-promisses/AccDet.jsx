import React, {useState} from "react";

import { InfoMembers, Checkbox, Input } from "../index";
//import { Link } from "react-router-dom";
import Table from "rc-table";

/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

const columns = [
  {
    dataIndex: "item",
    key: "item",
    width: 400,
  },
  {
    dataIndex: "currency",
    key: "currency",

    width: 400,
  },
  {
    dataIndex: "initial",
    key: "initial",
    width: 400,
  },
];



const AccDet = () => {

  const [accountData, setAccountData] = useState({
    totalAffiliation:0,
    previousSales:0,
    newSales:0,
    discount:0,
    adjustmentForDg:0,
    generalAdjustmentSale:0,
    totalMembershipFee:0,
    affiliationVat: 0,
    downPaymentRequired:0,
    downpaymentRequiredTotal:0,
    dpRequiredNewSale:0,
    administrationFeeVat:699.00,
    downPayment:0,
    administrationFeePaid:0,
    totalInitialPayment:0,
    downPaymentRemaining:0,
    remainingPrevious:0,
    remainingNext:0,
    amountToBeFinancing:0,
    financingAmountPay:0,
    debitBalancePrevious:0,
    debitBalanceNew:0,
    totalPayments:0
  })

  const onChange= e => {
    setAccountData({
      ...accountData,
      [e.target.name] : parseFloat(e.target.value)
    })
  }

  const {totalAffiliation,previousSales,newSales, discount, adjustmentForDg, generalAdjustmentSale, 
    totalMembershipFee, affiliationVat, downPaymentRequired,downpaymentRequiredTotal, dpRequiredNewSale, administrationFeeVat, 
    downPayment, administrationFeePaid,totalInitialPayment, downPaymentRemaining, remainingPrevious, remainingNext,
    amountToBeFinancing, financingAmountPay, debitBalancePrevious, debitBalanceNew, totalPayments}=accountData
  
  const total_affiliationInput = ( ) =>{ return <div className="d-flex justify-content-end"><p className="pt-4">$</p><Input col="6" disabled={false} type="number" name="totalAffiliation" value={totalAffiliation} onChange={onChange} /></div>}
  const percentageInput = ( ) =>{ return <div className="d-flex justify-content-end"><Input col="6" disabled={false} type="number" name="dpRequiredNewSale" value={dpRequiredNewSale} onChange={onChange} /><strong className="pt-4">%</strong></div>}
  const downPaymentInput = ( ) =>{ return <div className="d-flex justify-content-end"><Input col="6" disabled={false} type="number" name="downPayment" value={downPayment} onChange={onChange} /><strong className="pt-4">$</strong></div>}

const percent=()=>{
  const value= parseFloat((totalAffiliation/100)*dpRequiredNewSale)
  accountData.downpaymentRequiredTotal=value
  return Number.isNaN(value) ? 0 : value;   
}

const downpayPercent=()=>{
  const value= parseFloat((downPayment/totalAffiliation)*100)
  return Number.isNaN(value) ? 0 : value;   
}

  const data = [
    {
      item: "Total affiliation fee", currency: <i className="fas fa-user-cog"> Member inquiry</i>, initial: total_affiliationInput()
    },
    { item: "Previous sale", currency: "", initial: "$0.00" },
    { item: "New sale", currency: "$ New deposit", initial: `$${totalAffiliation}` },
    { item: "Discount", currency: "0.00%", initial: "$0.00" },
    { item: "Adjustment for DG 100%", currency: "0.00%", initial: "$0.00" },
    {
      item: "General adjustment sale", currency: " ", initial: ''},
    { item: "Total membership fee Net", currency: " ", initial: `$${totalAffiliation}` },
    { item: "Affiliation VAT", currency: "0.00% ", initial: "$0.00" },
    { item: "Down payments required at", currency: `${dpRequiredNewSale}%`, initial: `$${downpaymentRequiredTotal}` },
    {
      item: "DP required new sale", currency: percentageInput(), initial:`$${percent()}` },
    { item: "Administration fee (included VAT)", currency: <Checkbox name={'payCommission'} label={'Exclude'} />, initial: `$${administrationFeeVat}` },
    { item: "Down payment", currency: `${downpayPercent()}%` , initial: downPaymentInput()   },
    { item: "Down payment other", currency: <Input type="date" col={7} icon='fas fa-calendar-alt'/>, initial: "$0.00" },
    {
      item: "Administration fee paid", currency: " ", initial: <InfoMembers
        text="$0.00" />
    },
    { item: "Total initial payment", currency: " ", initial: `$${downPayment+administrationFeeVat}`},
    { item: "Down payment remaining", currency: " ", initial: `$${downPayment}` },
    { item: "Remaining (previous)", currency: " ", initial: "$0.00" },
    { item: "Remaining (new)", currency: " ", initial:`$${downPayment}` },
    {item: "Amount to be financed", initial: `$${totalAffiliation-downpaymentRequiredTotal}`},
    { item: "Financing amount paid previous", currency: " ", initial: "$0.00" },
    { item: "Debit balance (previous)", currency: " ", initial: "$0.00" },
    { item: "Debit balance (new)", currency: " ", initial:  `$${totalAffiliation-downpaymentRequiredTotal}` },
    { item: "Total payments", currency: "12", initial: "" },
  
  ];





  return (
    <div className="container">
      <form>
        <Table className="table" columns={columns} data={data} className="table table-striped table-dark" />
      </form>
      {/* <div className="d-flex justify-content-end">
        <Button title='   ' col='1' icon='fas fa-times' typebootstrap='secondary' />
        <Button title='   ' col='1' icon='fas fa-check' typebootstrap='primary' />
      </div> */}
    </div>
  );
};

export default AccDet;
