import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DashboardContainer, StyledHeader, StyledHeader_divUpper, StyledHeader_divLower, StyledMain } from './styled'


export const DashboardPage = ({ }) => {


    const [info, setInfo] = useState([null])

    const navigate = useNavigate()

    const Exit = () => {
        localStorage.clear()
        navigate('/')
    }

    useEffect(() => {
        const SubmitFunction = async () => {
            const userToken = localStorage.getItem('userToken')
            try {
                const response = await axios.get('https://kenziehub.herokuapp.com/profile', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`
                    }
                })
                setInfo(response.data)
            } catch (error) {

            }
        }
        SubmitFunction()
    }, [])


    console.log(info)


    return (
        <DashboardContainer>
            <StyledHeader>
                <StyledHeader_divUpper>
                    <h1>Kenzie Hub</h1>
                    <button onClick={Exit}>Sair</button>
                </StyledHeader_divUpper>
                <StyledHeader_divLower>
                    {info != null && (<h2>{info.name}</h2>)}
                    {info != null && (<p>{info.course_module}</p>)}
                </StyledHeader_divLower>
            </StyledHeader>
            <StyledMain>
                <h2>Que pena! Estamos em desenvolvimento</h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades.</p>
            </StyledMain>
        </DashboardContainer>
    )
}