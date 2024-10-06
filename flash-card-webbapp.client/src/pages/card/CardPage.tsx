import styled from '@emotion/styled';
import BaseDiv from '../../components/misc/BaseDiv';
import { useParams } from 'react-router-dom';
import CardMapper from './CardMapper';
import { Button, Stack } from '@mui/material';

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
            <Stack direction='row' spacing={2} justifyContent='center'>
                <Button variant='contained' color='primary' href={`/decks`}>Back to Decks</Button>
                <Button variant='contained' color='primary' href={`/create/${deckId}`}>Create Card</Button>
            </Stack>
            <CardMapper deckId={deckId} />
        </PageContainer>
    );
};

export default CardPage;