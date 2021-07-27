import React, { FC } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Logo: FC = (props) => {
    const router = useRouter();
    return (
        <StyledLogo {...props}>
            <img src="/logo.png" alt="Logo" onClick={() => router.push('/')} />
        </StyledLogo>
    );
};

export default Logo;

export const StyledLogo = styled.div`
    width: 50px;
    cursor: pointer;
`;
