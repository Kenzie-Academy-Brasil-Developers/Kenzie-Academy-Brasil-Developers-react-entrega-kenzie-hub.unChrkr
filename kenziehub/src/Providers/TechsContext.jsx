import { createContext, useContext, useEffect } from "react"
import { useState } from "react"
import { api } from "../Sevices/api.jsx"
import { UserInfoContext } from "./UserInfoContext.jsx"
import { ToastContainer, toast } from 'react-toastify';




export const TechContext = createContext()

export const TechContextProvider = ({ children }) => {

  const { info, setInfo } = useContext(UserInfoContext)
  const [techs, setTechs] = useState([])

  useEffect(() => {
    if (info) {
      setTechs(info.techs)
    }
  }, [info])


  async function createTechs(data) {
    try {
      const userToken = localStorage.getItem('userToken')
      const response = await api.post('/users/techs', data, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      })
      setTechs([...techs, data])
      toast.success('Tecnologia criada com sucesso.')
    } catch (error) {
      toast.error('Tecnologia já existente')
    }
  }


  const removeTechs = async (techsID) => {
    try {
      const userToken = localStorage.getItem('userToken')
      const response = await api.delete(`/users/techs/${techsID}`, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      })

      toast.success('Tecnologia deletada com sucesso')

      const updatedTechs = techs.filter(element => element.id !== techsID);
      setTechs(updatedTechs);
    } catch (error) {
      console.log(error);
    }
  }

  const updateTechs = async (techsID, formData) => {
    try {
      const userToken = localStorage.getItem('userToken')
      const response = await api.put(`/users/techs/${techsID}`, formData, {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      })
      toast.success('Tecnologia atualizada com sucesso')
      const updatedTechs = techs.map(tech => {
        if (techsID === tech.id) {
          return { ...tech, ...formData };
        } else {
          return techs
        }
      })
      setTechs(updatedTechs)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <TechContext.Provider value={{ techs, setTechs, createTechs, removeTechs, updateTechs }}>
      {children}
    </TechContext.Provider>
  )
}


