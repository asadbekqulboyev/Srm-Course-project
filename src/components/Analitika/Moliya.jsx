import { useContext, useEffect, useState } from 'react'
import SubTitle from '../Generics/SubTitle'
import {  Wrapper,Fragment,ArrowIcon, DateCard } from './moliyaStyle'
import useDate, { weeks } from '../../hooks/date'
import { MolyaContext } from '../../context/moliya'

function Moliya() {
  const date = useDate()
  const [active, setActive]=useState(new Date().getDate())
  const [weekCount, changeWeek]=useState(0)
  const clickDate = (value)=>{
    if(date.week(weekCount)[0].getDate()==value.getDate()) changeWeek(weekCount - 1)
      else if(date.week(weekCount)[6].getDate()==value.getDate()) changeWeek(weekCount + 1)
   setActive(value.getDate())
  }

  const onClickForward = ()=>{
    changeWeek(weekCount+2)
  }
  const onClickBackward = ()=>{
    changeWeek(weekCount-2)
  }
  const [moliya, dispatch] = useContext(MolyaContext);
  const url = import.meta.env.VITE_BASE_URL;
  useEffect(()=>{
    // molya
    fetch(`${url}/tabs/moliya`)
    .then(res=>res.json())
    .then(([res])=>{
      dispatch({type:"get",payload:res})
    })
  },[])
  return (
    <Wrapper>
      <Fragment>
      <ArrowIcon left onClick={onClickForward}/>
      <SubTitle>
       {date?.month?.full} {date.year}
      </SubTitle>
      <ArrowIcon onClick={onClickBackward} />
      </Fragment>
      <Fragment mt='16px' mb='16px'>
        {date?.week(weekCount)?.map((value)=>{
      const ac= active== value.getDate()
      return( 
          <DateCard active = {ac} key={value} onClick={()=>clickDate(value)}>
            <SubTitle size={14} color={ac&&'#fff'}>{weeks[value.getDay()]?.short}</SubTitle> 
            <SubTitle size={14} color={ac&&'#fff'}>{value.getDate()}</SubTitle>
          </DateCard>
        )})}
      </Fragment>
      <SubTitle color='#929FAF'>
        {date.date} - {date?.month?.full} {date.year}
      </SubTitle>
      <SubTitle size={32} mt={10} mb={20}>8 520 000 <SubTitle size={24} color='#53c41a' ml={16}>+22%</SubTitle> </SubTitle>
      <Fragment>
        <div>Talabalar</div>
        <SubTitle>
          5 760 00
        </SubTitle>
      </Fragment>
      <Fragment>
        <div>Darsliklar Sotuvi</div>
        <SubTitle>
          2 760 00
        </SubTitle>
      </Fragment>
    </Wrapper>
  )
}

export default Moliya