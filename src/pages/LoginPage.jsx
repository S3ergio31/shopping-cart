import MainLayout from "layouts/MainLayout";
import { useEffect } from "react";
import useAuth from "hooks/useAuth";

const LoginPage = () => {
    const { login } = useAuth();

    useEffect(() => {
        login({
            email: 'user@test.com',
            password: 'password'
        })
    }, [])
    return (
        <MainLayout>
            login
        </MainLayout>
    );
}

export default LoginPage;