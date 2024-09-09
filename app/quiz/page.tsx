'use client';

import React from 'react';
import GameField from '@/components/game_field/GameField';
import GameMap from '@/components/game_map/GameMap';
import styles from './page.module.scss';

export default function App() {
  return (
    <main className={styles.main}>
      <GameField />
      <GameMap />
    </main>
  );
}
