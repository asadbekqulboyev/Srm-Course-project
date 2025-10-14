import React, { useEffect, useState } from 'react'
import {Timer} from './style'
function Time() {
    const [date, setDate]=useState({hour:'' ,minut:'',status:''})
    const GetSecond = ()=>{
        setInterval(()=>{
            const date = new Date()
            let hour= date.getHours()
            let minut= date.getMinutes()
            if (hour > 12){  
              setDate((d)=>{return{...d,status:'PM'}})
              hour=hour%12
            }else{
              
              setDate((d)=>{return{...d,status:'AM'}})
            }
            
            setDate((d)=>{
              return{...d,hour,minut}
              })
            
        },1000)
    }
    useEffect(()=>{
       GetSecond()
    },[])
  return (
    <>
    <Timer>{date.hour<10?'0'+ date.hour:date.hour} : {date.minut<10 ?'0'+ date.minut:date.minut}</Timer> 
    <Timer status='true'>{date.status}</Timer>
    </>
    
  )
}

export default Time