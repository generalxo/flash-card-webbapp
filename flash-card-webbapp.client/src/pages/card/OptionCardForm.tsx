import styled from 'styled-components';
import { useState } from 'react';

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

const SubmitBtn = styled.button`
    width: 6rem;
    height: 2rem;
    align-self: center;
    border-radius: var(--r-s);
    border: none;
    margin-top: .5rem
`;

const OptionCardCreator = () => {
    /*TODO
        Create a way to create many options that are added to a list that can also be removed with clicking an x
        Create a way to display all the options
    */
    const [form, setForm] = useState<ICardOptForm>({
        question: '',
        answer: '',
        optionString: '',
        deckId: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    };

    return (
        <>
            <form>
                <label>Question</label>
                <QuestionTextArea name='question' value={form.question} onChange={handleChange} placeholder='Enter ur Question' />
                <label>Answer</label>
                <AnswerTextArea name='answer' value={form.answer} onChange={handleChange} placeholder='Enter the Answer' />
                <label>Options</label>
                <OptionTextArea placeholder='Add a option' />
                <SubmitBtn type='submit'>Create Card</SubmitBtn>
                <input type='hidden' value={form.deckId} />
                <input type='hidden' value='none' />
            </form>
        </>
    )
}

export default OptionCardCreator;