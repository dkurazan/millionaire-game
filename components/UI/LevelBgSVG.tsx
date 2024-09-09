import React from 'react';
import styles from '../game_map/GameMap.module.scss';

export default function LevelBgDesktopSVG() {
  return (
    <>
      <svg
        width="376"
        height="40"
        viewBox="0 0 376 40"
        fill="none"
        className={`${styles.backgroundSVG} ${styles.desktop}`}
      >

        <path
          d="M90.2872 0.5H285.713C289.126 0.5 292.362 2.01596 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6375 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5Z"
          stroke="#D0D0D8"
        />
      </svg>
      <svg
        width="320"
        height="32"
        viewBox="0 0 320 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.backgroundSVG} ${styles.mobile}`}
      >

        <path
          d="M61.4944 0.5H258.506C261.474 0.5 264.328 1.64809 266.47 3.70405L279.278 16L266.47 28.296C264.328 30.3519 261.474 31.5 258.506 31.5H61.4944C58.5256 31.5 55.6719 30.3519 53.5303 28.296L40.722 16L53.5303 3.70404C55.6719 1.64809 58.5256 0.5 61.4944 0.5Z"
          fill="white"
          stroke="#D0D0D8"
        />
      </svg>
    </>
  );
}
