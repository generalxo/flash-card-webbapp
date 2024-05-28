import React, { useState } from 'react';
import styled from 'styled-components';

const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginForm = styled.form`
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

const Button = styled.button`
    padding: 10px;
    width: 100%;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
`;

const LoginFormComponent: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <LoginFormContainer>
            <LoginForm onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Login</Button>
            </LoginForm>
        </LoginFormContainer>
    );
};

export default LoginFormComponent;