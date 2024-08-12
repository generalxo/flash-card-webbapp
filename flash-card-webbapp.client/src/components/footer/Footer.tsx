import styled from '@emotion/styled';

const FooterContainer = styled.footer`
    background-color: var(--mc-p);
    padding: 20px;
    text-align: center;
    min-height: 5rem;
`;

const FooterText = styled.p`
    color: var(--tc-p);
    font-size: 14px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>© 2024 Flash Card WebbApp. All rights reserved.</FooterText>
        </FooterContainer>
    );
};

export default Footer;
