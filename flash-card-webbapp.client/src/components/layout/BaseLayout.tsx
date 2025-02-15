import { ReactNode } from 'react';
import styled from '@emotion/styled';
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
`;

const ChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 95svh;
    max-width: 1600px;
    margin: 0 auto;
`;

const BaseLayoutWrapper = styled.div`
    background-color: #191818;
    opacity: 1;
    background-image: radial-gradient(#3e1d71 1px, #110f16 1px);
    background-size: 20px 20px;
    background-attachment: local, scroll;
    min-width: 100%;
    min-height: 100%;
`;
/* Styled Components End */

// This child is the page content
type LayoutProps = {
    children: ReactNode;
};

const BaseLayout = ({ children }: LayoutProps) => {
    return (
        <BaseLayoutWrapper>
            <Container>
                <Navbar />
                <ChildContainer>
                    {children}
                </ChildContainer>
                <Footer />
            </Container>
        </BaseLayoutWrapper>
    );
}

export default BaseLayout;