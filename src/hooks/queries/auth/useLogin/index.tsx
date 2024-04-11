import { ILogin } from "./login.interface"


import { useMutation } from "@tanstack/react-query"
import { signIn } from "../../../../services/api/auth"



const useLogin = () => {
    return useMutation({
        mutationFn: async (login: ILogin) => {
            return await signIn(login)
        },
        retry: false,
    })
}

export { useLogin }