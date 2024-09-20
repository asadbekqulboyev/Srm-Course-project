import React from 'react'
import { Button,Icons } from './style'

const GenericButton = (props) => {
    const { children, type } = props
    switch (type) {
        case 'filter':
            return <Button.Filter {...props}><Icons.Filter/> {children}</Button.Filter>
        case 'import':
            return <Button.Import {...props}><Icons.Import/> {children}</Button.Import>
        case 'save':
        case 'primary':
            return <Button.Primary {...props}>{children}</Button.Primary>
        case 'delete':
            return <Button.Delete {...props}>{children}</Button.Delete>
        case 'add':
            return <Button.Add {...props}><Icons.Plus/>{children}</Button.Add>
        default:return  <Button {...props}>{children}</Button>
    }
}

export default GenericButton