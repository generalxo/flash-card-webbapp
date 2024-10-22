import { createContext, useContext, useEffect, useState } from "react";
import { UserProfile } from "../models/User"
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginApiRequest, RegisterApiRequest } from "../services/AuthService";
import { toast } from "react-toastify";

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser: (email: string, password: string, name: string) => void;
    loginUser: (email: string, password: string) => void;
    logoutUser: () => void;
    isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    //const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = token;
        }
        setIsReady(true);
    }, []);

    const registerUser = async (email: string, password: string, username: string) => {
        await RegisterApiRequest(email, password, username)
            .then((response) => {
                if (response) {
                    localStorage.setItem('token', response?.data.token);
                    const userObj = {
                        username: response?.data.username,
                        email: response?.data.email
                    };
                    localStorage.setItem('user', JSON.stringify(userObj));
                    setUser(userObj!);
                    setToken(response?.data.token);
                    toast.success('Registered successfully!');
                    //navigate('/');
                }
            })
            .catch((_e) => {
                toast.error('An error occurred while registering!');
            });
    };

    const loginUser = async (username: string, password: string) => {
        await LoginApiRequest(username, password)
            .then((res) => {
                if (res) {
                    console.log("hadle login response data");
                    console.log(res);
                    localStorage.setItem("token", res?.data.token);
                    const userObj = {
                        username: res?.data.username,
                        email: res?.data.email,
                    };
                    localStorage.setItem("user", JSON.stringify(userObj));
                    setToken(res?.data.token!);
                    setUser(userObj!);
                    toast.success("Login Success!");
                    //navigate("/");
                }
            })
            .catch((_e) => toast.warning("Server error occured"));
    };

    const isLoggedIn = () => {
        return !!user;
    };

    const logoutUser = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        //navigate("/");
    };

    return (
        <UserContext.Provider value={{ user, token, registerUser: registerUser, loginUser: loginUser, logoutUser, isLoggedIn }}>
            {isReady && children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);