import { useState } from "react"
import MyContext from "./MyContext"

export const MyProvider = ({children}) => {

     const [authorized, setAuthorized] = useState(false);

  return (
    <MyContext.Provider value={{authorized, setAuthorized}}>{children}</MyContext.Provider>
  )
}
