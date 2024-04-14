import { Outlet } from "react-router-dom"
import { RootLayout } from "../../layouts/RootLayout"

const Root = () => {
    return (
        <RootLayout>
            <Outlet></Outlet>
        </RootLayout>
    )
}

export { Root }