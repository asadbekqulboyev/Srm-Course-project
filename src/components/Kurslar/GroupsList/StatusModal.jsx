import React from 'react'
import { ModalContainer ,Arrow,StatusWrapper,Icon} from './style'

const StatusModal = ({open,align}) => {
  return open ? (
    <ModalContainer x={align.x} y={align.y}>
      <Arrow />
      <StatusWrapper>
        <Icon.Keldi/> Keldi
      </StatusWrapper>
      <StatusWrapper>
        <Icon.Birinchi/> Birinchi dars
      </StatusWrapper>
      <StatusWrapper>
        <Icon.Sababli/> Sababli
      </StatusWrapper>
      <StatusWrapper>
        <Icon.Sababsiz/>Sababsiz
      </StatusWrapper>
      </ModalContainer>
  ):''
}

export default StatusModal