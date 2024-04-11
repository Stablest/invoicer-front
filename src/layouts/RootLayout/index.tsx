import { ReactNode } from "react"
import { Header } from "./Header"
import { Main } from "./Main"
import { Footer } from "./Footer"

export interface RootLayoutProps {
    children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <>
            <Header></Header>
            <Main>{children}</Main>
            <Footer></Footer>
        </>
    )
}

export { RootLayout }