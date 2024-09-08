import { userService } from "@/services/user.service";
import { TypeUserForm } from "@/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useUpdateSettings() {

    const QueryClient = useQueryClient()

    const {mutate, isPending} = useMutation({
        mutationKey: ['update profile'],
        mutationFn: (data: TypeUserForm) => userService.update(data),
        onSuccess() {
            toast.success('Successfully updated!')
            QueryClient.invalidateQueries({ queryKey: ['profile'] })
        }
    })

    return {mutate, isPending}
}