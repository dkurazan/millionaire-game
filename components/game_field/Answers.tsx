import React, { FormEvent } from 'react';
import toast from 'react-hot-toast';
import { getUserAnswers, validateAnswers } from '@/utils/helpers';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { setAnswerState } from '@/store/slices/answerSlice';
import AnswerItem from './AnswerItem';
import Button from '../UI/Button';
import styles from './Answers.module.scss';

type AnswersProps = {
  answerOptions: string[];
  correctAnswers: string[];
  answerState: 'pending' | 'correct' | 'wrong';
  launchNextStage: (userAnswer: boolean) => null;
};

export default function Answers({
  answerOptions,
  correctAnswers,
  answerState,
  launchNextStage,
}: AnswersProps) {
  const dispatch = useAppDispatch();

  let gridCssClasses;

  // places answers in 3 columns if their ammount greater than 4
  if (answerOptions.length > 4) {
    gridCssClasses = `${styles.answersList} ${styles.extendedGrid}`;
  } else {
    gridCssClasses = styles.answersList;
  }

  const handleUserAnswer = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userAnswers = getUserAnswers(event);
    const validationResult = validateAnswers(userAnswers, correctAnswers);

    // sets the answer correctness state
    if (validationResult === undefined) {
      toast.error(
        'You have selected wrong ammount of answers! Please, try again.',
      );

      return null;
    }

    if (validationResult) {
      dispatch(setAnswerState('correct'));
    } else {
      dispatch(setAnswerState('wrong'));
    }

    // starts a new iteration
    return launchNextStage(validationResult);
  };

  return (
    <form onSubmit={handleUserAnswer} className={styles.answersForm}>
      <ul className={gridCssClasses}>
        {answerOptions.map((answer) => (
          <AnswerItem
            key={answer}
            correctAnswers={correctAnswers}
            answer={answer}
            index={answerOptions.indexOf(answer)}
          />
        ))}
      </ul>
      <Button type="submit" disabled={answerState !== 'pending'}>
        Answer
      </Button>
    </form>
  );
}
