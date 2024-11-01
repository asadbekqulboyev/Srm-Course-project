import check from '../assets/icons/sozlamalar/check.svg?react'
import filiallar from '../assets/icons/sozlamalar/filiallar.svg?react'
import sms from '../assets/icons/sozlamalar/sms.svg?react'
import sorov from '../assets/icons/sozlamalar/sorov.svg?react'
import call from '../assets/icons/sozlamalar/call.svg?react'
import CheckView from '../view/Sozlamalar/Check'
import FiliallarView from '../view/Sozlamalar/Filiallar'
import XabarnomaView from '../view/Sozlamalar/Xabarnoma'
import SorovnomaView from '../view/Sozlamalar/Sorovnoma'
import CallConfigView from '../view/Sozlamalar/CallConfig'
import TolovlarView from '../view/Sozlamalar/Tolovlar'
import DarajalarView from '../view/Sozlamalar/Darajalar'
import { KpiWiew } from '../view/Sozlamalar/KPI'
import { OylikWiew } from '../view/Sozlamalar/Oylik'
import TolovlarStudentView from '../view/Sozlamalar/TolovlarStudent'
import KategoryWiev from '../view/Sozlamalar/Kategoryalar'


export const sozlamalar = [
    {id:1,icon:check,element:CheckView,path:'check',title:'Check'},
    {id:2,icon:filiallar,element:FiliallarView,path:'filiallar',title:'Filiallar'},
    {id:3,icon:sms,element:XabarnomaView,path:'xabarnomalar',title:'Xabarnomalar'},
    {id:4,icon:sorov,element:SorovnomaView,path:'sorovnoma',title:'So\'rovnoma'},
    {id:5,icon:call,element:CallConfigView,path:'status',title:'Status'},
];
export const manager = [
    {id:1,icon:check,element:TolovlarView,path:'tolovlar',title:'Tolovlar'},
    {id:2,icon:filiallar,element:DarajalarView,path:'darajalar',title:'Darajalar'}
];
export const ustoz = [
    {id:1,icon:check,element:KpiWiew,path:'kpi',title:'Kpi'},
    {id:2,icon:filiallar,element:OylikWiew,path:'oylik',title:'Oylik'}
];
export const student = [
    {id:1,icon:check,element:TolovlarStudentView,path:'tolovlar',title:'Tolovlar'},
    {id:2,icon:filiallar,element:KategoryWiev,path:'kategory',title:'Kategoriya'}
];

