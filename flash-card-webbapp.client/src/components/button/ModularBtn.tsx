import styled from 'styled-components';

interface SubmitBtnProps {
    text: string;
    type: 'submit' | 'button' | 'reset';
    color?: string;
    textColor?: string;
}

interface StyledSubmitBtnProps {
    btnColor?: string;
    txtColor?: string;
}

interface StledTextProps {
    textColor?: string;
}

const StyledSubmitBtn = styled.button<StyledSubmitBtnProps>((props) => ({
    padding: '10px',
    width: '100%',
    backgroundColor: props.btnColor || 'var(--mc-p)',
    color: props.txtColor || 'var(--tx-p)',
    border: 'none',
    cursor: 'pointer',
}));

const StyledText = styled.p<StledTextProps>`
    color: ${(props) => props.textColor};
`;

const ModularBtn: React.FC<SubmitBtnProps> = (props) => {
    
    return (
        <>
            <StyledSubmitBtn type={props.type} btnColor={props.color}>
                <StyledText textColor={props.textColor}>{props.text}</StyledText>
            </StyledSubmitBtn>
        </>
    );
}

export default ModularBtn;