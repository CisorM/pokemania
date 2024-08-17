import { Pokemon } from "./Pokedex";

export interface PokemonCardProps {
    pokemon: Pokemon[];
    activeIndex: number;
    translateY: number;
    handleButtonClick: (direction: string) => void;
  }

export interface ButtonProps {
  onClick: () => void;
  className: string;
  icon: string;

}