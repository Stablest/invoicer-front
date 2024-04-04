import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { refreshToken } from "../../services/backend/auth"
import { delay } from "../../utils/decorators/delay"

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [cookies] = useCookies(['jwt_at'])

    useEffect(() => {
        const auth = async () => {
            const JWTAccessToken = cookies.jwt_at
            if (!!!JWTAccessToken) {
                setIsLoading(true)
                console.log('TRYING TO REFRESH')
                const response = await refreshToken()
                setIsLoading(false)
                if (!response) {
                    setIsAuthenticated(false)
                }
            }
            setIsLoading(false)
            setIsAuthenticated(true)
        }
        delay(auth, 5000)()
        // auth()
    }, [cookies])

    return [isAuthenticated, isLoading]
}

export { useAuth }
