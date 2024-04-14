import { HTMLAttributes } from "react"

export interface ErrorProps {
    errorMessage?: string
}

const Error = ({ errorMessage, className, ...rest }: ErrorProps & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className="text-red-400 text-sm font-medium" {...rest} >{errorMessage}</div>
    )
}

export { Error }