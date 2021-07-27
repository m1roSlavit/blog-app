import React, { FC } from 'react';
import styled from 'styled-components';

import Comment from '../Comment';
import { IComment } from '../../types/post';
import Flex from '../Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

interface CommentsProps {
    comments: IComment[];
}

const Comments: FC<CommentsProps> = ({ comments }) => {
    return (
        <StyledComments>
            <CommentsTitle>Comments:</CommentsTitle>
            <CommentsList>
                {comments.length === 0 ? (
                    <Flex align="center">
                        <FontAwesomeIcon width={30} icon={faComments} color="#B2B4B8" />
                        <CommentsNoneText>No comments</CommentsNoneText>
                    </Flex>
                ) : (
                    comments.map((comment) => <Comment key={comment.id} comment={comment} />)
                )}
            </CommentsList>
        </StyledComments>
    );
};

const StyledComments = styled.div``;

const CommentsTitle = styled.h3`
    font-size: 24px;
    color: #778899;
    margin-bottom: 25px;
`;

const CommentsNoneText = styled.div`
    margin-left: 10px;
`;

const CommentsList = styled.div`
    & > * {
        margin-bottom: 15px;
        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

export default Comments;
