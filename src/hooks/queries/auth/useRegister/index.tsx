
import { useMutation } from "@tanstack/react-query"
import { IRegister } from "./register.interface"
import { signUp } from "../../../../services/api/auth"


const useRegister = () => {
    return useMutation({
        mutationFn: async (registerBody: IRegister) => { return await signUp(registerBody) },
        retry: false
    })
}

export { useRegister }