import styled from '@emotion/styled';
import BaseDiv from '../../components/misc/BaseDiv';
import CardTypePicker from './CardTypePicker';

const PageContainer = styled(BaseDiv)`
    min-width: 100%;
`;

const CreatePage = () => {
    return (
        <PageContainer>
            <CardTypePicker />
        </PageContainer>
    );
}

export default CreatePage;