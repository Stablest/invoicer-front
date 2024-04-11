import { AuthDTO } from "../../../hooks/queries/auth/shared/dtos/auth.dto";
import { ILogin } from "../../../hooks/queries/auth/useLogin/login.interface";
import { IRegister } from "../../../hooks/queries/auth/useRegister/register.interface";
import { BASE_URL } from "../../../utils/const/URL";
import { validateJSONToObject } from "../../../utils/functions/validateJSONToObject"
import { Fetcher } from "../../../utils/modules/Fetcher"

const fetcher = new Fetcher({ credentials: 'include', headers: { 'Content-Type': 'application/json' }, parseResponse: { fn: validateJSONToObject, parseClass: AuthDTO } })

const signIn = async (login: ILogin) => {
    return await fetcher.post(`${BASE_URL}/auth/sign-in`, { body: JSON.stringify(login) });
}

const signUp = async (registerBody: IRegister) => {
    return fetcher.post(`${BASE_URL}/auth/sign-up`, { body: JSON.stringify(registerBody) })
}

const refreshToken = async () => {
    return fetcher.get(`${BASE_URL}/auth/refresh`);
}

export { signIn, signUp, refreshToken }