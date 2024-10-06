import styled from '@emotion/styled';
import { useFetchCards } from '../../components/hooks/useFetchCards';
import React from 'react';
import { CircularProgress } from '@mui/material';
import CardListMapper from './CardListMapper';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
`;

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    margin-top: 3rem;
`;

interface ICardMapper {
    deckId: string;
}

const CardMapper: React.FC<ICardMapper> = (props) => {

    if (props.deckId == '') {
        return <div>DeckId Error</div>
    }

    const { cards, loading, error } = useFetchCards(props.deckId);

    if (loading) {
        return (
            <SpinnerContainer>
                <CircularProgress size='5rem'/>
            </SpinnerContainer>
        )
    }

    if (error) {
        return <div>{error}</div>
    }

    if (cards.length == 0 || cards == null) {
        return <div>Create your first deck !</div>
    }

    return(
        <CardContainer>
            <CardListMapper cards={cards}/>
        </CardContainer>
    )
}

export default CardMapper;