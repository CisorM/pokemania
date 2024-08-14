// combinations.ts

export type Condition = {
  type?: string;
  region?: string;
  category?: string;
};

export type Board = Condition[][];

export const boards: Board[] = [
  // Tablero 1
  [
    [{ type: 'Dragon', region: 'Hoenn' }, { type: 'Dragon', category: 'Legendario' }, { type: 'Dragon', region: 'Kanto' }],
    [{ type: 'Planta', region: 'Hoenn' }, { type: 'Planta', category: 'Legendario' }, { type: 'Planta', region: 'Kanto' }],
    [{ type: 'Fuego', region: 'Hoenn' }, { type: 'Fuego', category: 'Legendario' }, { type: 'Fuego', region: 'Kanto' }],
  ],
  // Tablero 2
  [
    [{ type: 'Psiquico', region: 'Kanto' }, { type: 'Psiquico', category: 'Legendario' }, { type: 'Psiquico', region: 'Johto' }],
    [{ type: 'Normal', region: 'Kanto' }, { type: 'Normal', category: 'Legendario' }, { type: 'Normal', region: 'Johto' }],
    [{ type: 'Volador', region: 'Kanto' }, { type: 'Volador', category: 'Legendario' }, { type: 'Volador', region: 'Johto' }],
  ],
  // Tablero 3
  [
    [{ type: 'Agua', region: 'Sinnoh' }, { type: 'Agua', region: 'Hoenn' }, { type: 'Agua', category: 'Legendario' }],
    [{ type: 'Electricidad', region: 'Sinnoh' }, { type: 'Electricidad', region: 'Hoenn' }, { type: 'Electricidad', category: 'Legendario' }],
    [{ type: 'Roca', region: 'Sinnoh' }, { type: 'Roca', region: 'Hoenn' }, { type: 'Roca', category: 'Legendario' }],
  ],
  // Puedes añadir más tableros aquí...
];
