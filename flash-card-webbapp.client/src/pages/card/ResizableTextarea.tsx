import styled from "@emotion/styled";
import {useRef, useEffect, forwardRef} from "react";

const TextArea = styled.textarea`
    width: 35rem;
    padding: .25rem;
    text-align: center;
    border-radius: var(--r-s);
    resize: none;
    outline: none;
    background: #f9f9f9;
    font-size: 1rem;
	min-height: 1rem;
`;

const ResizableTextArea = forwardRef<HTMLTextAreaElement,React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ onChange, value, ...props }, ref) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

  	useEffect(() => {
		if (typeof ref === "function") {
			ref(textareaRef.current);
		} else if (ref) {
			(ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = textareaRef.current;
		}
  	}, [ref]);

  	const handleAutoResize = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 3}px`;
		}
  	};

  	useEffect(() => {
    	handleAutoResize();
  	}, [value]);

  	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    	handleAutoResize();
    	if (onChange) {
      		onChange(e);
    	}
  	};

  	return (
    	<TextArea value={value} ref={textareaRef} onChange={handleChange} {...props} />
	);
});

export default ResizableTextArea;