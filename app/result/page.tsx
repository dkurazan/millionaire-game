'use client';

import React from 'react';
import gameConfig from '@/game_config.json';
import InfoBanner from '@/components/InfoBanner';
import { useAppSelector } from '@/hooks/reduxHooks';
import { currencyFormatter } from '@/utils/formatting';

export default function ResultPage() {
  const { questionIndex } = useAppSelector((state) => state.answer);
  
  let formattedReward;

  if (questionIndex === 0) {
    formattedReward = currencyFormatter.format(0);
  } else if (questionIndex + 1 === gameConfig.levels.length) {
    formattedReward = currencyFormatter.format(
      gameConfig.levels[questionIndex].reward,
    );
  } else {
    formattedReward = currencyFormatter.format(
      gameConfig.levels[questionIndex - 1].reward,
    );
  }

  const title = `${formattedReward} earned`;

  return (
    <InfoBanner
      suptitle="Total score:"
      title={title}
      buttonText="Try again"
      buttonUrl="/"
    />
  );
}
