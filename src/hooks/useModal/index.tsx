import { useState } from "react"

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = (newTitle: string) => {
        setTitle(newTitle)
        setIsOpen(true)
    }

    return { isOpen, closeModal, openModal, title }
}

export { useModal }