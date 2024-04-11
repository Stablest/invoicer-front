import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"

const AuthRoute = () => {
    const navigate = useNavigate()
    const { isAuthenticated, isLoading } = useContext(AuthContext)

    useEffect(() => {
        if (!isLoading) {
            if (isAuthenticated) {
                return navigate('/dashboard')
            }
        }
    }, [isAuthenticated, isLoading])

    return (
        <>
            {(!isLoading && !isAuthenticated) && <Outlet></Outlet>}
        </>
    )
}

export { AuthRoute }