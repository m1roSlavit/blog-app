import React, { FC } from 'react';
import styled from 'styled-components';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Comments from '../Comments';
import AddCommentsForm from '../AddCommentsForm/AddCommentsForm';

const PostFull: FC = () => {
    const { currentPost } = useTypedSelector((state) => state.posts);

    const { post } = currentPost;

    return (
        <StyledPostFull>
            <PostFullTitle>{post?.title}</PostFullTitle>
            <PostFullBody>{post?.body}</PostFullBody>
            <Comments comments={post?.comments ?? []} />
            <AddCommentsForm forPostId={post!.id} />
        </StyledPostFull>
    );
};

const StyledPostFull = styled.div``;

const PostFullTitle = styled.h2`
    font-size: 28px;
    color: #033959;
    margin-bottom: 15px;
`;
const PostFullBody = styled.p`
    color: #50575e;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 25px;
`;

export default PostFull;
