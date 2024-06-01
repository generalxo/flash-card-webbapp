import styled from 'styled-components';

interface BaseBtnProps {
    btnColor?: string;
    txtColor?: string;
}

const BaseBtn = styled.button<BaseBtnProps>((props) => ({
    padding: '10px',
    width: '100%',
    backgroundColor: props.btnColor || 'var(--mc-p)',
    color: props.txtColor || 'var(--tx-p)',
    border: 'none',
    cursor: 'pointer',
}));

export default BaseBtn;