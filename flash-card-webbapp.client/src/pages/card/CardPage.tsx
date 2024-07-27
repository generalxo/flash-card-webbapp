import styled from 'styled-components';
import BaseDiv from '../../components/misc/BaseDiv';
import { useParams } from 'react-router-dom';
import CardListMapper from './CardListMapper';
import CardCreator from './CardCreator';

const StyledTitle = styled.h1`
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.61rem;
`;

const PageContainer = styled(BaseDiv)`
    min-width: 100%;
`;

const CardPage = () => {
    const { id } = useParams();
    const deckId = id?.toString() || '';

    return (
        <PageContainer>
            <StyledTitle>My Cards!</StyledTitle>
            <CardCreator />
            <CardListMapper deckId={deckId} />
        </PageContainer>
    );
};

export default CardPage;