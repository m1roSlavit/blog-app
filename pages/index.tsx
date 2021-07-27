import React, { FC } from 'react';
import MainLayout from '../layouts/MainLayout';
import PostsList from '../components/PostsList';
import { NextThunkDispatch, wrapper } from '../store';
import { GetServerSidePropsResult } from 'next';
import { fetchPosts } from '../store/actions/posts';

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (): Promise<GetServerSidePropsResult<any>> => {
        const dispatch = store.dispatch as NextThunkDispatch;
        await dispatch(await fetchPosts());
        return {
            props: {},
        };
    },
);

const Index: FC = () => {
    return (
        <MainLayout>
            <PostsList />
        </MainLayout>
    );
};

export default Index;
