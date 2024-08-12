import styled from '@emotion/styled';
import Card from '../card/Card';
import BaseDiv from '../../components/misc/BaseDiv';
import { useFetchCards } from '../../components/hooks/useFetchCards';
import React from 'react';

const CardContainer = styled(BaseDiv)`
    gap: 1rem;
    margin-top: 1rem;
`;

interface ICardListMapper {
    deckId: string;
}

const CardListMapper: React.FC<ICardListMapper> = (props) => {
    if (props.deckId == '') {
        return <div>Error DeckId is null</div>
    }

    const { cards, loading, error } = useFetchCards(props.deckId);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (cards.length == 0 || cards == null) {
        return <div>Create your first deck !</div>
    }

    return (
        <>
            <CardContainer>
                {cards.map((card, index) => (
                    <Card key={index} id={card.id} question={card.question} answer={card.answer} blankPos={card.blankPos} deckId={card.deckId} streak={card.streak} />
                ))}
            </CardContainer>
        </>
    );
};

export default CardListMapper;