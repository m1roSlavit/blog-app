import React, { FC } from 'react';
import MainLayout from '../../layouts/MainLayout';
import PostFull from '../../components/PostFull';
import { NextThunkDispatch, wrapper } from '../../store';
import { GetServerSidePropsResult } from 'next';
import { fetchPost } from '../../store/actions/posts';
import { Number, Record, String } from 'runtypes';

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ params }): Promise<GetServerSidePropsResult<any>> => {
            const PostPageParams = Record({
                postId: Number.Or(String),
            });
            const { postId } = PostPageParams.check(params);

            const dispatch = store.dispatch as NextThunkDispatch;
            await dispatch(await fetchPost(postId.toString()));
            return {
                props: {},
            };
        },
);

const Post: FC = () => {
    return (
        <MainLayout>
            <PostFull />
        </MainLayout>
    );
};

export default Post;
