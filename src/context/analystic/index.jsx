import { createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer'
export const AnalysticContext = createContext()
const AnalyticsProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState)
  return (<AnalysticContext.Provider value={[state, dispatch]}>{children}</AnalysticContext.Provider>)
}
export default AnalyticsProvider