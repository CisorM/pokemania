import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{ index: true, element: <div>Bienvenido a pokemania 2</div> },
			{
				path: 'pokedex', element: <div>En la pokedex</div>,
				children: [
					{ path: 'pokedex/:pokemonId', element:<div>En la pokedex del pokemon 1</div>},
				],
			},
			{
				path: 'local', element: <div>Partida local</div>,
			},
		],
	},
]);