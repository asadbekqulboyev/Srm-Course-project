import React from 'react'
import SubTitle from '../Generics/SubTitle'
import { email } from '../../mock/email'
import { Info ,Section,Wrapper} from './emailStyle'

function Email() {
  return (
    <Wrapper>
        {
            email.map((eml)=>{
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