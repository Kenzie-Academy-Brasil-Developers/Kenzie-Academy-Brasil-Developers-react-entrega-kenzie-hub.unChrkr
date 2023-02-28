import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { TechContext } from "./TechsContext";




export const UserInfoContext = createContext({})


export const UserInfoProvider = ({ children }) => {

    const navigate = useNavigate()

    const [info, setInfo] = useState(null)

    useEffect(() => {
        const autoLoginUser = async () => {
            const userToken = localStorage.getItem('userToken')
            if (userToken) {
                try {
                    const response = await axios.get('https://kenziehub.herokuapp.com/profile', {
                        headers: {
                            'Authorization': `Bearer ${userToken}`
                        }
                    })
                    setInfo(response.data)
                    navigate('dashboardpage')
                } catch (error) {
                    console.log(error)
                }
            }
        }
        autoLoginUser()
    }, [])

    const exit = () => {
        localStorage.clear()
        navigate('/')
    }


    const userLogin = async (data) => {
        try {
            const response = await axios.post('https://kenziehub.herokuapp.com/sessions', data)
            localStorage.setItem('userToken', response.data.token)
            localStorage.setItem('userId', response.data.user.id)
            setInfo(response.data.user)
            navigate('/dashboardpage')

        } catch (error) {
            toast.error('Usuário não existente')
        }
    }


    const userRegister = async (data) => {
        try {
            await axios.post('https://kenziehub.herokuapp.com/users', data)
            navigate('/')
            toast.success('Cadastro realizado com sucesso!')
        } catch (error) {
            toast.error('Usuário já existente')
        }
    }


    return (
        <UserInfoContext.Provider value={{ info, setInfo, userLogin, userRegister, exit }}>
            {children}
        </UserInfoContext.Provider>
    )
}
