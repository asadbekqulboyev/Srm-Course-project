import { useContext, useEffect, useState } from 'react'
import SubTitle from '../Generics/SubTitle'
import {  Wrapper,Fragment,ArrowIcon, DateCard } from './moliyaStyle'
import useDate, { weeks } from '../../hooks/date'
import { MolyaContext } from '../../context/moliya'

function Moliya() {
  const date = useDate()
  const [active, setActive]=useState(new Date().getDate())
  const [weekCount, changeWeek]=useState(0);
  const [today,setToday]=useState({})
  const clickDate = (value)=>{
    let [tdy] = state.filter((val) => val.today == value);
    setToday(tdy);
    setActive(value);
  }

  const onClickForward = ()=>{
    changeWeek(weekCount+2)
  }
  const onClickBackward = ()=>{
    changeWeek(weekCount-2)
  }
  const [state, dispatch] = useContext(MolyaContext);
  const url = import.meta.env.VITE_BASE_URL;
  useEffect(()=>{
    // molya
    fetch(`${url}/tabs/moliya`)
    .then(res=>res.json())
    .then((res)=>{
      let date = new Date().getDate();
      let [tdy]=res.filter((val)=>val.today == date)
      setToday(tdy)
      dispatch({type:"get",payload:res})
    });
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
        {state.map((value)=>{
      let date = new Date(value.day)
      const ac= value.today== active
      
      return( 
        
          <DateCard active = {ac} key={value} onClick={()=>clickDate(value.today)}>
            <SubTitle size={14} color={ac&&'#fff'}> {weeks[date.getDay()]?.short}</SubTitle>
            <SubTitle size={14} color={ac&&'#fff'}> {value.today}</SubTitle>
          </DateCard>
        )})}
      </Fragment>
      <SubTitle color='#929FAF'>
        {date.date} - {date?.month?.full} {date.year}
      </SubTitle>
      <SubTitle size={32} mt={10} mb={20}>{today.students}<SubTitle size={24} color='#53c41a' ml={16}>+22%</SubTitle> </SubTitle>
      <Fragment>
        <div>Talabalar</div>
        <SubTitle>
         {today.video}
        </SubTitle>
      </Fragment>
      <Fragment>
        <div>Darsliklar Sotuvi</div>
        <SubTitle>
          {today.students}
        </SubTitle>
      </Fragment>
    </Wrapper>
  )
}

export default Moliya