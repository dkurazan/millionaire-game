'use client';

import React from 'react';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { clearStore } from '@/store/slices/answerSlice';
import InfoBanner from '@/components/InfoBanner';

export default function Home() {
  const dispatch = useAppDispatch();

  const handleClearStore = () => {
    dispatch(clearStore());
  };

  return (
    <InfoBanner
      title="Who wants to be a millionaire?"
      buttonText="Start"
      buttonUrl="quiz"
      buttonOnClick={handleClearStore}
      diagonalBg
    />
  );
}
