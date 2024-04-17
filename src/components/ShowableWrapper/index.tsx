import { ReactNode } from "react"

export interface ShowableWrapperProps {
    children: ReactNode
    shown: boolean
}

const ShowableWrapper = ({ children, shown }: ShowableWrapperProps) => {
    return (
        <>
            {shown && children}
        </>
    )
}

export { ShowableWrapper }