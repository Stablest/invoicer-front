import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { LoadingWrapper } from "../../components/Loading/LoadingWrapper"

const PrivateRoute = () => {
    const [isAuthenticated, isLoading] = useAuth()
    return (
        <LoadingWrapper isLoading={isLoading}>
            {isAuthenticated ?
                <Outlet></Outlet> :
                <Navigate to={'/login'}></Navigate>
            }
        </LoadingWrapper>
    )
}

export { PrivateRoute }