import AnalyticsProvider from "./analystic"
import EmailsProvider from "./emails"
import MediaProvider from "./media"
import MolyaProvider from "./moliya"

const provider = [
  EmailsProvider,
  AnalyticsProvider,MolyaProvider,MediaProvider
]
const ContextProvider = ({ children }) => {
  return provider.reduceRight((account, Provider) => <Provider>{account}</Provider>, children)
  
}

export default ContextProvider