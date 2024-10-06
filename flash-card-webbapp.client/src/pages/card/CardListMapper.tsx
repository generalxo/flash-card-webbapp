import styled from '@emotion/styled';
import React from 'react';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
`;

interface IMapper {
    question: string;
    answer: string;
    optionArr: string[];
}

const QuestionText = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`;

const CardLstToMapper = (cardlst: ICardLst): IMapper[] => {
    return cardlst.cards.map(card => ({
        question: card.question,
        answer: card.answer,
        optionArr: card.optionString ? card.optionString.split(',') : []
    }));
}

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
                        <div key={index}>
                            <QuestionText>{card.question}</QuestionText>
                            <p>{card.answer}</p>
                            {card.optionArr.map((option, index) => {
                                return <p key={index}>{option}</p>
                            })}
                        </div>
                    )
                })}
            </>
        </CardContainer>
    )
}

export default CardListMapper;