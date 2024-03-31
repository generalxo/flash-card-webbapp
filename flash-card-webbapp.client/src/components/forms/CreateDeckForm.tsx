import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        axios({
            method: 'post',
            url: 'https://localhost:7163/api/deck/create',
            data: {
                title: deckTitle
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
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