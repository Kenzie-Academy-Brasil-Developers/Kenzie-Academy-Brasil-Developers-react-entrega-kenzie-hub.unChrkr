import { createContext, useContext } from "react"
import { useState } from "react"
import { api } from "../Sevices/api"
import { UserInfoContext } from "./UserInfoContext.jsx"



export const CreateUserContext = createContext()

export const CreateUserProvider = ({ children }) => {

  const { info } = useContext(UserInfoContext)
  const userTechs = info?.techs
  const [techs, setTechs] = useState(userTechs)


  async function createTechs() {
    try {
      const response = await api.post('/users/techs')
      setTechs(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <CreateUserContext.Provider value={{ techs, createTechs }}>
      {children}
    </CreateUserContext.Provider>
  )

}


