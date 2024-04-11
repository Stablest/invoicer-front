import { ReactNode } from "react"

export interface FooterProps {
    children?: ReactNode
}

const Footer = ({ children }: FooterProps) => {
    return (
        <footer>
            {children}
        </footer>
    )
}

export { Footer }