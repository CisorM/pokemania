import { createBrowserRouter } from 'react-router-dom';
import { Page404, HomePage, Pokedex, PokemonDetails} from './pages/index'
import { App } from './App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{index: true, element: <HomePage />},

			{path: 'pokedex', element: <Pokedex />},
			{path: 'pokedex/:pokemonId', element: <PokemonDetails />},		
			{path: 'local', element: <div>Partida local</div>},
		],
	},
	{
		path: '*', element: <Page404/>,
	},
]);