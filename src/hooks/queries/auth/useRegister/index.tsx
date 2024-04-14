
import { useMutation } from "@tanstack/react-query"
import { IRegisterFormFields } from "./register.interface"
import { signUp } from "../../../../services/api/auth"


const useRegister = () => {
    return useMutation({
        mutationFn: async (registerBody: IRegisterFormFields) => { return await signUp(registerBody) },
        retry: false
    })
}

export { useRegister }