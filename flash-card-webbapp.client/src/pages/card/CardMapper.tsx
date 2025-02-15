import styled from '@emotion/styled';
import { useFetchCards } from '../../hooks/useFetchCards';
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

const CardMapper: React.FC<ICardMapper> = ({ deckId }) => {
    const { cards, loading, error } = useFetchCards(deckId);

    if (!deckId) {
        return <div>DeckId Error</div>
    } else if (error) {
        return <div>{error}</div>
    } else if (loading) {
        return (
            <SpinnerContainer>
                <CircularProgress size='5rem' />
            </SpinnerContainer>
        )
    } else if (cards == undefined || cards == null || cards.length == 0) {
        return <div>Create your first deck !</div>
    } else return (
        <CardContainer>
            <CardListMapper cards={cards} />
        </CardContainer>
    );
}

export default CardMapper;