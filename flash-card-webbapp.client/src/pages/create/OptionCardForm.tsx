import styled from '@emotion/styled';
import { useState, useRef } from 'react';
import TextFieldLabel from './TextFieldLabel';
import ResizableTextArea from './ResizableTextarea';
import { Button, Stack, IconButton } from '@mui/material';
import BaseDiv from '../../components/misc/BaseDiv';
import DeleteIcon from '@mui/icons-material/Delete';

/* To Do
    - Get deckid from the url
    - Create api call to create a card
    - Add validation to the form
    Things to consider
    - Adding a context
    - moving the form part to a separate component
*/

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    gap: .25rem
`;

const Container = styled(BaseDiv)``;
const CenterContainer = styled(BaseDiv)``;
const OptionBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: .5rem;
`;

const DeleteIconBtn = styled(IconButton)`
    margin-left: auto;
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
    min-height: 2.1rem;
    height: auto;
    width: 35rem;
`;

const Option = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: .25rem;
    p{
        margin: 0;
        padding: 0;
        color: black;
    }
`;

const OptionCardCreator = () => {
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

        if(optionRef.current){
            const optionEvent = new Event('input', { bubbles: true });
            optionRef.current.value = '';
            optionRef.current.dispatchEvent(optionEvent);
        }
    };

    const handleRemoveOptionClick = (index: number) => {
        const updatedOptions: string[] = form.optionArr.filter((_, i) => i !== index);
        setForm({
            ...form,
            optionArr: updatedOptions,
        });
    };

    const optionRef = useRef<HTMLTextAreaElement>(null);

    const questionPlaceholder: string = 'Enter ur Question \nEnter ___ to set ur Blank\nFor more info click the i above';
    const questionInfoText: string = 'Enter the question for the card. If you want to have a blank in the question enter 3 undersocres like this ___ where you want the blank to be. By default the blank will be at end.';
    const optionInfoText: string = 'Multiple choices can be added to the card. The answer will automatically be added to the options. At least 1 option needs to be added but 3 are recomended so there are 4 options to chose from.';

    return (
        <>
            <Container>
                <StyledForm>
                    <TextFieldLabel labelText='Question' infoText={questionInfoText}/>
                    <ResizableTextArea name='question' value={form.question} onChange={handleChange} placeholder={questionPlaceholder}/>
                    <TextFieldLabel labelText='Answer' />
                    <ResizableTextArea name='answer' value={form.answer} onChange={handleChange} placeholder='Enter the Answer'/>
                    <TextFieldLabel labelText='Options' infoText={optionInfoText}/>
                    <ResizableTextArea name='option' value={form.option} onChange={handleChange} placeholder='Add a option' ref={optionRef} />
                    <OptionBtnWrapper>
                        <Button onClick={handleAddOptionClick} variant='contained'>Add Option</Button>
                    </OptionBtnWrapper>
                    {form.optionArr.length > 0 && (
                        <OptionContainer>
                            {form.optionArr.map((text, index) => (
                                <Option key={index}>
                                    <p>{text}</p>
                                    <DeleteIconBtn onClick={() => handleRemoveOptionClick(index)}>
                                        <DeleteIcon />
                                    </DeleteIconBtn>
                                </Option>
                            ))}
                        </OptionContainer>
                    )}
                    <CenterContainer>
                        <Stack direction="column" spacing={2}>
                            <Button variant='contained' color='success'>Create Card</Button>
                            <Button variant='contained' color='error'>Cancel</Button>
                        </Stack>
                    </CenterContainer>
                    <input type='hidden' value={form.deckId} />
                </StyledForm>
            </Container>
        </>
    )
}

export default OptionCardCreator;