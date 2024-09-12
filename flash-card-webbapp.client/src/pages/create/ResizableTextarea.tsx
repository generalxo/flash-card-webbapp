import styled from "@emotion/styled";
import {useRef, useEffect, forwardRef, useImperativeHandle, memo, useCallback} from "react";

const TextArea = styled.textarea`
    width: 35rem;
    padding: .25rem;
    text-align: center;
    border-radius: var(--r-s);
    resize: none;
    outline: none;
    background: #f9f9f9;
    font-size: 1rem;
	min-height: 1.5rem;
`;

interface IResizableTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{};

const ResizableTextArea = forwardRef<HTMLTextAreaElement, IResizableTextAreaProps>(({ onChange, value, ...props }, ref) => {
	
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	useImperativeHandle(ref, () => textareaRef.current!);

	const handleAutoResize = useCallback(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 3}px`;
		};
	}, [value]);

  	useEffect(() => {
    	handleAutoResize();
  	}, [handleAutoResize, value]);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			handleAutoResize();
			if (onChange) {
				onChange(e);
			};
		}, [handleAutoResize, onChange]
	);

  	return (
    	<TextArea value={value} ref={textareaRef} onChange={handleChange} {...props} />
	);
});

export default memo(ResizableTextArea);