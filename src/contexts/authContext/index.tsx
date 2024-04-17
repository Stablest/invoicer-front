import { createContext, ReactNode } from "react"
import { useAuth } from "../../hooks/useAuth"

export interface AuthProvidesProps {
    children: ReactNode
}

const AuthContext = createContext({ isAuthenticated: false, isLoading: false, logout: () => { } })

const AuthProvider = ({ children }: AuthProvidesProps) => {
    const { isAuthenticated, isLoading, logout } = useAuth()

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }