import * as migration_20251210_220535 from './20251210_220535';

export const migrations = [
  {
    up: migration_20251210_220535.up,
    down: migration_20251210_220535.down,
    name: '20251210_220535'
  },
];
