import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

import Flex from '../Flex';
import truncateString from '../../utils/truncateString';
import { IPost } from '../../types/post';
import { useRouter } from 'next/router';

interface PostPreviewProps {
    post: IPost;
}

const PostPreview: FC<PostPreviewProps> = ({ post }) => {
    const router = useRouter();

    const { id, title, body, comments } = post;
    const truncatedTitle = title ? truncateString(title, 100) : title;
    const truncatedBody = body ? truncateString(body, 170) : body;
    return (
        <StyledPostPreview>
            <PostPreviewTitle onClick={() => router.push(`/posts/${id}`)}>{truncatedTitle}</PostPreviewTitle>
            <PostPreviewBody>{truncatedBody}</PostPreviewBody>
            <Flex align="center">
                <FontAwesomeIcon icon={faCommentDots} width={20} color="#A1A5A6" />
                <PostPreviewCommnetsCount>{comments?.length}</PostPreviewCommnetsCount>
            </Flex>
        </StyledPostPreview>
    );
};

const StyledPostPreview = styled.div`
    max-height: 150px;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 0 10px 1px rgba(34, 60, 80, 0.1);
`;

const PostPreviewTitle = styled.h2`
    cursor: pointer;
    font-size: 20px;
    color: lightslategrey;
    margin-bottom: 10px;
    text-shadow: 2px 2px 0 #eaeff1;
`;

const PostPreviewBody = styled.p`
    font-size: 16px;
    color: #1f1f23;
    margin-bottom: 5px;
`;

const PostPreviewCommnetsCount = styled.div`
    margin-left: 5px;
`;

export default PostPreview;
