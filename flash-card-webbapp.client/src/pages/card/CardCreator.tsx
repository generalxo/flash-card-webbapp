import styled from 'styled-components';
import BaseDiv from '../../components/misc/BaseDiv';

/*
   we need to create some way of creating more one or more options 
   we need some btns to enable select multiple options
   radio btns for strictnes mode of the card

*/

const FormContainer = styled(BaseDiv)`
    form {
        
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    gap: .25rem
`;

const InputFields = styled.input`
    width: 27rem;
`;

const TextArea = styled.textarea`
    width: 27rem;
    padding: .25rem;
`;

const CardCreator = () => {

    return (
        <div>
            <h2>Card Creator</h2>
            <FormContainer>
                <StyledForm>
                    <label>Question</label>
                    <TextArea />
                    <label>Answer</label>
                    <InputFields type="text" id="answer" />
                    <button type="submit">Create Card</button>
                    <input type="hidden" value="deckId" />
                </StyledForm>
            </FormContainer>
        </div>
    );
}

export default CardCreator;