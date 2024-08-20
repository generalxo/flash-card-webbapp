import styled from '@emotion/styled';
import React, { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FaX from '@mui/icons-material/Close';

const BaseTextArea = styled.textarea`
    width: 35rem;
    padding: .25rem;
    text-align: center;
    border-radius: var(--r-s);
    resize: none;
    outline: none;
    background: #f9f9f9;
    font-size: 1rem;
`;

const QuestionTextArea = styled(BaseTextArea)`
    min-height: 5rem;
`;

const AnswerTextArea = styled(BaseTextArea)`
    min-height: 2rem;
`;

const OptionTextArea = styled(BaseTextArea)`
    min-height: 2rem;
`;

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

const Label = styled.label`
    display: flex;
    flex-direction: row
    margin: 0;
    margin-top: .5rem;
    padding: 0;
    font-size: 1.5rem;
    p{
        font-size: 1.55rem;
        font-weight: bold;
    }
    svg{
        align-self: center;
        margin-left: auto;
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
    /*TODO
        Create a list that can be removed with clicking an x
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
        const updatedOptions = form.optionArr.filter((_, i) => i !== index);
        setForm({
            ...form,
            optionArr: updatedOptions,
        });
    };

    const questionPlaceholder: string = 'Enter ur Question \nEnter ___ to set ur Blank\nFor more info click the i above';
    return (
        <>
            <Container>
                <StyledForm>
                    <Label>
                        <p>Question</p>
                        <InfoIcon fontSize="inherit" />
                    </Label>
                    <QuestionTextArea name='question' value={form.question} onChange={handleChange} placeholder={questionPlaceholder} />
                    <Label>
                        <p>Answer</p>
                        <InfoIcon fontSize="inherit" />
                    </Label>
                    <AnswerTextArea name='answer' value={form.answer} onChange={handleChange} placeholder='Enter the Answer' />
                    <Label>
                        <p>Options</p>
                        <InfoIcon fontSize="inherit" />
                    </Label>
                    <OptionTextArea name='option' value={form.option} onChange={handleChange} placeholder='Add a option' />
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