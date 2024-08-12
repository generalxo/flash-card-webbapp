import axios from 'axios';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import H2 from '../../components/text/H2';
import SubmitBtn from '../../components/button/ModularBtn';

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

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Add better validation later
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords do not match");
            // Add functionality to disable button or similar
            return;
        }
        else{
            axios({
                method: 'post',
                url: 'https://localhost:7163/api/auth/register',
                data: {
                    Username: email,
                    Email: email,
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
                <H2>Sign Up</H2>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
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
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <SubmitBtn type="submit" text="Sign Up"></SubmitBtn>
            </Form>
        </FormContainer>
    );
};

export default SignupForm;