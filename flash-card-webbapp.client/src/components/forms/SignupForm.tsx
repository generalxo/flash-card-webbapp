import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
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

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        else{
            axios({
                method: 'post',
                url: 'https://localhost:7163/api/auth/register',
                data: {
                    Username: email,
                    Password: password
                }
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        }
        
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
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
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button type="submit">Sign Up</Button>
            </Form>
        </FormContainer>
    );
};

export default SignupForm;