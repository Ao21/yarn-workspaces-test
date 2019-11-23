import React, { useState, useEffect } from 'react';
import { useQuery, useSubscription } from 'urql';
import { examplesNames$ } from '../../services/example.service';

const Example: React.FC = () => {
	const [names, setNames] = useState();

	const [result] = useSubscription(
		{
			query: `subscription {
			cats {
				id,
				firstName
			}
		}
  `,
		},
		(store, message) => {
			return message;
		},
	);

	useEffect(() => {
		const sub = examplesNames$.subscribe(setNames);
		return () => sub.unsubscribe();
	}, []);

	console.log(result);
	if (result.error) return <div>There was an error!</div>;

	if (!result.data) return <div>Fetching!</div>;

	return (
		<div>
			<h1>{result.data.cats.firstName}</h1>
			<h6 onClick={() => examplesNames$.next('Eleanor')}>{names}</h6>
		</div>
	);
};

export default Example;
