import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

const getErrorMessage = (err) =>
    err?.response?.data?.message || err?.message || "Something went wrong"

export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    const handleLogin = async ({ email, password }) => {
        try {
            const data = await login({ email, password })
            if (!data?.user) {
                return { success: false, message: "Login failed. Please try again." }
            }
            setUser(data.user)
            return { success: true }
        } catch (err) {
            return { success: false, message: getErrorMessage(err) }
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        try {
            const data = await register({ username, email, password })
            if (!data?.user) {
                return { success: false, message: "Registration failed. Please try again." }
            }
            setUser(data.user)
            return { success: true }
        } catch (err) {
            return { success: false, message: getErrorMessage(err) }
        }
    }

    const handleLogout = async () => {
        try {
            await logout()
            setUser(null)
            return { success: true }
        } catch (err) {
            return { success: false, message: getErrorMessage(err) }
        }
    }

    useEffect(() => {
        const getAndSetUser = async () => {
            try {
                const data = await getMe()
                if (data?.user) {
                    setUser(data.user)
                }
            } catch (err) {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        getAndSetUser()
    }, [])

    return { user, loading, handleRegister, handleLogin, handleLogout }
}
