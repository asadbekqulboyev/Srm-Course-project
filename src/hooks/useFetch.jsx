import React from 'react'

export const useFetch = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const request = async (url = '',options)=>{
    let res = await fetch(`${baseURL}${url}`,{
        method:options?.method || 'GET',
    })
    res= await res.json();
    return res
    }
  return request

}
export default useFetch
