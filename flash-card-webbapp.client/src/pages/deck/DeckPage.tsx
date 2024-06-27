import styled from 'styled-components';
import DeckListMaper from '../deck/DeckListMaper';
import CreateDeckForm from '../../components/forms/CreateDeckForm';

const DeckPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledTitle = styled.h1`
    Text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.61rem;
`;

const DeckPage = () => {
    return (
        <>
            <DeckPageContainer>
                <StyledTitle>My Decks</StyledTitle>
                <CreateDeckForm />
                <DeckListMaper />
            </DeckPageContainer>
        </>
    );
};

export default DeckPage;