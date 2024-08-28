import styled from '@emotion/styled';
import React, { useState } from 'react';
import FaX from '@mui/icons-material/Close';
import TextFieldLabel from './TextFieldLabel';
import ResizableTextArea from './ResizableTextarea';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    gap: .25rem
`;

const SubmitBtn = styled.button`
    width: 6rem;
    height: 2rem;
    align-self: center;
    border-radius: var(--r-xs);
    border: none;
    margin-top: 1.5rem
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 5rem;
    margin-top: 1rem;
    gap: .25rem;
    font-size: 1.5rem;
    padding: .25rem;
    border-style: solid;
    border-color: #f9f9f9;
    border-width: 1px;
    border-radius: var(--r-s);
    background: #f9f9f9;
    min-height: 2.1rem;
    height: auto;
    width: 35rem;
`;

const AddOptionBtn = styled(SubmitBtn)`
    margin: 0;
    margin-top: .25rem;
`;

const Option = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: .25rem;
    p{
        margin: 0;
        padding: 0;
        text-align: center;
        color: black;
    }
`;

const RemoveIcon = styled(FaX)`
    margin: 0;
    margin-left: auto;
    padding: 0;
    cursor: pointer;
    background: red;
    border-radius: var(--r-xs);
    color: black;
    align-self: center;
`;

const OptionCardCreator = () => {
    /* To Do
        - Get deckid from the url
        - Create api call to create a card
        - Add validation to the form
    */

    const [form, setForm] = useState<ICardOptForm>({
        question: '',
        answer: '',
        optionArr: [],
        deckId: '',
        option: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleAddOptionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        form.optionArr.push(form.option);
        setForm({
            ...form,
            option: '',
        });
    };

    const handleRemoveOptionClick = (index: number) => {
        // Remove the option at the index, _ is the value and i is the index
        const updatedOptions: string[] = form.optionArr.filter((_, i) => i !== index);
        setForm({
            ...form,
            optionArr: updatedOptions,
        });
    };

    const questionPlaceholder: string = 'Enter ur Question \nEnter ___ to set ur Blank\nFor more info click the i above';
    const questionInfoText: string = 'Enter the question for the card. If you want to have a blank in the question enter 3 undersocres like this ___ where you want the blank to be. By default the blank will be at end.';
    const optionInfoText: string = 'Multiple choices can be added to the card. The answer will automatically be added to the options. At least 1 option needs to be added but 3 are recomended so there are 4 options to chose from.';
    
    return (
        <>
            <Container>
                <StyledForm>
                    <TextFieldLabel labelText='Question' infoText={questionInfoText}/>
                    <ResizableTextArea name='question'  value={form.question} onChange={handleChange} placeholder={questionPlaceholder} />
                    <TextFieldLabel labelText='Answer' />
                    <ResizableTextArea name='answer'  value={form.answer} onChange={handleChange} placeholder='Enter the Answer' />
                    <TextFieldLabel labelText='Options' infoText={optionInfoText}/>
                    <ResizableTextArea name='option'  value={form.option} onChange={handleChange} placeholder='Add a option' />
                    <AddOptionBtn onClick={handleAddOptionClick}>Add Option</AddOptionBtn>
                    {form.optionArr.length > 0 && (
                        <OptionContainer>
                            {form.optionArr.map((text, index) => (
                                <Option key={index}>
                                    <p>{text}</p>
                                    <RemoveIcon onClick={() => handleRemoveOptionClick(index)} fontSize='inherit' />
                                </Option>
                            ))}
                        </OptionContainer>
                    )}
                    <SubmitBtn type='submit'>Create Card</SubmitBtn>
                    <input type='hidden' value={form.deckId} />
                    <input type='hidden' value='none' />
                </StyledForm>
            </Container>
        </>
    )
}

export default OptionCardCreator;