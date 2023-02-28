import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import React from 'react'
import { useForm } from 'react-hook-form'
import { StyledDivModalUpdate, StyledCloseModalButton } from './styled'
import { useContext } from 'react'
import { CreateModalContext } from '../../Providers/ModalContext'
import { TechContext } from '../../Providers/TechsContext'
import { MdClose } from "react-icons/md"

export const ModalUpdate = () => {

    const UpdateTechForm = yup.object().shape({
        status: yup.string().required(),
    })

    const { setModalUpdate, modalUpdate, currentTech, setCurrentTech } = useContext(CreateModalContext)
    const { updateTechs, removeTechs } = useContext(TechContext)

    const { register, handleSubmit, formState: { erros } } = useForm({
        resolver: yupResolver(UpdateTechForm),
        defaultValues: { status: currentTech?.status }
    })

    const submit = async (formData) => {

        await updateTechs(currentTech.id, formData)
        setCurrentTech(null)
        setModalUpdate(false)
    }


    return (
        <StyledDivModalUpdate>
            <form onSubmit={handleSubmit(submit)} >
                <input type="text" disabled value={currentTech?.title} />
                <label htmlFor="">Selecionar status</label>
                <select name="" id=""{...register('status')}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <button>Atualizar tecnologia</button>
            </form >
            <StyledCloseModalButton onClick={() => {
                setCurrentTech(null)
                setModalUpdate(false)
            }}><MdClose size={24} /></StyledCloseModalButton>
            <button type='button' onClick={() => removeTechs(currentTech.id)}>Excluir</button>
        </StyledDivModalUpdate>
    )
}