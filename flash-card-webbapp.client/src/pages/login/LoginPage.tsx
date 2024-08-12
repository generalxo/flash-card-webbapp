import styled from "@emotion/styled";
import LoginFormController from "./LoginFormController";

// Created Components
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
                <LoginFormController />
            </StyledFormContainer>
        </>
    );
};

export default LoginPage;