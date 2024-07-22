import styled from 'styled-components';
import BaseDiv from '../../components/misc/BaseDiv';
import { useParams } from 'react-router-dom';
import CardListMapper from './CardListMapper';

const StyledTitle = styled.h1`
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.61rem;
`;

const CardPage = () => {
    const { id } = useParams();
    const deckId = id?.toString() || '';

    return (
        <BaseDiv>
            <StyledTitle>My Cards!</StyledTitle>
            <CardListMapper deckId={deckId} />
        </BaseDiv>
    );
};

export default CardPage;