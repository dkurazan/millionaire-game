import React from 'react';
import { currencyFormatter } from '@/utils/formatting';
import LevelBgSVG from '../UI/LevelBgSVG';
import styles from './GameMap.module.scss';

type LevelItemProps = {
  level: {
    question: string;
    answer_options: string[];
    correct_answers: string[];
    reward: number;
  };
  active: boolean;
  expiered: boolean;
};

export default function LevelItem({ level, active, expiered }: LevelItemProps) {
  let cssClasses;

  if (active) {
    cssClasses = `${styles.mapItem} ${styles.mapItemActive}`;
  } else if (expiered) {
    cssClasses = `${styles.mapItem} ${styles.mapItemExpiered}`;
  } else {
    cssClasses = styles.mapItem;
  }

  return (
    <li className={cssClasses}>
      <LevelBgSVG />
      <p className={styles.reward}>{currencyFormatter.format(level.reward)}</p>
    </li>
  );
}
