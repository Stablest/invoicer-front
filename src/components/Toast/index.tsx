import { ReactNode, useEffect } from "react"

export interface ToastProps {
    children: ReactNode
    time: number
    open: boolean
    close: () => void
}

const Toast = ({ children, time, open, close }: ToastProps) => {
    useEffect(() => {
        let timer: number;
        if (open) {
            timer = setTimeout(() => {
                close();
            }, time)
        }
        return () => clearTimeout(timer)
    }, [open])

    return (
        <>
            {open &&
                <div className="p-2 absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
                    {children}
                </div>
            }
        </>
    )
}

export { Toast }