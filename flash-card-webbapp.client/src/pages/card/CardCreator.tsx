import styled from 'styled-components';
import BaseDiv from '../../components/misc/BaseDiv';

/*
   we need to create some way of creating more one or more options 
   we need some btns to enable select multiple options
   radio btns for strictnes mode of the card

*/

const FormContainer = styled(BaseDiv)`
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    gap: .25rem
`;

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

const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: .5rem;
`;

const SubmitBtn = styled.button`
    width: 6rem;
    height: 2rem;
    align-self: center;
    border-radius: var(--r-s);
    border: none;
    margin-top: .5rem
`;

/* Things to think about
    Do we want to create a btn that toggles options?
    What strictness mode should be default and what should they be
    Strictness should have a i icon with info on what the difference is
    Should we set strictness last in some sort of pop up or similar?
*/

/* TODO
    Create a list of the options a user has created that also alows the user to remove and edit them.
    Create auto resize function for textarea.
*/

const CardCreator = () => {

    return (
        <div>
            <h2>Card Creator</h2>
            <FormContainer>
                <StyledForm>
                    <label>Question</label>
                    <QuestionTextArea placeholder='Enter ur Question'/>
                    <label>Answer</label>
                    <AnswerTextArea placeholder='Enter the Answer'/>
                    <h4>Strictness Mode</h4>
                    <RadioContainer>
                        <label>None </label>
                        <input type="radio" name="strictness" value="none" checked={true} />
                        <label>Basic </label>
                        <input type="radio" name="strictness" value="basic" />
                        <label>Strict </label>
                        <input type="radio" name="strictness" value="strict" />
                        <p>i</p>
                    </RadioContainer>
                    <label>Options</label>
                    <OptionTextArea placeholder='Add an option that can be answererd'/>
                    <SubmitBtn type="submit">Create Card</SubmitBtn>
                    <input type="hidden" value="deckId" />
                </StyledForm>
            </FormContainer>
        </div>
    );
}

export default CardCreator;