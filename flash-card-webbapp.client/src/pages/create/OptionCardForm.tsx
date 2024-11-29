import styled from '@emotion/styled';
import { useState, useRef } from 'react';
import TextFieldLabel from './TextFieldLabel';
import ResizableTextArea from './ResizableTextarea';
import { Button, Stack, IconButton } from '@mui/material';
import BaseDiv from '../../components/misc/BaseDiv';
import DeleteIcon from '@mui/icons-material/Delete';
import ApiClient from '../../components/misc/ApiClient';
import { useParams } from 'react-router-dom';
import { handleTextAreaChange } from '../../components/handle/HandleTextAreaChange';

/* To Do
    - Add validation to the form
    Things to consider
*/

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    gap: .25rem;
`;

const Container = styled(BaseDiv)``;
const StackWrapper = styled.div`
    margin: 0;
    margin-top: 2rem;
`;
const OptionBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: .5rem;
`;

const BtnWrapper = styled(BaseDiv)``;

const DeleteIconBtn = styled(IconButton)`
    margin-left: auto;
`;

const DeleteIconWrapper = styled(BaseDiv)``;

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
    min-height: 3rem;
    height: auto;
    width: 35rem;
    background: #f9f9f9;
`;

const Option = styled.div`
    display: grid;
    grid-template-columns: 1fr 2.5rem;
    gap: .25rem;
`;

const OptionText = styled.p`
    display: flex;
    margin: 0;
    padding: 0;
    color: black;
    line-height: 1.1rem;
    font-size: 1.1rem;
    align-self: center;
    justify-self: flex-start;
    text-align: left;
`;

const OptionCardCreator = () => {
    const { id } = useParams();
    const [form, setForm] = useState<ICardOptForm>({
        question: '',
        answer: '',
        optionArr: [],
        deckId: id?.toString() || '',
        option: ''
    });

    // handleTextAreaChange
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleTextAreaChange(e, form, setForm);
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

    const handleSubmitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data: ICardForm = {
            question: form.question,
            answer: form.answer,
            optionString: form.optionArr.toString(),
            strictness: 0,
            deckId: '484898a0-b250-4c89-b4f7-4fe40119bb12',
        };
        console.log(data);
        const postData = async () => {
            try {
                const response = await ApiClient.post('/card/create', data);
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };
        postData();
    };

    const optionRef = useRef<HTMLTextAreaElement>(null);

    const questionPlaceholder: string = 'Enter ur Question \nEnter ___ to set ur Blank\nFor more info hover over the i above';
    const questionInfoText: string = 'Enter the question for the card. If you want to have a blank in the question enter 3 undersocres like this ___ where you want the blank to be. By default the blank will be at end.';
    const optionInfoText: string = 'Multiple choices can be added to the card. The answer will automatically be added to the options. At least 1 option needs to be added but 3 are recomended so there are 4 options to chose from.';

    return (
        <>
            <Container>
                <StyledForm>
                    <TextFieldLabel labelText='Question' infoText={questionInfoText}/>
                    <ResizableTextArea name='question' onChange={handleChange} placeholder={questionPlaceholder}/>
                    <TextFieldLabel labelText='Answer' />
                    <ResizableTextArea name='answer' onChange={handleChange} placeholder='Enter the Answer'/>
                    <TextFieldLabel labelText='Options' infoText={optionInfoText}/>
                    <ResizableTextArea name='option' onChange={handleChange} placeholder='Add a option' ref={optionRef} />
                    <OptionBtnWrapper>
                        <Button onClick={handleAddOptionClick} variant='contained'>Add Option</Button>
                    </OptionBtnWrapper>
                    <TextFieldLabel labelText='Card Options' />
                    <OptionContainer>
                        {form.optionArr.map((text, index) => (
                            <Option key={index}>
                                <OptionText>{text}</OptionText>
                                <DeleteIconWrapper>
                                    <DeleteIconBtn onClick={() => handleRemoveOptionClick(index)}>
                                        <DeleteIcon />
                                    </DeleteIconBtn>
                                </DeleteIconWrapper>
                            </Option>
                        ))}
                    </OptionContainer>
                    <StackWrapper>
                        <Stack direction="column" spacing={2}>
                            <BtnWrapper>
                                <Button variant='contained' color='success' onClick={handleSubmitForm}>Create Card</Button>
                            </BtnWrapper>
                            <BtnWrapper>
                                <Button variant='contained' color='error'>Cancel</Button>
                            </BtnWrapper>
                        </Stack>
                    </StackWrapper>
                    <input type='hidden' value={form.deckId} />
                </StyledForm>
            </Container>
        </>
    );
};

export default OptionCardCreator;
