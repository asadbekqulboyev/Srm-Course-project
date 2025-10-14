import { useEffect, useState } from "react";
import StatusModal from "./StatusModal";
import { Icon } from "./style";

export const Status = ({value})=>{
   
    switch(value){
        case "keldi":return<Icon.Keldi/>
        case "sbabli":return<Icon.Sababli/>;
        case "sababsiz":return<Icon.Sababsiz/>;
        case "birinchi":return<Icon.Birinchi/>;
        default :value
    }
}
const StatusWrapper = ({value})=>{
    const [open,setOpen]= useState(false)
    const [align,setAlign]= useState({x:0,y:0})
    useEffect(()=>{
    document.addEventListener('mousedown',()=>{
      setOpen(false)
    })

    },[])
    return(
<div 
            style={{
                display:'flex',
                justifyContent:'center'
            }}
            onClick={(e)=>{
            setAlign({x:e.pageX,y:e.pageY})
            setOpen(true)}
            }>
            <StatusModal open={open} align={align} />
            <Status value={value}/>
        </div>
    )
}

export default StatusWrapper