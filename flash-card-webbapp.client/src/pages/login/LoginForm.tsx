import React, { useState } from 'react';
import styled from 'styled-components';
import H2 from '../../components/text/H2';
import ModularBtn from '../../components/button/ModularBtn';

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
    const [username, setUsername] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <>
            <LoginFormContainer>
                <StyledLoginForm onSubmit={handleSubmit}>
                    <H2>Login</H2>
                    <Input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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