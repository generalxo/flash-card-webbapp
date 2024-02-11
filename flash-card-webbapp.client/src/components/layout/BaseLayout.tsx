import { ReactNode } from 'react';
import styled from 'styled-components';
//Created Components
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

/* Notes:
    The child prop is the page content.
*/

/* Styled Components Start */
const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: var(--bg-p);
`;

const ChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 93svh;
    width: 1600px;
    margin: 0 auto;
`;
/* Styled Components End */

// This child is the page content
type LayoutProps = {
    children: ReactNode;
};

const BaseLayout = ({ children }: LayoutProps) => {
    return (
        <Container>
            <Navbar />
                <ChildContainer>
                    {children}
                </ChildContainer>
            <Footer />
        </Container>
    );
}

export default BaseLayout;
