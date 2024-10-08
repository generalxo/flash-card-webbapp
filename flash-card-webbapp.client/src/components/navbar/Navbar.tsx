import styled from '@emotion/styled';
import NavbarItem from './NavbarItem';

const NavigationBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--mc-p);
    padding: .6rem 0;
    margin-bottom: 10px;
    height: 3rem;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.349);

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        align-items: center;
    }

    li {
        margin: 0 .75rem;
    }
`;

interface NavbarItemProps {
    urlText: string;
    url: string;
};

const Navbar = () => {

    // Will later be replaced with more modular code.
    const navbarItems: NavbarItemProps[] = [
        { urlText: 'Home', url: '/' },
        { urlText: 'Decks', url: '/decks' },
        { urlText: 'Contact', url: '/contact' },
        { urlText: 'Log In', url: '/login' },
        { urlText: 'Sign Up', url: '/signup' },
    ];

    return (
        <NavigationBar>
                <ul>
                    <>
                        {navbarItems.map((item, index) => (
                            <NavbarItem key={index} urlText={item.urlText} url={item.url} />
                        ))}
                    </>
                </ul>
        </NavigationBar>
    );
};

export default Navbar;
