import { useContext, useEffect } from 'react'
import SubTitle from '../Generics/SubTitle'
import { Container, Wrapper, Card, Section, Plus, Counter, Arrow, SubCard, FooterWrapper } from './style'
import Title from '../Generics/Title'
import Email from './Email'
import {mediaIcon, privateData } from '../../utils/analitics'
import Moliya from './Moliya'
import { AnalysticContext } from '../../context/analystic'
import { EmailsContext } from '../../context/emails'
import { MediaContext } from '../../context/media'
// import { MolyaContext } from '../../context/moliya'
function Analitika() {
  const [state, dispatch] = useContext(AnalysticContext);
  const [media, mediaDispatch] = useContext(MediaContext);
  const [email] = useContext(EmailsContext);

  const url = import.meta.env.VITE_BASE_URL;
  const getAnalystic = ()=>{
    fetch(`${url}/tabs/analytics_page`)
    .then(res=>res.json())
    .then(([res])=>{
      dispatch({type:"get",payload:res})
    })
  }
  const getMedia = ()=>{
    fetch(`${url}/tabs/media`)
    .then(res=>res.json())
    .then((res)=>{
      mediaDispatch({type:"get",payload:res})
    })
  }
  useEffect(()=>{
    // general
    getAnalystic();
    getMedia()
 
  },[])
  return (
    <Container>
      <Title type='primary'>Analitika</Title>
      <Wrapper mt={16} gap={24}>
        {privateData?.map((value) => {
          const { icon: Icon } = value
          const { img: Img } = value
          return (
            <Card key={value.id} gap={24} title={value?.title}>
              <Section gap={24}>
                <Section gap={20} title={value?.title}>
                  <Icon className='icon' />
                  <Title type='primary'>
                    {value.title}
                  </Title>
                </Section>
                <Plus title={value.title} />
              </Section>
              <Section>
                <Section gap={20}>
                  <Title type='primary'>
                    <Arrow /> <Counter >{state[value?.count]}</Counter>
                  </Title>
                </Section>
                <Img />
              </Section>
            </Card>
          )
        })}
      </Wrapper>
      <SubTitle mt={24}>
        Ijtimoiy tarmoqlar
      </SubTitle>
      <Wrapper mt={16} gap={24}>
        {media?.map((value,i) => {
          const { [i+1]: Icon } = mediaIcon;
          return (
            <SubCard key={value.id} gap={24} title={value.title}>
              <Section gap={24}>
                <Section gap={10} title={value.title}>
                  {Icon&& <Icon className='subicon' /> }
                  <SubTitle>
                    {value.title}
                  </SubTitle>
                </Section>
              </Section>
              <Section>
                <Section gap={20}>
                  <Title type='primary' color="#52C41A">
                    <Arrow />
                    22%
                  </Title>
                  <Counter >{(Number(value.subscribers) / 1000).toFixed(2)}K</Counter>
                </Section>
              </Section>
            </SubCard>
          )
        })}
      </Wrapper>

      <FooterWrapper>
        <FooterWrapper.Email>
          <SubTitle mt={24} count={email.length} mb={12}>
            Ijtimoiy tarmoqlar
          </SubTitle>
          <Email />
        </FooterWrapper.Email>

        <FooterWrapper.Moliya>
          <SubTitle mt={24} mb={12}>
            Ijtimoiy tarmoqlar
          </SubTitle>
          <Moliya />
        </FooterWrapper.Moliya>
      </FooterWrapper>


    </Container>
  )
}

export default Analitika