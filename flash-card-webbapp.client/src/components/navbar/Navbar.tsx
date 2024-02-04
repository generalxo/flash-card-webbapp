import styled from 'styled-components';
// import index from '../index.css';
import NavbarItem from './NavbarItem';

/* TODO:
    create to do
*/ 

const NavigationBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--mc-p);
    padding-top: .61rem;
    padding-bottom: .61rem;
    margin-bottom: var(--g-s);

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin-right: .75rem;
        margin-left: .75rem;
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
        { urlText: 'About', url: '/about' },
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
