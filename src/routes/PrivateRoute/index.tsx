import { Outlet, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/authContext"
import { LoadingWrapper } from "../../components/LoadingWrapper"
import { PrivateLayout } from "./layout"

const PrivateRoute = () => {
    const { isAuthenticated, isLoading } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoading) {
            if (!isAuthenticated) {
                return navigate('/login')
            }
        }
    }, [isAuthenticated, isLoading])

    return (
        <LoadingWrapper isLoading={isLoading}>
            {isAuthenticated &&
                <PrivateLayout>
                    <Outlet></Outlet>
                </PrivateLayout>
            }
        </LoadingWrapper>
    )
}

export { PrivateRoute }