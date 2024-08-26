import { IProfileResponse, userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
    const {data, isLoading} = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const response = await userService.getProfile();
            return response.data;
        }    })

    return { data, isLoading }
}