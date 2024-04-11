import { ReactNode } from "react"

export interface MainProps {
    children: ReactNode
}

const Main = ({ children }: MainProps) => {
    return (
        <main className="w-full h-full">
            {children}
        </main>
    )
}

export { Main }