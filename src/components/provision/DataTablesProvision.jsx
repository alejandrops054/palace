/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import {Checkbox} from '../index'
//Extra Cost Per Year 
export const columns1 = [
    {title: 'Years From',dataIndex: 'Years_From',key: '1',width: 120,align: 'center'},
    {title: 'Days From',dataIndex: 'Days_From',key: '2',width: 120,align: 'center'},
    {title: 'Years To',dataIndex: 'Years_To',key: '3',width: 120,align: 'center'},
    {title: 'Extra Cost',dataIndex: 'Extra_Cost',key: '4',width: 120,align: 'center'},
    {title: 'Period',dataIndex: 'Period',key: '5',width: 120,align: 'center'},
    {title: 'Validity Day',dataIndex: 'Validity_Day',key: '5',width: 120,align: 'center'},

]
export const data1 =[
    {Years_From:'2',Days_From:'2',Years_To:'2',Extra_Cost:'$100.00',Period:'1',Validity_Day:'1'},
    {Years_From:'2',Days_From:'2',Years_To:'2',Extra_Cost:'$100.00',Period:'1',Validity_Day:'1'},
    {Years_From:'2',Days_From:'2',Years_To:'2',Extra_Cost:'$100.00',Period:'1',Validity_Day:'1'},
    {Years_From:'2',Days_From:'2',Years_To:'2',Extra_Cost:'$100.00',Period:'1',Validity_Day:'1'},

  
]

// Hotels
export const columns2 = [
    {title: 'Select',dataIndex: 'Select',key: '1',width: 50,align: 'center'},
    {title: 'Code',dataIndex: 'Code',key: '2',width: 50,align: 'center'},
    {title: 'Description',dataIndex: 'Description',key: '3',width: 100,align: 'center'},
    {title: 'Status',dataIndex: 'Status',key: '4',width: 60,align: 'center'},
    {title: 'Country',dataIndex: 'Country',key: '5',width: 100,align: 'center'},
]
export const data2 =[
    {Select:<Checkbox/>,Code:'BP',Description:'Cozumel Palace',Status:'Alta',Country:'Mexico'},
    {Select:<Checkbox/>,Code:'BP',Description:'Cozumel Palace',Status:'Alta',Country:'Mexico'},
    {Select:<Checkbox/>,Code:'BP',Description:'Cozumel Palace',Status:'Alta',Country:'Mexico'},
    {Select:<Checkbox/>,Code:'BP',Description:'Cozumel Palace',Status:'Alta',Country:'Mexico'},
    {Select:<Checkbox/>,Code:'BP',Description:'Cozumel Palace',Status:'Alta',Country:'Mexico'},

 
]

//reports language
export const columns3 = [
    {title: 'Languages',dataIndex: 'Languages',key: '1',width: 'auto',align: 'center'},
    {title: 'Specifications',dataIndex: 'Specifications',key: '2',width: 200,align: 'center'},
]
export const data3 =[
    {Languages:'English',Specifications:'All Inclusive Plus Plan'},
    {Languages:'Portuguese',Specifications:'Sistema Tudo Incluido Plus'},
    {Languages:'Spanish',Specifications:'Plan todo Incluido Plus'}
]