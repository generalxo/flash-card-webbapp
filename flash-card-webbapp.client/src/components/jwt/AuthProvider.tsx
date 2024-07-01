import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import axios from 'axios';

interface AuthContextType {
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextType>({ token: null, setToken: () => { } });

function checkTokenValidity(token: string | null): boolean {
    if (!token) return false;
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = decodedToken.exp * 1000;
    return Date.now() < expirationTime;
}

function handleExpiredToken(): void {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
    // Handle redirection to login page or similar actions here
}

function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
    const [token, setToken] = useState<string | null>(() => localStorage.getItem('token') || null);

    useEffect(() => {
        if (token && checkTokenValidity(token)) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            localStorage.setItem('token', token);
            const expirationTime = JSON.parse(atob(token.split('.')[1])).exp * 1000;
            const timeUntilExpiration = expirationTime - Date.now();
            setTimeout(() => {
                handleExpiredToken();
            }, timeUntilExpiration);
        } else {
            handleExpiredToken();
        }
    }, [token]);

    const contextValue = useMemo(() => ({ token, setToken }), [token]);

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;