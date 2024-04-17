import { ReactNode } from "react"

export interface SidebarProps {
    children?: ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {
    return (
        <>
            <aside>
                {children}
            </aside>
        </>
    )
}

export { Sidebar }