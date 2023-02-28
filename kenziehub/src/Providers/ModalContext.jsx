import Modal from 'react-modal'
import { useContext, createContext, useState } from 'react'


export const CreateModalContext = createContext()

export const CreateModalProvider = ({ children }) => {

    const [modal, setModal] = useState(false)
    const [modalUpdate, setModalUpdate] = useState(false)
    const [currentTech, setCurrentTech] = useState(null)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    return(
        <CreateModalContext.Provider value={{ modal, closeModal, openModal, modalUpdate, setModalUpdate, currentTech, setCurrentTech }}>
            {children}
        </CreateModalContext.Provider>
    )
}

