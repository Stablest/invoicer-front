import { useQuery } from "@tanstack/react-query"
import { getAllUsers } from "../../services/backend/users"

const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await getAllUsers()
            return data
        }
    })
}

export { useUsers }