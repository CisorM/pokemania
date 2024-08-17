export interface Pokemon {
    id: string;
    name: string;
    image?: string;
}

export interface PokemonBoard {
  pokemon: {
    name: string;
    url: string;
  };
  sprites: {
    front_default: string | null;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  version_group: {
    name: string;
    url: string;
  };
}

export interface SearchBarProps {
  handleLinkClick?: (id: string | null) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
}


export interface SearchInput {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}
