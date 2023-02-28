import { useContext, useEffect, useState } from "react"
import { DashboardContainer, StyledHeader, StyledHeader_divUpper, StyledHeader_divLower, StyledMain, StyledSpan, StyledUl, StyledLi, StyledClass, StyledDivModal, StyledCloseModalButton } from './styled'
import { UserInfoContext } from "../../Providers/UserInfoContext"
import Modal from 'react-modal'
import { CreateModalContext } from "../../Providers/ModalContext"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { TechContext } from "../../Providers/TechsContext"
import { ModalUpdate } from '../ModalUpdate'



export const DashboardPage = () => {


    const { openModal, closeModal, modal, modalUpdate, updateCloseModal, setModalUpdate, setCurrentTech } = useContext(CreateModalContext)
    const { info, exit } = useContext(UserInfoContext)
    const { createTechs, techs } = useContext(TechContext)


    const CreateTechForm = yup.object().shape({
        title: yup.string().required(),
        status: yup.string().required(),
    })

    const { register, handleSubmit, formState: { erros } } = useForm({
        resolver: yupResolver(CreateTechForm),
    })




    // const submit = async (data) => {
    //     await createTechs(data)
    //     console.log(data)
    // }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            padding: '0px',
            border: 'none',
        },
    };



    return (
        <DashboardContainer>
            <StyledHeader>
                <StyledHeader_divUpper>
                    <h1>Kenzie Hub</h1>
                    <button onClick={exit}>Sair</button>
                </StyledHeader_divUpper>
                <StyledHeader_divLower>
                    {info != null && (<h2>Olá, {info.name}</h2>)}
                    {info != null && (<p>{info.course_module}</p>)}
                </StyledHeader_divLower>
            </StyledHeader>
            <StyledMain>
                <StyledSpan>
                    <p>Tecnologias</p>
                    <button onClick={openModal}>+</button>
                </StyledSpan>
                {techs.length > 0 ?
                    <StyledUl>
                        {techs.map((tech) => (
                            <StyledLi key={tech.id} onClick={(event) => { 
                                event.stopPropagation()
                                setModalUpdate(true)
                                setCurrentTech(tech)
                                 }}>
                                <p>{tech.title}</p>
                                <StyledClass>
                                    <p>{tech.status}</p>
                                </StyledClass>
                            </StyledLi>
                        ))}
                    </StyledUl>
                    : <p>Nenhuma tecnologia cadastrada!</p>
                }

                <Modal
                    isOpen={modal}
                    onRequestClose={closeModal}
                    overlayClassName='modal-overlay'
                    style={customStyles}>
                    <StyledDivModal>
                        <span>
                            <p>Cadastrar tecnologia</p>
                        </span>
                        <form onSubmit={handleSubmit(createTechs)}>
                            <label htmlFor="">Nome</label>
                            <input type="text" {...register('title')} />
                            {/* <select name="" id="" {...register('title')}>
                            <option value="react">React JS</option>
                            <option value="next">Next JS</option>
                            <option value="material">Material UI</option>
                            <option value="styledComponents">Styled-Components</option>
                            <option value="chakra">Chakra UI</option>
                        </select> */}
                            <label htmlFor="">Selecionar status</label>
                            <select name="" id=""{...register('status')}>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                            <button type="submit">Cadastrar tecnologia</button>
                        </form>

                        <StyledCloseModalButton onClick={closeModal}>x</StyledCloseModalButton>
                    </StyledDivModal>
                </Modal>
                <Modal
                    isOpen={modalUpdate}
                    onRequestClose={updateCloseModal}
                    overlayClassName='modal-overlay'
                    style={customStyles}>
                    <ModalUpdate />

                </Modal>
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
            </StyledMain>
        </DashboardContainer>
    )
}