import React, { FC } from 'react';
import CContainer from '../components/Container';
import Head from 'next/head';
import Header from '../components/Header';

const MainLayout: FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>Blog App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Some blog app keywords" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <CContainer fluid={false}>
                <Header />
                {children}
            </CContainer>
        </>
    );
};

export default MainLayout;
