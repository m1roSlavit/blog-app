import styled from 'styled-components';

interface TextAreaProps {
    fluid?: boolean;
}

const TextArea = styled.textarea<TextAreaProps>`
    width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
    border: none;
    resize: none;
    border-radius: 15px;
    font-size: 16px;
    color: #3f4041;
    outline: none;
    box-shadow: 0 0 10px 1px rgba(34, 60, 80, 0.15);
    padding: 15px;
`;

export default TextArea;
