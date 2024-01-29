import React, { createContext,  useState } from 'react'


export const MyContext=createContext()
export default function AppContext ({children}) {
const [user,setUser]=useState("abcd")
 
  return (
   <MyContext.Provider value={{user,setUser}}>
{children}



   </MyContext.Provider> 
  )
  }

