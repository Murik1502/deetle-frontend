 import Cookies from 'js-cookie'

export enum EnumTokens {
    'ACCESS_TOKEN' = 'accessToken',
    'REFRESH_TOKEN' = 'refreshToken'
} 

 export const getAccessToken = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
    return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
        domain: process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}` : 'localhost',
        sameSite: 'lax',
        expires: 30
    })

    console.log("DOMAIN: ", process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}` : 'localhost')

    console.log(Cookies.get(EnumTokens.ACCESS_TOKEN), Cookies)
}

export const removeFromStorage = () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)
}