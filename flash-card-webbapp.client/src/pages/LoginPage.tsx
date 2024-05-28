import styled from "styled-components";
// Created Components
import LoginForm from "../components/forms/LoginForm";
import SignupForm from "../components/forms/SignupForm";
import H2 from "../components/text/H2";

const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const LoginPage = () => {
    return (
        <>
            <StyledFormContainer>
                <H2>Login</H2>
                <LoginForm />
                <H2>Sign Up</H2>
                <SignupForm />
            </StyledFormContainer>
        </>
    );
}

export default LoginPage;