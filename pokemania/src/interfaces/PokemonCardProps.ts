import { Pokemon } from "./Pokedex";

export interface PokemonCardProps {
    pokemon: Pokemon[];
    activeIndex: number;
    translateY: number;
    handleButtonClick: (direction: string) => void;
  }