import { ReactNode } from "react"
import { Loading } from ".."

export interface LoadingWrapperProps {
    isLoading: boolean
    children: ReactNode
}

const LoadingWrapper = ({ isLoading, children }: LoadingWrapperProps) => {
    return (
        <>
            {isLoading ? <Loading></Loading> : children}
        </>
    )
}

export { LoadingWrapper }