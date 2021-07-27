import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

import Flex from '../Flex';
import { IComment } from '../../types/post';

interface CommentProps {
    comment: IComment;
}

const Comment: FC<CommentProps> = ({ comment }) => {
    return (
        <StyledComment>
            <Flex>
                <CommentImg>
                    <FontAwesomeIcon icon={faUserAlt} width={30} color="#C1C5C7" />
                </CommentImg>
                <CommentText>{comment.body}</CommentText>
            </Flex>
        </StyledComment>
    );
};

const StyledComment = styled.div`
    overflow: hidden;
    padding: 15px;
    width: 350px;
    border-radius: 15px;
    box-shadow: 0 0 10px 1px rgba(34, 60, 80, 0.1) inset;
`;

const CommentImg = styled.div`
    margin-right: 15px;
    margin-top: 5px;
`;
const CommentText = styled.div`
    color: #5b5c5e;
`;

export default Comment;
