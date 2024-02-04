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
    margin-top: var(--g-xxl);
    padding: var(--g-l);
    background-color: var(--mc-p);

    height: 13rem;
    border-radius: var(--r-l);
`;


const HomePage = () => {
    return (
        <>
            <HomeHeroContainer>
                <h1>Welcome to Flash Card!</h1>
                <HomePageSubtitle>Start learning with flashcards!</HomePageSubtitle>
            </HomeHeroContainer>
        </>
    );
};

export default HomePage;