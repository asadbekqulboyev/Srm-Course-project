import check from '../assets/icons/sozlamalar/check.svg?react'
import filiallar from '../assets/icons/sozlamalar/filiallar.svg?react'
import sms from '../assets/icons/sozlamalar/sms.svg?react'
import sorov from '../assets/icons/sozlamalar/sorov.svg?react'
import call from '../assets/icons/sozlamalar/call.svg?react'
import Generics from '../view/Generics'
import CheckView from '../view/Sozlamalar/Check'
import FiliallarView from '../view/Sozlamalar/Filiallar'
import XabarnomaView from '../view/Sozlamalar/Xabarnoma'
export const sozlamalar = [
    {id:1,icon:check,element:CheckView,path:'check',title:'Check'},
    {id:2,icon:filiallar,element:FiliallarView,path:'filiallar',title:'Filiallar'},
    {id:3,icon:sms,element:XabarnomaView,path:'xabarnomalar',title:'Xabarnomalar'},
    {id:4,icon:sorov,element:Generics,path:'sorovnoma',title:'So\'rovnoma'},
    {id:5,icon:call,element:Generics,path:'status',title:'Status'},
]