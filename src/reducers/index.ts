import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
	todos: Todo[];
}

// TS looks at oject passing in and ensures reducers return values of Todo[]
export const reducers = combineReducers<StoreState>({
	todos: todosReducer,
});
