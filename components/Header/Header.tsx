import React, { FC } from 'react';
import styled from 'styled-components';

import Flex from '../Flex';
import Logo from '../Logo';
import Nav from '../Nav';

const Header: FC = () => {
    return (
        <StyledHeader>
            <Flex justify="space-between" align="center">
                <Logo />
                <Nav />
            </Flex>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    padding: 15px 0;
    margin-bottom: 30px;
`;

export default Header;
