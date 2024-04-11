export interface ErrorFallbackProps {
    error: Error,
    resetErrorBoundary: () => unknown
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
    return (
        <div>
            <h2>Something went wrong...{error.message}</h2>
            <button onClick={resetErrorBoundary}></button>
        </div>
    )
}

export { ErrorFallback }