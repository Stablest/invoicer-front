import { Button, InputProps, TextField } from "@mui/material"
import { FormEvent } from "react"
import { LoadingWrapper } from "../../components/LoadingWrapper"
import { Error } from "../../components/Error"
import { ILogin } from "../../hooks/queries/auth/useLogin/login.interface"
import { useLogin } from "../../hooks/queries/auth/useLogin"




const Login = () => {
    const { isPending, error, mutate } = useLogin()

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const elements = event.currentTarget.elements
        const email = (elements.namedItem('email') as InputProps).value as string
        const password = (elements.namedItem('password') as InputProps).value as string
        const signDTO: ILogin = { email, password }
        mutate(signDTO)
    }

    return (
        <div className="w-full h-full">
            <LoadingWrapper isLoading={isPending} className="mt-40 w-full h-full flex flex-col justify-center items-center gap-y-6">
                <div className="px-16 text-center flex flex-col gap-y-1">
                    <h2 className="font-semibold">Welcome to Invoicer</h2>
                    <h4>Please log in with your e-mail and password.</h4>
                </div>
                <form action="" onSubmit={handleFormSubmit} className="px-8 flex flex-col justify-center gap-y-4 w-full max-w-96">
                    <TextField type="email" id="email" placeholder="E-mail"></TextField>
                    <TextField type="password" id='password' placeholder="Password" autoComplete="true"></TextField>
                    {!!error && <Error>{error.message}</Error>}
                    <Button type="submit" variant="contained" size="large">Log In</Button>
                </form>
            </LoadingWrapper>
        </div>
    )
}

export { Login }