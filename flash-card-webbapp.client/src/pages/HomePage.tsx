import styled from 'styled-components';
//Created Components

/* Notes:
    css variables are used in the styled components.
     -found in index.css
*/

/* Styled Components Start */
const HomePageSubtitle = styled.h2`
    color: var(--tc-s);
`;

const HomeHeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 25px;
    background-color: var(--mc-p);

    height: 13rem;
    border-radius: var(--r-l);
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 25px;
    background-color: var(--mc-p);

    border-radius: var(--r-l);
`;


const HomePage = () => {
    return (
        <>
            <HomeHeroContainer>
                <h1>Welcome to Flash Card!</h1>
                <HomePageSubtitle>Start learning with flashcards!</HomePageSubtitle>
            </HomeHeroContainer>
            <MenuContainer>
                <h2>Menu</h2>
                <div>
                    <a href="/Decks">Decks</a>
                </div>
            </MenuContainer>
        </>
    );
};

export default HomePage;