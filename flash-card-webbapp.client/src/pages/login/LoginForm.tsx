import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import H2 from '../../components/text/H2';
import ModularBtn from '../../components/button/ModularBtn';
import ApiClient from '../../components/misc/ApiClient';
import axios from 'axios';

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
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const login = async (email: string, password: string) => {
        try {
            const response = await ApiClient.post('/auth/login', { email, password });
            if (response.status == 200) {
                navigate('/')
            }
        } catch (error) {
            // do something with the error later!
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <>
            <LoginFormContainer>
                <StyledLoginForm onSubmit={handleSubmit}>
                    <H2>Login</H2>
                    <Input
                        type="text"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <ModularBtn type="submit" text="Login"/>
                </StyledLoginForm>
            </LoginFormContainer>
        </>
    );
};

export default LoginForm;