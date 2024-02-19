import styled from "styled-components";
// created component
import Header from "../components/Header/Header";
import CreateDeckForm from "../components/forms/CreateDeckForm";
// styled components

const CreateDeckFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DecksPage = () => {
  return (
    <>
        <Header title="My Decks" />
        <CreateDeckFormWrapper>
          <CreateDeckForm />
        </CreateDeckFormWrapper>
    </>
  )
}

export default DecksPage;