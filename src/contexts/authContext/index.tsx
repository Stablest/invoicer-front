import { createContext, ReactNode } from "react"
import { useAuth } from "../../hooks/useAuth"

export interface AuthProvidesProps {
    children: ReactNode
}

const AuthContext = createContext({ isAuthenticated: false, isLoading: false })

const AuthProvider = ({ children }: AuthProvidesProps) => {
    const { isAuthenticated, isLoading } = useAuth()

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }