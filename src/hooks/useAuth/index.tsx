import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useRefreshToken } from "../queries/auth/useRefreshToken"

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [cookies, _, removeCookie] = useCookies(['jwt_at', 'jwt_rt'])
    const [isLoading, setIsLoading] = useState(true);
    useRefreshToken(cookies.jwt_at, cookies.jwt_rt)

    const logout = () => {
        removeCookie("jwt_rt");
        removeCookie("jwt_at");
    }

    useEffect(() => {
        const auth = async () => {
            setIsLoading(true)
            const JWTAccessToken = cookies.jwt_at as string
            if (JWTAccessToken) {
                setIsLoading(false);
                return setIsAuthenticated(true)
            }
            setIsLoading(false);
            setIsAuthenticated(false)
        }
        auth()
    }, [cookies])
    return { isAuthenticated, isLoading, logout }
}

export { useAuth }
