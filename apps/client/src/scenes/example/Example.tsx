import React, { useState, useEffect } from 'react';
import { useQuery } from 'urql';
import { examplesNames$ } from '../../services/example.service';

const Example: React.FC = () => {
	const [names, setNames] = useState();

	const [result] = useQuery({
		query: `query {
    cat {
      id
      firstName
      lastName
    }
  }
  `,
	});

	useEffect(() => {
		const sub = examplesNames$.subscribe(setNames);
		return () => sub.unsubscribe();
	}, []);

	if (result.error) return <div>There was an error!</div>;

	if (result.fetching) return <div>Fetching!</div>;

	return (
		<div>
			<h1>{result.data.cat.firstName}</h1>
			<h6 onClick={() => examplesNames$.next("Eleanor")}>{names}</h6>
		</div>
	);
};

export default Example;
