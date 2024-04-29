export interface Pokemon {
    name: string;
    id: number;
    sprites: {
        front_default: string;
        other: {
            "official-artwork": {
                front_default: string;
            };
        };
    };
}

export interface listPokemon {
    count: number,
    next: string | null,
    previous: string | null,
    results: {
        name: string,
        url: string
    }[]
}
