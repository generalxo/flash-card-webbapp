import styled from "@emotion/styled";
import BaseDiv from "../../components/misc/BaseDiv";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

const PageContainer = styled(BaseDiv)``;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 25rem;
    height: 15rem;
    padding: .5rem;
    background-color: #2e2e2e;
    border: 2px solid #6e0000;
    border-radius: var(--r-l);
`;

const DesciptionText = styled.p`
    text-align: left;
    font-size: 1rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-bottom: 1rem;
`;

const BannerText = styled.h1`
    text-align: center;
    font-size: 3.2rem;
    margin-bottom: 2rem;
`;

const TitleText = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin-bottom: .75rem;
`;

const CardTypePicker = () => {
    const { id } = useParams();
    const deckId = id?.toString() || '';
    const texthref = `/create/text/${deckId}`;
    const optionhref = `/create/option/${deckId}`;

    return (
        <PageContainer>
            <BannerText>Choose Card Type</BannerText>
            <CardWrapper>
                <StyledCard>
                    <TitleText>Text Card</TitleText>
                    <DesciptionText>A card that takes in a text input that has two strictness options. Basic & Strict</DesciptionText>
                    <DesciptionText>Basic will not care about upper or lower case, or spaces. Strict will care about all of those things.</DesciptionText>
                    <ButtonContainer>
                        <Button variant='contained' color='success' href={texthref}>Create A Card</Button>
                    </ButtonContainer>
                </StyledCard>
                <StyledCard>
                    <TitleText>Option Card</TitleText>
                    <DesciptionText>Create a card with multiple options</DesciptionText>
                    <DesciptionText>One option will be correct and the rest will be incorrect. At least one option needs to be added but 3 are recomended so 4 options are availible</DesciptionText>
                    <DesciptionText></DesciptionText>
                    <ButtonContainer>
                        <Button variant='contained' color='success' href={optionhref}>Create A Card</Button>
                    </ButtonContainer>
                </StyledCard>
            </CardWrapper>
        </PageContainer>
    );
};

export default CardTypePicker;