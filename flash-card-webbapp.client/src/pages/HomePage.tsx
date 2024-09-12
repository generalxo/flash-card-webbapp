import styled from '@emotion/styled';
//Created Components
import BaseDiv from '../components/misc/BaseDiv';
import { Button, Stack } from '@mui/material';

/* Notes:
    css variables are used in the styled components.
     -found in index.css
*/

/* Styled Components Start */
const HomePageSubtitle = styled.h2`
    color: var(--tc-s);
    font-size: 3.5rem;
    font-weight: 800;
    text-align: center;
    text-shadow: 4px 7px 4px rgba(7, 7, 7, 0.733);
    margin-bottom: 2rem;
`;

const HomeWrapper = styled(BaseDiv)``;

const StyledHeroText = styled.h1`
    font-size: 7.1rem;
    font-weight: 900;
    text-align: center;
    background-color: #690000;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='24' viewBox='0 0 12 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4d4d4' fill-opacity='0.23'%3E%3Cpath d='M2 0h2v12H2V0zm1 20c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM9 8c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-1 4h2v12H8V12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: 16px 32px;
    background-repeat: repeat;
    background-clip: text;
`;

const AccountContainer = styled.div`
//Sign in and Sign up buttons
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
`;

const SignUpButton = styled(Button)`
    background-color: #181822;
    &:hover {
        background-color: #25243d;
        color: #439bff;
    }
`;

const LogInButton = styled(Button)`

`;


const HomePage = () => {
    return (
        <>
            <HomeWrapper>
                <StyledHeroText>Flash Cards</StyledHeroText>
                <HomePageSubtitle>Start creating & learning with your own cards</HomePageSubtitle>
                <AccountContainer>
                    <LogInButton>Log In</LogInButton>
                    <SignUpButton>Sign Up</SignUpButton>
                </AccountContainer>
            </HomeWrapper>
            
        </>
    );
};

export default HomePage;