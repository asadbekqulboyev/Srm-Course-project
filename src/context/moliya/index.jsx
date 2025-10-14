import { createContext, useReducer } from 'react'
import { initialState,reducer } from './reducer'
export const MolyaContext = createContext()
const MolyaProvider = ({children}) => {
    const [state , dispatch] =useReducer(reducer, initialState)
  return ( <MolyaContext.Provider value={[state,dispatch]}>{children}</MolyaContext.Provider> )
}
export default MolyaProvider