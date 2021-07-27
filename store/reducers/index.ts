import { AnyAction, combineReducers } from 'redux';
import { postsReducers } from './postsReducers';
import { HYDRATE } from 'next-redux-wrapper';

const rootReducer = combineReducers({
    posts: postsReducers,
});

export const reducer = (state: RootState | undefined, action: AnyAction): RootState => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        default:
            return rootReducer(state, action);
    }
};

export type RootState = ReturnType<typeof rootReducer>;
