import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import H2 from '../../components/text/H2';
import ModularBtn from '../../components/button/ModularBtn';
import { useAuth } from '../../context/useAuthentication';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
`;

const Input = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
`;

const LoginForm: React.FC = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
    });
    const { loginUser } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        loginUser(email, password);
    };

    const handleSubmit = (e: React.FormEvent) => {
        try {
            e.preventDefault();
            console.log(input);
            handleLogin(input.email, input.password);
            navigate('/');
        } catch (error) {
            //handle me better later
            toast.error(`${error}`);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <>
            <LoginFormContainer>
                <StyledLoginForm onSubmit={handleSubmit}>
                    <H2>Login</H2>
                    <Input
                        type="email"
                        id='email'
                        name='email'
                        placeholder="example@email.com"
                        onChange={handleInputChange}
                    />
                    <Input
                        type="password"
                        id='password'
                        name='password'
                        placeholder="Password"
                        onChange={handleInputChange}
                    />
                    <ModularBtn type="submit" text="Login" />
                </StyledLoginForm>
            </LoginFormContainer>
        </>
    );
};

export default LoginForm;