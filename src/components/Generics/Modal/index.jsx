import { createPortal } from 'react-dom'
import { Container } from './style'

function Modal(props) {
  return props?.open ? createPortal(<Container>{props?.children}</Container>,document.getElementById('modal')):''
}

export default Modal