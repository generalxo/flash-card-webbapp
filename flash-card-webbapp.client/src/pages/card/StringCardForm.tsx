import styled from '@emotion/styled';
import { useState } from 'react';
import ResizableTextArea from './ResizableTextarea';
import TextFieldLabel from './TextFieldLabel';
import BaseDiv from '../../components/misc/BaseDiv';
import { ToggleButton, ToggleButtonGroup, Button, Stack } from '@mui/material';

const Container = styled(BaseDiv)``;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    gap: .25rem
`;

const ToggleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const CenterContainer = styled(ToggleContainer)`
    margin-top: 2rem;
`;

const questionInfoText: string = 'Enter the question for the card. If you want to have a blank in the question enter 3 undersocres like this ___ where you want the blank to be. By default the blank will be at end.';
const questionPlaceholder: string = 'Enter ur Question \nEnter ___ to set ur Blank\nFor more info click the i above';
const strictnessInfoText: string = 'Basic will not care about upper or lower case, or spaces. Strict will care about all of those things.';

/* TODO
    Create api call to create a card
    Add validation to the form
    Return user to deck if they cancel
*/

const StringCardForm: React.FC = () => {
    const [toggle , setToggle] = useState<string>('basic');

    const [form, setForm] = useState<ICardStrForm>({
        question: '',
        answer: '',
        deckId: '',
        strictness: toggle,
    });
    
    const handleToggle = (_: React.MouseEvent<HTMLElement>, newSelect: string) => {
        setToggle(newSelect);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <>
            <Container>
                <StyledForm>
                    <TextFieldLabel labelText='Question' infoText={questionInfoText}/>
                    <ResizableTextArea placeholder={questionPlaceholder} value={form.question} onChange={handleChange}/>
                    <TextFieldLabel labelText='Answer' />
                    <ResizableTextArea placeholder='Enter the Answer' value={form.answer} onChange={handleChange}/>
                    <TextFieldLabel labelText='Strictness Mode' infoText={strictnessInfoText}/>
                    <ToggleContainer>
                        <ToggleButtonGroup color="primary" value={toggle} exclusive onChange={handleToggle} aria-label="Platform">
                            <ToggleButton value='basic'>Basic</ToggleButton>
                            <ToggleButton value='strict'>Strict</ToggleButton>
                        </ToggleButtonGroup>
                    </ToggleContainer>
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
    );
};

export default StringCardForm;