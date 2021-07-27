import React, { FC } from 'react';
import styled from 'styled-components';
import PostPreview from '../PostPreview';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const PostsList: FC = () => {
    const { postsList } = useTypedSelector((state) => state.posts);

    return (
        <StyledPostsList>
            {postsList.posts.map((post) => (
                <PostPreview key={post.id} post={post} />
            ))}
        </StyledPostsList>
    );
};

const StyledPostsList = styled.div`
    & > * {
        margin-bottom: 15px;
        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

export default PostsList;
