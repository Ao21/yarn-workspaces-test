import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Example from './scenes/example/Example';

import { createClient, Provider, defaultExchanges } from 'urql';

const client = createClient({
	url: 'http://localhost:3001/graphql',
	exchanges: [...defaultExchanges],
});

const App: React.FC = () => {
	return (
		<Provider value={client}>
			<div className="App">
				<header className="App-header">
					<Example />
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		</Provider>
	);
};

export default App;
