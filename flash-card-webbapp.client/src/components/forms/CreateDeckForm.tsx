import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ApiClient from '../misc/ApiClient';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

const Label = styled.label`
    margin-bottom: 8px;
`;

const Input = styled.input`
    padding: 8px;
    margin-bottom: 16px;
    border: none;
    border-radius: var(--r-s);
`;

const Button = styled.button`
    padding: 8px 16px;
    background-color: var(--sc-s);
    border: none;
    cursor: pointer;
    border-radius: var(--r-m);
    transition: filter 0.25s ease-in-out;

    p {
        color: var(--tc-i);
        font-weight: var(--fw-600);
    }

    &:hover {
        filter: brightness(120%);
        transition: filter 0.25s ease-in-out;
    }

    &:active {
        filter: brightness(80%);
        transform: scale(0.98);
        transition: filter 0.25s ease-in-out;
    }
`;

const CreateDeckForm = () => {

    const [deckTitle, setDeckTitle] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDeckTitle(event.target.value);
    };

    const request = async () => {
        try {
            const response = await ApiClient.post('/deck/create', { title: deckTitle }, { withCredentials: true });
            console.log('Response:', response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Title: ", deckTitle)
        request();
    };

    return (
        <FormContainer>
            <h3>Create Deck</h3>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="deckNameInput" value={deckTitle} onChange={handleChange} placeholder='My Deck Name' />
                <Button type="submit"><p>Create Deck</p></Button>
            </Form>
        </FormContainer>
    );
};

export default CreateDeckForm;