import styled from 'styled-components';

interface BoxProps {
    mt?: number;
    mr?: number;
    mb?: number;
    ml?: number;
    pt?: number;
    pr?: number;
    pb?: number;
    pl?: number;
}

const Box = styled.div<BoxProps>`
    margin: ${({ mt = 0, mr = 0, mb = 0, ml = 0 }) => `${mt}px ${mr}px ${mb}px ${ml}px`};
    padding: ${({ pt = 0, pr = 0, pb = 0, pl = 0 }) => `${pt}px ${pr}px ${pb}px ${pl}px`};
`;

export default Box;
