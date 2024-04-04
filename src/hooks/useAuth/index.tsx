import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { refreshToken } from "../../services/backend/auth"

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [cookies] = useCookies(['jwt_at'])

    useEffect(() => {
        const auth = async () => {
            const JWTAccessToken = cookies.jwt_at
            if (!!!JWTAccessToken) {
                setIsLoading(true)
                const response = await refreshToken()
                setIsLoading(false)
                if (!response) {
                    setIsAuthenticated(false)
                }
            }
            setIsLoading(false)
            setIsAuthenticated(true)
        }
        auth()
    }, [cookies])

    return [isAuthenticated, isLoading]
}

export { useAuth }
