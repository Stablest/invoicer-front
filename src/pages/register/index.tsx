import { FormEvent, useState } from "react"
import { useRegister } from "../../hooks/queries/auth/useRegister"
import { LoadingWrapper } from "../../components/LoadingWrapper"
import { Button, TextField } from "@mui/material"
import { IRegisterFormFields } from "../../hooks/queries/auth/useRegister/register.interface"
import { Error } from "../../components/Error"

const Register = () => {
    const { isPending, error, mutate } = useRegister()
    const [registerFormFields, setRegisterFormFields] = useState<IRegisterFormFields>({ email: '', password: '', firstName: '', lastName: '' })

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        mutate(registerFormFields)
    }

    const handleFormFieldChange = (newValue: IRegisterFormFields) => {
        setRegisterFormFields(newValue)
    }

    return (
        <div className="w-full h-full">
            <LoadingWrapper isLoading={isPending} className="mt-40 w-full h-full flex flex-col justify-center items-center gap-y-6">
                <div className="px-16 text-center flex flex-col gap-y-1">
                    <h2 className="font-semibold">Sign up</h2>
                    <h4>Create your account</h4>
                </div>
                <form action="" onSubmit={handleFormSubmit} className="px-8 flex flex-col justify-center gap-y-4 w-full max-w-96">
                    <TextField type="email" label='E-mail' placeholder="E-mail" required value={registerFormFields.email} onChange={(event) => handleFormFieldChange({ ...registerFormFields, email: event.currentTarget.value })}></TextField>
                    <TextField type="password" label='Password' placeholder="Password" inputProps={{ minLength: 8, maxLength: 40 }} required value={registerFormFields.password} onChange={(event) => handleFormFieldChange({ ...registerFormFields, password: event.currentTarget.value })}></TextField>
                    <TextField type="text" label='First Name' placeholder="First Name" required value={registerFormFields.firstName} onChange={(event) => handleFormFieldChange({ ...registerFormFields, firstName: event.currentTarget.value })}></TextField>
                    <TextField type="text" label='Last Name' placeholder="Last Name" required value={registerFormFields.lastName} onChange={(event) => handleFormFieldChange({ ...registerFormFields, lastName: event.currentTarget.value })}></TextField>
                    <Error errorMessage={error?.message}></Error>
                    <Button type="submit" variant="contained">Sign Up</Button>
                </form>
            </LoadingWrapper>
        </div>
    )
}

export { Register }