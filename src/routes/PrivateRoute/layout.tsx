import { ReactNode } from "react"
import { Sidebar } from "../../components/SideBar"

export interface PrivateLayoutProps {
    children: ReactNode
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
    return (
        <>
            <div className="w-full h-full">
                <Sidebar></Sidebar>
                {children}
            </div>
        </>
    )
}

export { PrivateLayout }