import AnalyticsProvider from "./analystic"
import MentorContext from "./moliya"
import UserContext from "./emails"
const provider = [
  UserContext, MentorContext, AnalyticsProvider
]
const ContextProvider = ({ children }) => {
  return (
    provider.reduceRight((account, Provider) => <Provider>{account}</Provider>, children)
  )
}

export default ContextProvider