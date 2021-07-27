import { PostsActions, PostsState, PostsActionTypes } from '../../types/post';

const initialState: PostsState = {
    postsList: {
        posts: [],
        loading: false,
        error: null,
    },
    currentPost: {
        post: null,
        loading: false,
        error: null,
    },
    newPost: {
        post: null,
        loading: false,
        error: null,
    },
    newComment: {
        comment: null,
        loading: false,
        error: null,
    },
};

export const postsReducers = (state: PostsState = initialState, action: PostsActions): PostsState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {
                ...state,
                postsList: {
                    ...state.postsList,
                    loading: true,
                },
            };
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                postsList: {
                    ...state.postsList,
                    posts: action.payload,
                    loading: false,
                },
            };
        case PostsActionTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                postsList: {
                    ...state.postsList,
                    loading: false,
                    error: action.payload,
                },
            };
        case PostsActionTypes.FETCH_POST:
            return {
                ...state,
                currentPost: {
                    ...state.currentPost,
                    loading: true,
                },
            };
        case PostsActionTypes.FETCH_POST_SUCCESS:
            return {
                ...state,
                currentPost: {
                    ...state.currentPost,
                    post: action.payload,
                    loading: false,
                },
            };
        case PostsActionTypes.FETCH_POST_FAILURE:
            return {
                ...state,
                currentPost: {
                    ...state.currentPost,
                    loading: false,
                    error: action.payload,
                },
            };
        case PostsActionTypes.CREATE_COMMENT:
            return {
                ...state,
                newComment: {
                    ...state.newComment,
                    loading: true,
                },
            };
        case PostsActionTypes.CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                newComment: {
                    ...state.newComment,
                    comment: action.payload,
                    loading: false,
                },
            };
        case PostsActionTypes.CREATE_COMMENT_FAILURE:
            return {
                ...state,
                newComment: {
                    ...state.newComment,
                    loading: false,
                    error: action.payload,
                },
            };
        default:
            return state;
    }
};
