import styled from 'styled-components';

interface ContainerProps {
    fluid: boolean;
}

const CContainer = styled.div<ContainerProps>`
    width: ${(props) => (props.fluid ? '100%' : '1024px')};
    margin: ${(props) => (props.fluid ? '15px' : 'auto')};
`;

export default CContainer;
