import { HTMLAttributes, ReactNode } from "react"
import { Loading } from "../Loading"

export interface LoadingWrapperProps {
    isLoading: boolean
    children: ReactNode
}

const LoadingWrapper = ({ isLoading, children, ...rest }: LoadingWrapperProps & HTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div {...rest}>
                {isLoading ?
                    <div className="relative flex justify-center items-center">
                        <Loading></Loading>
                        <div className="invisible">
                            {children}
                        </div>
                    </div>
                    : children}
            </div>
        </>
    )
}

export { LoadingWrapper }