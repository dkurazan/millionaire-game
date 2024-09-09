import React from 'react';
import { useAppSelector } from '@/hooks/reduxHooks';
import gameConfig from '@/game_config.json';
import LevelItem from './LevelItem';
import styles from './GameMap.module.scss';

export default function GameMap() {
  const { questionIndex } = useAppSelector((state) => state.answer);
  const { isOpen } = useAppSelector((state) => state.mapModal);

  let cssClasses;

  // handles the map modal for mobile devices
  if (isOpen) {
    cssClasses = `${styles.sideBar} ${styles.active}`;
  } else {
    cssClasses = styles.sideBar;
  }
  
  return (
    <aside className={cssClasses}>
      <ul className={styles.levelsList}>
        {gameConfig.levels.map((level, levelIndex) => (
          <LevelItem
            key={level.reward}
            level={level}
            active={questionIndex === levelIndex}
            expiered={questionIndex > levelIndex}
          />
        ))}
      </ul>
    </aside>
  );
}
