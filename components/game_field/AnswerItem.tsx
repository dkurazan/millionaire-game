import React from 'react';
import { answerIndexFormatter } from '@/utils/formatting';
import { useAppSelector } from '@/hooks/reduxHooks';
import AnswerBgSVG from '../UI/AnswerBgSVG';
import styles from './Answers.module.scss';

type AnswerItemProps = {
  index: number;
  answer: string;
  correctAnswers: string[];
};

export default function AnswerItem({
  answer,
  index,
  correctAnswers,
}: AnswerItemProps) {
  const { answerState } = useAppSelector((state) => state.answer);

  let cssClasses;

  // paints the picked answers in corresponding colors
  if (answerState === 'wrong') {
    if (correctAnswers.includes(answer)) {
      cssClasses = styles.correct;
    } else {
      cssClasses = styles.wrong;
    }
  }

  if (answerState === 'correct') {
    cssClasses = styles.correct;
  }

  if (answerState === 'pending') {
    cssClasses = '';
  }

  return (
    <li>
      <input
        type="checkbox"
        name={answer}
        id={`checkbox-${index}`}
        className={styles.checkbox}
        disabled={answerState !== 'pending'}
      />
      <label
        htmlFor={`checkbox-${index}`}
        className={`${styles.answerItem} ${cssClasses}`}
      >
        <AnswerBgSVG />
        <p className={styles.answerContent}>
          <span className={styles.answerIndex}>
            {answerIndexFormatter(index)}
          </span>
          <span>{answer}</span>
        </p>
      </label>
    </li>
  );
}
