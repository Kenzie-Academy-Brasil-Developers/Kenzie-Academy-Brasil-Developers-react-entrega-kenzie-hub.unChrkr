import Modal from 'react-modal'
import { useContext, createContext, useState } from 'react'


export const CreateModalContext = createContext()

export const CreateModalProvider = ({ children }) => {

    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    return(
        <CreateModalContext.Provider value={{ modal, closeModal, openModal }}>
            {children}
        </CreateModalContext.Provider>
    )
}

