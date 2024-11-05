import { useLocation } from 'react-router-dom'
useLocation

export const useQuery = () => {
  const {search} = useLocation()
  return new URLSearchParams(search)
}

export default useQuery