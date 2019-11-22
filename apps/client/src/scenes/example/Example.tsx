import React from 'react';
import { useQuery } from 'urql';

const Example: React.FC = () => {
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
  
  if (result.error) return <div>There was an error!</div>
  
  if (result.fetching) return <div>Fetching!</div>

	return (
		<div>
			<h1>{result.data.cat.firstName}</h1>
		</div>
	);
};

export default Example;
