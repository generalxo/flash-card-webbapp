import React from 'react';
import styled from '@emotion/styled';

const StyledBaseDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
`;

interface BaseDivProps {
    children?: React.ReactNode;
}

const BaseDiv: React.FC<BaseDivProps> = ({ children }) => {
    return (
        <StyledBaseDiv>
            {children}
        </StyledBaseDiv>
    );
}

export default BaseDiv;