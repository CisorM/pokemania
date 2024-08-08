import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { App } from "./App";
import HomePage from "./pages/HomePage";
import { PokemonProvider } from "./context/PokedexContext";

const Pokedex = lazy(() => import("./pages/Pokedex"));
const PokemonDetails = lazy(() => import("./pages/PokemonDetails"));
const Page404 = lazy(() => import("./pages/Page404"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "pokedex",
        element: (
          <PokemonProvider>
            <Pokedex />
          </PokemonProvider>
        ),
      },
      { path: "pokedex/:pokemonId", element: <PokemonDetails /> },
      { path: "local", element: <div>Partida local</div> },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
