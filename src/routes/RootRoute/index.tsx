import { ReactNode, useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { RootLayout } from "../../layouts/RootLayout"
import { AuthContext } from "../../contexts/authContext"

export interface RootProps {
    children: ReactNode
}

const Root = () => {
    const navigate = useNavigate()
    const { isAuthenticated, isLoading } = useContext(AuthContext)

    useEffect(() => {
        if (!isLoading) {
            if (isAuthenticated) {
                navigate('dashboard')
            } else {
                navigate('auth/login')
            }
        }
    }, [isAuthenticated, isLoading])

    return (
        <RootLayout>
            <Outlet></Outlet>
        </RootLayout>
    )
}

export { Root }