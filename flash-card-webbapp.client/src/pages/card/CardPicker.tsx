import { useState } from 'react';
import styled from '@emotion/styled';
import OptionCardCreator from './OptionCardForm';
import CardCreator from './CardCreator';
import BaseDiv from './../../components/misc/BaseDiv';

const CardPickerContainer = styled(BaseDiv)`
    width: 100%;
`;

const Button = styled.button`

`;

const CardPicker = () => {
    const [bool, setBool] = useState<boolean>(false);

    const handleClick = () => {
        if (bool == false) {
            setBool(true);
        } else {
            setBool(false);
        };
    };


    return (
        <>
            <CardPickerContainer>
                {bool ? <CardCreator /> : <OptionCardCreator /> }
                <Button onClick={handleClick}>Switch</Button>
            </CardPickerContainer>
        </>
    )
};

export default CardPicker;