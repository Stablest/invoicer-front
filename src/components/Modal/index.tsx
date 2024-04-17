import { Button } from "@mui/material";
import { ReactNode } from "react"
import { createPortal } from "react-dom"

export interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

const Modal = ({ children, isOpen, onClose, title = '' }: ModalProps) => {

    return (
        <>
            {isOpen && createPortal(
                <div className="absolute top-0 left-0 bg-black opacity-75 w-screen h-screen flex justify-center items-center">
                    <div className="relative p-2 bg-white opacity-100 min-h-40 min-w-52 max-h-[80%] max-w-[80%] flex flex-col rounded-md gap-y-6 overflow-scroll">
                        <div className="w-full flex justify-between items-center">
                            <h2 className="w-1">
                                {title}
                            </h2>
                            <Button onClick={onClose} className="self-end" size="small" sx={{ position: 'relative', minWidth: '2rem' }}>
                                <img src="./close.svg" alt="Close" className="w-8 h-8" />
                            </Button>
                        </div>
                        <div className="">
                            {children}
                            sdas
                        </div>
                    </div>
                </div>, document.body)}
        </>
    )
}

export { Modal }