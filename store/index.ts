import { Context, createWrapper } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { RootState } from './reducers';
import { reducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const makeStore = (context: Context) => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
