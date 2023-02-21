import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DashboardContainer, StyledHeader, StyledHeader_divUpper, StyledHeader_divLower, StyledMain } from './styled'
import { UserInfoContext } from "../../Providers/UserInfoContext"
import Modal from 'react-modal'
import { CreateModalContext } from "../../Providers/ModalContext"



export const DashboardPage = () => {


    const { openModal, closeModal, modal } = useContext(CreateModalContext)
    const { info, exit } = useContext(UserInfoContext)
    const navigate = useNavigate()



    return (
        <DashboardContainer>
            <StyledHeader>
                <StyledHeader_divUpper>
                    <h1>Kenzie Hub</h1>
                    <button onClick={exit}>Sair</button>
                    {/* <button onClick={openModal}>Abrir</button>
                <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                overlayClassName='modal-overlay'>
                    <button onClick={closeModal}>close</button>
                </Modal> */}
  
                </StyledHeader_divUpper>
                <StyledHeader_divLower>
                    {info != null && (<h2>{info.name}</h2>)}
                    {info != null && (<p>{info.course_module}</p>)}
                </StyledHeader_divLower>
            </StyledHeader>
            <StyledMain>
                <button>+</button>
                {/* {info != null && (
                    info.map(element => (
                        <ul>
                            <li>
                                <p>{element.techs.title}</p>
                                <p>{element.techs.status}</p>
                            </li>
                        </ul>
                    ))
                )} */}
                <h2>Que pena! Estamos em desenvolvimento</h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades.</p>
            </StyledMain>
        </DashboardContainer>
    )
}