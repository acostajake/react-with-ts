import { FetchTodosAction, DeleteTodoAction } from '../actions';

export enum ActionTypes {
	// without specifying each item gets an int value starting with 0
	fetchTodos,
	deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
