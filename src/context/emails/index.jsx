import { createContext, useReducer } from 'react'
import { initialState,reducer } from './reducer'
const Emails = createContext()
const EmailsContext = ({children}) => { 
    const [state , dispatch] =useReducer(reducer, initialState)
  return ( <Emails.Provider value={[state,dispatch]}>{children}</Emails.Provider> )
}
export default EmailsContext