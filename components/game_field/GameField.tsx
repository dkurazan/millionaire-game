import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useRouter } from 'next/navigation';
import { openNextQuestion, setAnswerState } from '@/store/slices/answerSlice';
import gameConfig from '@/game_config.json';
import BurgerMenuButton from '../UI/BurgerMenuButton';
import Answers from './Answers';
import styles from './GameField.module.scss';

export default function GameField() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { questionIndex, answerState } = useAppSelector(
    (state) => state.answer,
  );

  const questionObj = gameConfig.levels[questionIndex];

  if (!questionObj)
    throw new Error(
      'There is a problem with questions list. Please check game configuration!',
    );

  const handleGameFlow = (userAnswer: boolean) => {
    setTimeout(() => {
      // shows result page
      if (questionObj.grade === gameConfig.levels.length || !userAnswer) {
        return router.push('result');
      }

      // opens next question
      if (userAnswer) {
        dispatch(openNextQuestion());
        dispatch(setAnswerState('pending'));
      }
    }, gameConfig.settings.answer_result_visibility_duration);

    return null;
  };

  return (
    <section className={styles.section}>
      <BurgerMenuButton />
      <div className={styles.gameBody}>
        <div>
          <h2 className={styles.title}>{questionObj.question}</h2>
          <p className={styles.hint}>
            Select {questionObj.correct_answers.length}{' '}
            {questionObj.correct_answers.length === 1 ? 'answer' : 'answers'}
          </p>
        </div>
        <Answers
          answerOptions={questionObj.answer_options}
          correctAnswers={questionObj.correct_answers}
          answerState={answerState}
          launchNextStage={handleGameFlow}
        />
      </div>
    </section>
  );
}
