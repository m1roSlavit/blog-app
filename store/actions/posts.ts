import {
    CreateCommentAction,
    CreateCommentFailureAction,
    CreateCommentSuccessAction, CreatePostAction, CreatePostFailureAction, CreatePostSuccessAction,
    FetchPostAction,
    FetchPostFailureAction,
    FetchPostsAction,
    FetchPostsFailureAction,
    FetchPostsSuccessAction,
    FetchPostSuccessAction,
    IComment,
    IPost, IPostRes,
    PostsActions,
    PostsActionTypes,
} from '../../types/post';
import {AnyAction, Dispatch} from 'redux';
import blogService from '../../services/blog-service';

export const postsRequested = (): FetchPostsAction => ({
    type: PostsActionTypes.FETCH_POSTS,
});

export const postsRequestedSuccess = (payload: IPostRes[]): FetchPostsSuccessAction => ({
    type: PostsActionTypes.FETCH_POSTS_SUCCESS,
    payload,
});

export const postsRequestedFailure = (payload: string): FetchPostsFailureAction => ({
    type: PostsActionTypes.FETCH_POSTS_FAILURE,
    payload,
});

export const fetchPosts = () => async (dispatch: Dispatch<PostsActions>) => {
    dispatch(postsRequested());
    return blogService
        .getAllPosts()
        .then((posts) => dispatch(postsRequestedSuccess(posts)))
        .catch(() => dispatch(postsRequestedFailure('Failed to load news list')));
};

export const postRequested = (): FetchPostAction => ({
    type: PostsActionTypes.FETCH_POST,
});

export const postRequestedSuccess = (payload: IPostRes): FetchPostSuccessAction => ({
    type: PostsActionTypes.FETCH_POST_SUCCESS,
    payload,
});

export const postRequestedFailure = (payload: string): FetchPostFailureAction => ({
    type: PostsActionTypes.FETCH_POST_FAILURE,
    payload,
});

export const fetchPost = (id: number | string) => (dispatch: Dispatch<PostsActions>) => {
    dispatch(postRequested());
    return blogService
        .getPost(id)
        .then((post) => dispatch(postRequestedSuccess(post)))
        .catch(() => dispatch(postRequestedFailure('Failed to load post')));
};

export const createComment = (): CreateCommentAction => ({
    type: PostsActionTypes.CREATE_COMMENT,
});

export const createCommentSuccess = (payload: IComment): CreateCommentSuccessAction => ({
    type: PostsActionTypes.CREATE_COMMENT_SUCCESS,
    payload,
});

export const createCommentFailure = (payload: string): CreateCommentFailureAction => ({
    type: PostsActionTypes.CREATE_COMMENT_FAILURE,
    payload,
});

export const fetchCreateComment = (comment: IComment) => (dispatch: Dispatch<PostsActions>) => {
    dispatch(createComment());
    return blogService
        .postNewComment(comment)
        .then(() => {
            dispatch(createCommentSuccess(comment));
        })
        .catch(() => dispatch(createCommentFailure('Can`t publish comment')));
};

export const createPost = (): CreatePostAction => ({
    type: PostsActionTypes.CREATE_POST,
});

export const createPostSuccess = (payload: IPost): CreatePostSuccessAction => ({
    type: PostsActionTypes.CREATE_POST_SUCCESS,
    payload,
});

export const createPostFailure = (payload: string): CreatePostFailureAction => ({
    type: PostsActionTypes.CREATE_POST_FAILURE,
    payload,
});

export const fetchCreatePost = (post: IPost) => (dispatch: Dispatch<PostsActions>) => {
    dispatch(createPost());
    return blogService
        .postNewPost(post)
        .then(() => {
            dispatch(createPostSuccess(post));
        })
        .catch(() => dispatch(createPostFailure('Can`t publish post')));
};