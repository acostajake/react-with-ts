import { Todo, Action } from '../actions';
import { ActionTypes } from '../actions/types';

// first arg is array of todos, initialized to empty array if none found
export const todosReducer = (state: Todo[] = [], action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchTodos:
			return action.payload;
		case ActionTypes.deleteTodo:
			return state.filter((todo: Todo) => todo.id !== action.payload);
		default:
			return state;
	}
};
