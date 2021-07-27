import styled from 'styled-components';

interface ButtonProps {
    fluid?: boolean;
}

const Button = styled.button<ButtonProps>`
    display: ${({ fluid }) => (fluid ? 'block' : 'inline-block')};
    width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
    padding: 15px 25px;
    box-shadow: 0 0 10px 1px rgba(34, 60, 80, 0.15);
    color: #3f4041;
    background-color: transparent;
    font-size: 18px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;
    &:disabled {
        cursor: not-allowed;
        &:hover {
            box-shadow: 0 0 10px 1px rgba(34, 60, 80, 0.15);
        }
    }
    &:hover {
        box-shadow: 0 0 10px 1px rgba(34, 60, 80, 0.4);
    }
`;

export default Button;
