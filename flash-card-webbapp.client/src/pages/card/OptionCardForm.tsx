import styled from 'styled-components';
import React, { useState } from 'react';

const BaseTextArea = styled.textarea`
    width: 27rem;
    padding: .25rem;
    text-align: center;
    border-radius: var(--r-m);
    resize: none;
    outline: none;
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
    border-radius: var(--r-s);
    border: none;
    margin-top: 1.5rem
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const OptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 5rem;
    background:red;
`;

const AddOptionBtn = styled.button`

`;

const Option = styled.li`
    
`;

const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const OptionCardCreator = () => {
    /*TODO
        Create a way to create many options that are added to a list that can also be removed with clicking an x
        Create a way to display all the options
    */
    const [form, setForm] = useState<ICardOptForm>({
        question: '',
        answer: '',
        optionArr: [],
        deckId: '',
        option: ''
    });

    // Change this to be on click of add option or create card.
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
        })
    }

    return (
        <>
            <Container>
                <StyledForm>
                    <label>Question</label>
                    <QuestionTextArea name='question' value={form.question} onChange={handleChange} placeholder='Enter ur Question' />
                    <label>Answer</label>
                    <AnswerTextArea name='answer' value={form.answer} onChange={handleChange} placeholder='Enter the Answer' />
                    <label>Options</label>
                    <OptionTextArea name='option' value={form.option} onChange={handleChange} placeholder='Add a option' />
                    <AddOptionBtn onClick={handleAddOptionClick}>Add Option</AddOptionBtn>
                    <OptionContainer>
                        <Ul>
                            {form.optionArr.length < 0 ? <></> : form.optionArr.map((opt, index) => (
                                <Option key={index}>{opt}</Option>
                            ))}
                        </Ul>
                    </OptionContainer>
                    <SubmitBtn type='submit'>Create Card</SubmitBtn>
                    <input type='hidden' value={form.deckId} />
                    <input type='hidden' value='none' />
                </StyledForm>
                
            </Container>
        </>
    )
}

export default OptionCardCreator;