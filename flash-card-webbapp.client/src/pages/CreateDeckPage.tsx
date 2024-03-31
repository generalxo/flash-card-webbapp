import styled from 'styled-components';
//Created Components
import CreateDeckForm from '../components/forms/CreateDeckForm';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FromContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CreateDeckPage = () => {
    return(
        <PageContainer>
            <h1>My Deck</h1>
            <div>

            </div>
            <FromContainer>
                <CreateDeckForm />
            </FromContainer>
        </PageContainer>
    );
};

export default CreateDeckPage;