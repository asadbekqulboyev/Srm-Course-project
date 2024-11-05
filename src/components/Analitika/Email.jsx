import React, { useContext, useEffect } from 'react'
import SubTitle from '../Generics/SubTitle'
import { Info ,Section,Wrapper} from './emailStyle'
import { EmailsContext } from '../../context/emails';

function Email() {
    const [state, dispatch] = useContext(EmailsContext);
    const url = import.meta.env.VITE_BASE_URL;
    useEffect(()=>{
      // emails
      fetch(`${url}/tabs/emails`)
      .then(res=>res.json())
      .then((res)=>{
        dispatch({type:"get",payload:res})
      })
    },[])
  return (
    <Wrapper>
        {
            state?.map((eml)=>{
                return(
                    <Info key={eml.id}>
                       <Section>
                        <Info.Img src={eml?.src}/>
                        <div>
                            <SubTitle>
                                {eml.name}
                            </SubTitle>
                            <SubTitle color='#929FAF'>{eml.status}</SubTitle>
                        </div>
                       </Section>
                       <Section>{eml.sms}</Section>
                       <Section end>{eml.date}</Section>
                    </Info>
                )
            })
        }
    </Wrapper>
  )
}

export default Email