import styled from "@emotion/styled";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";

interface TextFieldLabelProps {
    labelText: string;
    infoText?: string;
    marginTop?: string;
    marginBottom?: string;
}

const Label = styled.label<TextFieldLabelProps>`
    display: flex;
    flex-direction: row;
    margin: 0;
    margin-top: ${props => props.marginTop || '.5rem'};
    margin-bottom: ${props => props.marginBottom || '0'};
    padding: 0;
    font-size: 1.5rem;

    p {
        font-size: 1.55rem;
        font-weight: bold;
    }

    svg {
        align-self: center;
        margin-left: auto;
    }
`;

const TextFieldLabel: React.FC<TextFieldLabelProps> = ({ labelText, infoText, marginTop, marginBottom }) => {
    return (
        <Label labelText={labelText} marginTop={marginTop} marginBottom={marginBottom}>
            <p>{labelText}</p>
            {infoText && (
                <Tooltip title={infoText}>
                    <InfoIcon />
                </Tooltip>
            )}
        </Label>
    );
};

export default TextFieldLabel;