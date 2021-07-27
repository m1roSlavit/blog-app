import React, { FC } from 'react';
import styled from 'styled-components';
import NavLink from '../NavLink/NavLink';

const Nav: FC = () => {
    return (
        <StyledNav>
            <NavLink text="Home" href="/" />
            <NavLink text="New Post" href="/posts/new" />
        </StyledNav>
    );
};

export default Nav;

export const StyledNav = styled.div`
    display: flex;
`;
