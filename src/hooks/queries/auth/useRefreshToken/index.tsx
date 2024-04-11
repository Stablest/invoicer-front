import { useQuery } from "@tanstack/react-query";
import { refreshToken } from "../../../../services/api/auth";


const useRefreshToken = (JWTAccessToken?: boolean, JWTRefreshToken?: boolean) => {
    const enabled = !!(!JWTAccessToken && JWTRefreshToken)
    return useQuery({
        queryKey: ['refreshToken'],
        queryFn: async () => {
            return await refreshToken();
        },
        enabled,
        retry: false
    })
}

export { useRefreshToken }