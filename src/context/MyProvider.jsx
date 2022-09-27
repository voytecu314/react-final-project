import { useState } from "react"
import MyContext from "./MyContext"

export const MyProvider = ({children}) => {

     const [authorized, setAuthorized] = useState(false);

     const hideMap = () => {
       document.getElementById('events').style.display='none';
     }

  return (
    <MyContext.Provider value={{authorized, setAuthorized, hideMap}}>{children}</MyContext.Provider>
  )
}
