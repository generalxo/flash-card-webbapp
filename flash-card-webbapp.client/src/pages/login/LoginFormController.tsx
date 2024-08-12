import { useState } from 'react';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ModularBtn from '../../components/button/ModularBtn';
import styled from '@emotion/styled';

const StyledBtnContainer = styled.div`
    display: flex;
    margin-top: 1.5rem;
`;

const LoginFormController = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);

    const toggleForm = () => {
        setIsLoginActive(!isLoginActive);
    };

    return (
        <>
            {isLoginActive ? (
                <div>
                    <LoginForm />
                    <StyledBtnContainer onClick={toggleForm}>
                        <ModularBtn text="Dont have an account?" type="button"/>
                    </StyledBtnContainer>
                </div>
            ) : (
                <div>
                    <SignupForm />
                    <StyledBtnContainer onClick={toggleForm}>
                          <ModularBtn text="Already have an account?" type="button" />
                    </StyledBtnContainer>
                </div>
            )}
        </>
    );
};

export default LoginFormController;