import { useState } from 'react';
import styled from '@emotion/styled';
import OptionCardCreator from '../create/OptionCardForm';
//import CardCreator from './CardCreator';
import StringCardForm from './../create/StringCardForm';
import BaseDiv from './../../components/misc/BaseDiv';

/* TODO
    Create a menu to select between the two card creators
*/ 


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
        }
    };


    return (
        <>
            <CardPickerContainer>
                {bool ? <StringCardForm /> : <OptionCardCreator /> }
                <Button onClick={handleClick}>Switch</Button>
            </CardPickerContainer>
        </>
    )
};

export default CardPicker;