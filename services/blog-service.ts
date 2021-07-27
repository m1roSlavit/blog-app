import axios from 'axios';
import { IComment, IPost, IPostRes } from '../types/post';

class BlogService {
    baseApi = 'https://simple-blog-api.crew.red';

    _sortPostsById = (posts: IPostRes[]) => {
        return posts.sort((a, b) => b.id - a.id);
    };

    _isValidPost = (post: IPostRes): boolean => {
        return post.title !== undefined && post.body !== undefined;
    };

    _cleanPosts = (posts: IPostRes[]): IPostRes[] => {
        return posts.filter(this._isValidPost);
    };

    getAllPosts = () => {
        return axios
            .get<IPostRes[]>(`${this.baseApi}/posts?_embed=comments`)
            .then((res) => res.data)
            .then(this._cleanPosts)
            .then(this._sortPostsById);
    };

    postNewComment = (comment: IComment) => {
        return axios.post(`${this.baseApi}/comments`, comment);
    };

    postNewPost = (post: IPost) => {
        return axios.post(`${this.baseApi}/posts`, post);
    };

    getPost = (id: number | string) => {
        return axios.get<IPostRes>(`${this.baseApi}/posts/${id}?_embed=comments`).then((res) => res.data);
    };
}

const blogService = new BlogService();

export default blogService;
