import MentorContext from "./mentor"
import UserContext from "./user"
const provider = [
    UserContext,MentorContext
]
const ContextProvider = ({children}) => {
  return (
    provider.reduceRight((account,Provider)=><Provider>{account}</Provider>,children)
  )
}

export default ContextProvider