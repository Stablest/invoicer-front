import { HTMLAttributes, ReactNode } from "react"

export interface ErrorProps {
    children: ReactNode
}

const Error = ({ children, className, ...rest }: ErrorProps & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className="text-red-400 text-sm font-medium" {...rest} >{children}</div>
    )
}

export { Error }