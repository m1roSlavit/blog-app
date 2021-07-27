import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps {
    text: string;
    href: string;
}

const NavLink: FC<NavLinkProps> = ({ text, href }) => {
    const { asPath } = useRouter();
    const isActive = asPath === href;

    return (
        <Link href={href}>
            <StyledNavLink isActive={isActive}>{text}</StyledNavLink>
        </Link>
    );
};

export default NavLink;

interface StyledNavLinkProps {
    isActive?: boolean;
}

export const StyledNavLink = styled.a<StyledNavLinkProps>`
    color: ${({ isActive }) => (isActive ? '#1f2122' : '#5b5c5e')};
    border-bottom: 2px solid ${({ isActive }) => (isActive ? '#eaeff1' : 'transparent')};
    display: block;
    padding: 10px;
    transition: 0.4s;
    cursor: pointer;
    font-weight: 600;
    &:hover {
        color: #1f2122;
        border-bottom-color: #eaeff1;
    }
`;
