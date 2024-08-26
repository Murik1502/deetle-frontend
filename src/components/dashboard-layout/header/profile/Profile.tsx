'use client'

import { useProfile } from "@/hooks/useProfile"

export function Profile() {
    const { data, isLoading } = useProfile()

    return (
        <div>Profile</div>
    )
}