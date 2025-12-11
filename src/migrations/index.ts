import * as migration_20251210_220535 from './20251210_220535';
import * as migration_20251211_233100 from './20251211_233100';

export const migrations = [
  {
    up: migration_20251210_220535.up,
    down: migration_20251210_220535.down,
    name: '20251210_220535',
  },
  {
    up: migration_20251211_233100.up,
    down: migration_20251211_233100.down,
    name: '20251211_233100'
  },
];
