import styled from '@emotion/styled';
import React from 'react';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--mc-s);
    width: 16rem;
    min-height: 6rem;
    padding: .5rem;
    border-radius: var(--r-s);
`;

const QuestionText = styled.p`
    font-size: 1.25rem;
    text-align: center;
    margin: 0 .25rem;
`;

const Description = styled.p`
    font-style: italic;
    font-size: .85rem;
    text-align: start;
    text-decoration: underline;
`;

interface IMapper {
    question: string;
    answer: string;
    optionArr: string[];
}

const CardLstToMapper = (cardlst: ICardLst): IMapper[] => {
    return cardlst.cards.map(card => ({
        question: card.question,
        answer: card.answer,
        optionArr: card.optionString ? card.optionString.split(',') : []
    }));
}

// Add a max width for if the text is too long

const CardListMapper: React.FC<ICardLst> = (props) => {
    console.log("props");
    console.log(props);

    const cardList = CardLstToMapper(props);
    console.log("cardList");
    console.log(cardList);

    return(
        <CardContainer>
            <>
                {cardList.map((card, index) => {
                    return (
                        <StyledCard key={index}>
                            <Description>Question</Description>
                            <QuestionText>{card.question}</QuestionText>
                            <Description>Answer</Description>
                            <QuestionText>{card.answer}</QuestionText>
                            {card.optionArr.length > 0 && <Description>Options</Description>}
                            {card.optionArr.map((option, index) => {
                                return <QuestionText key={index}>{option}</QuestionText>
                            })}
                        </StyledCard>
                    )
                })}
            </>
        </CardContainer>
    )
}

export default CardListMapper;