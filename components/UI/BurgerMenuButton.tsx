import React from 'react';
import { toggleMenu } from '@/store/slices/mapModalSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import styles from './BurgerMenuBtn.module.scss';

export default function BurgerMenuButton() {
  const { isOpen } = useAppSelector((state) => state.mapModal);
  const dispatch = useAppDispatch();

  let cssClasses;

  if (isOpen) {
    cssClasses = `${styles.button} ${styles.active}`;
  } else {
    cssClasses = styles.button;
  }

  const handleOnClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      className={cssClasses}
      onClick={handleOnClick}
    >
      <span className={styles.strip}></span>
      <span className={styles.strip}></span>
      <span className={styles.strip}></span>
    </div>
  );
}
