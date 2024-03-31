import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--mc-p);
    padding: 1rem;
    margin: 25px 0;
    border-radius: var(--r-l);
    line-height: 0.8;
`;

interface HeaderProps {
    title: string;
}

const Header = (prop: HeaderProps) => {
    return (
        <HeaderContainer>
            <h1>{prop.title}</h1>
        </HeaderContainer>
    );
};

export default Header;