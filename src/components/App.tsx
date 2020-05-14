import React from 'react';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';

interface AppProps {
	todos: Todo[];
	// fetch returns a promise, delete returns plain obj and causes errors
	fetchTodos: Function; // instead of typeof fetchTodos;
	deleteTodo: typeof deleteTodo;
}

interface AppState {
	fetching: boolean;
}

//  by passing in state to generic, must initialize in constructor
class _App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = { fetching: false };
	}

	componentDidUpdate(prevProps: AppProps): void {
		if (!prevProps.todos.length && this.props.todos.length) {
			this.setState({ fetching: false });
		}
	}

	onClick = (): void => {
		this.props.fetchTodos();
		this.setState({ fetching: true });
	};

	onClickDelete = (id: number): void => {
		this.props.deleteTodo(id);
	};

	renderList(): JSX.Element[] {
		return this.props.todos.map((each: Todo) => {
			return (
				<div key={each.id} onClick={() => this.onClickDelete(each.id)}>
					{each.title}
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.onClick}>Get stuff</button>
				{this.state.fetching && 'loading stuff...'}
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
