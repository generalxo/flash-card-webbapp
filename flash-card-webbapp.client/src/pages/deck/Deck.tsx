import Styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from '@mui/icons-material';

const DeckContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 16rem;
    min-height: 6rem;
    padding: .75rem;
    background-color: var(--mc-s);
    border-radius: var(--r-s);
`;

const StyledTitle = Styled.h3`
    text-align: center;
    font-size: 1.5rem;
    color: var(--tc-p);
`;

const StyledStats = Styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 0;
    gap: .125rem;
    margin-top: auto;
`;

function Deck(props: IDeck) {
    console.log('props', props);
    const navigate = useNavigate();

    const HandleClick = () => {
        console.log('IDeck props', props);
        navigate(`/cards/${props.id}`);
    }

    // Add other props to me and style me!
    return (
        <>
            <DeckContainer onClick={HandleClick}>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledStats>
                    {props.cardCount}<CreditCard />
                </StyledStats>
            </DeckContainer>
        </>
    );
};

export default Deck;

/* To do when basic functionality is done.
    Idea 1.
    Have a stack of cards that gets larger as you add more cards to it, above the cards will be the title of the deck.
    When the stack of cards is clicked on it will go to card list page.
    Title should have an edit btn
    Title should have a delete btn

    Idea 2.
    Create a deck that looks like a playing card deck, with a title on it, stats on it and a play btn.

    Idea 3. Let the user customize the deck card, with a background image, title, and stats for example.
*/ 