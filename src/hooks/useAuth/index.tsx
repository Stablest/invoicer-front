import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useRefreshToken } from "../queries/auth/useRefreshToken"

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [cookies] = useCookies(['jwt_at', 'jwt_rt'])
    const { isLoading } = useRefreshToken(cookies.jwt_at, cookies.jwt_rt)

    useEffect(() => {
        const auth = async () => {
            const JWTAccessToken = cookies.jwt_at as string
            if (JWTAccessToken) {
                return setIsAuthenticated(true)
            }
            setIsAuthenticated(false)
        }
        auth()
        console.log({ isAuthenticated })
    }, [cookies])
    return { isAuthenticated, isLoading }
}

export { useAuth }
