import styled from 'styled-components';
import BaseDiv from '../../components/misc/BaseDiv';

const StyledTitle = styled.h1`
    Text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.61rem;
`

const CardPage = () => {
    return (
        <>
            <BaseDiv>
                <StyledTitle>My Cards!</StyledTitle>
            </BaseDiv>
        </>
    );
}

export default CardPage;