import { createBrowserRouter } from 'react-router-dom';
import { Page404, HomePage, Pokedex} from './pages/index'
import { App } from './App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'pokedex', element: <Pokedex />,
				children: [
					{ path: 'pokedex/:pokemonId', element:<div>En la pokedex del pokemon 1</div>},
				],
			},
			{
				path: 'local', element: <div>Partida local</div>,
			},
		],
	},
	{
		path: '*', element: <Page404/>,
	},
]);