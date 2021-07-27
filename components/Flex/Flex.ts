import styled from 'styled-components';

interface FlexProps {
    direction?: string;
    justify?: string;
    align?: string;
}

const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction ?? 'row'};
    justify-content: ${({ justify }) => justify ?? 'flex-start'};
    align-items: ${({ align }) => align ?? 'stretch'};
`;

export default Flex;
