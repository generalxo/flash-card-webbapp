import styled from 'styled-components';
import BaseDiv from '../../components/misc/BaseDiv';
import { useParams } from 'react-router-dom';
import CardListMapper from './CardListMapper';

const StyledTitle = styled.h1`
    Text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.61rem;
`

const CardPage = () => {

    const params = useParams();
    console.log("params: ", params);
    const test = params.id?.toString();

    if (test == undefined) {
        return (
            <h2>No cards found</h2>
        );
    }

    return (
        <>
            <BaseDiv>
                <StyledTitle>My Cards!</StyledTitle>
                <CardListMapper deckId={test} />
            </BaseDiv>
        </>
    );
}

export default CardPage;