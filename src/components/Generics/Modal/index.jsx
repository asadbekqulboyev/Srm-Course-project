import { createPortal } from 'react-dom'
import { Container, Footer, Wrapper } from './style'
import GenericButton from '../Button'

export function Modal(props) {
    return props?.open ? createPortal(
        <Container >
            <Wrapper>
                {props?.children}
                <Footer>
                    {props?.onClose && <GenericButton onClick={props.onClose} type='delete'> O'chirish</GenericButton>}
                    {props?.onSave && <GenericButton onClick={props?.onSave} type='add'> Saqlash</GenericButton>}
                </Footer>



            </Wrapper></Container>, document.getElementById('modal')) : ''
}

export default Modal