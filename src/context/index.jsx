import AnalyticsProvider from "./analystic"
import EmailsProvider from "./emails"
import MolyaProvider from "./moliya"

const provider = [
  EmailsProvider,
  AnalyticsProvider,MolyaProvider
]
const ContextProvider = ({ children }) => {
  return provider.reduceRight((account, Provider) => <Provider>{account}</Provider>, children)
  
}

export default ContextProvider