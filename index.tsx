import { registerRootComponent } from 'expo';
import { InMemoryCache, ApolloProvider, ApolloClient, HttpLink } from '@apollo/client';
import React from 'react';

// component
import App from './App';

// const Link = createHttpLink({
//     uri: 'https://cors-anywhere.herokuapp.com/https://powerful-atoll-68063.herokuapp.com/graphql',
//     fetchOptions: {
//         mode: 'cors'
//     }
// })

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: 'https://cors-anywhere.herokuapp.com/https://powerful-atoll-68063.herokuapp.com/graphql',
		fetchOptions: {
			mode: 'no-cors',
		},
	}),
});

const myApp: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	);
};

registerRootComponent(myApp);
