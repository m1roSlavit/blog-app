export interface IComment {
    id?: number;
    postId: number;
    body: string;
}

export interface IPost {
    id?: number;
    title: string;
    body: string;
    comments?: IComment[];
}

export interface IPostRes {
    id: number;
    title: string;
    body: string;
    comments?: IComment[];
}

export interface PostsState {
    postsList: {
        posts: IPostRes[];
        loading: boolean;
        error: null | string;
    };
    currentPost: {
        post: IPostRes | null;
        loading: boolean;
        error: null | string;
    };
    newPost: {
        post: IPostRes | null;
        loading: boolean;
        error: null | string;
    };
    newComment: {
        comment: IComment | null;
        loading: boolean;
        error: null | string;
    };
}

export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE',
    FETCH_POST = 'FETCH_POST',
    FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
    FETCH_POST_FAILURE = 'FETCH_POST_FAILURE',
    CREATE_POST = 'CREATE_POST',
    CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS',
    CREATE_POST_FAILURE = 'CREATE_POST_FAILURE',
    CREATE_COMMENT = 'CREATE_COMMENT',
    CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS',
    CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE',
}

export interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;
}

export interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: IPostRes[];
}

export interface FetchPostsFailureAction {
    type: PostsActionTypes.FETCH_POSTS_FAILURE;
    payload: string;
}

export interface FetchPostAction {
    type: PostsActionTypes.FETCH_POST;
}

export interface FetchPostSuccessAction {
    type: PostsActionTypes.FETCH_POST_SUCCESS;
    payload: IPostRes;
}

export interface FetchPostFailureAction {
    type: PostsActionTypes.FETCH_POST_FAILURE;
    payload: string;
}

export interface CreatePostAction {
    type: PostsActionTypes.CREATE_POST;
}

export interface CreatePostSuccessAction {
    type: PostsActionTypes.CREATE_POST_SUCCESS;
    payload: IPost;
}

export interface CreatePostFailureAction {
    type: PostsActionTypes.CREATE_POST_FAILURE;
    payload: string;
}

export interface CreateCommentAction {
    type: PostsActionTypes.CREATE_COMMENT;
}

export interface CreateCommentSuccessAction {
    type: PostsActionTypes.CREATE_COMMENT_SUCCESS;
    payload: IComment;
}

export interface CreateCommentFailureAction {
    type: PostsActionTypes.CREATE_COMMENT_FAILURE;
    payload: string;
}

export type PostsActions =
    | FetchPostsAction
    | FetchPostsSuccessAction
    | FetchPostsFailureAction
    | FetchPostAction
    | FetchPostSuccessAction
    | FetchPostFailureAction
    | CreatePostAction
    | CreatePostSuccessAction
    | CreatePostFailureAction
    | CreateCommentAction
    | CreateCommentSuccessAction
    | CreateCommentFailureAction;

