import AnalyticsProvider from "./analystic"
import EmailsProvider from "./emails"
import MediaProvider from "./media"
import MolyaProvider from "./moliya"
import StudentsProvider from "./students"

const provider = [
  EmailsProvider,
  AnalyticsProvider,MolyaProvider,MediaProvider,StudentsProvider
]
const ContextProvider = ({ children }) => {
  return provider.reduceRight((account, Provider) => <Provider>{account}</Provider>, children)
  
}

export default ContextProvider