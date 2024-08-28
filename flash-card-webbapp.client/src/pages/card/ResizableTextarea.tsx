import styled from "@emotion/styled";
import {useRef, useEffect} from "react";

const TextArea = styled.textarea`
    width: 35rem;
    padding: .25rem;
    text-align: center;
    border-radius: var(--r-s);
    resize: none;
    outline: none;
    background: #f9f9f9;
    font-size: 1rem;
`;

const ResizableTextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleAutoResize = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 3}px`;
		}
	}

	useEffect(() =>{
		handleAutoResize();
	}, []);

	return (
		<>
			<TextArea ref={textareaRef} onChange={handleAutoResize} placeholder={props.placeholder}/>
		</>
	);
};

export default ResizableTextArea;