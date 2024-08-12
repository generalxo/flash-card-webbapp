import styled from '@emotion/styled';
import BaseDiv from '../../components/misc/BaseDiv';
import { useParams } from 'react-router-dom';
import CardListMapper from './CardListMapper';
//import CardCreator from './CardCreator';
import CardPicker from './CardPicker';

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
            <StyledTitle>Card Collection</StyledTitle>
            <CardPicker />
            <CardListMapper deckId={deckId} />
        </PageContainer>
    );
};

export default CardPage;