import { FormEvent } from 'react';

export const validateAnswers = (
  userAnswers: string[],
  correctAnswers: string[],
) => {
  if (!userAnswers.length || userAnswers.length < correctAnswers.length) {
    return undefined;
  }

  if (userAnswers.length !== correctAnswers.length) return false;

  const sortedArr1 = [...userAnswers].sort();
  const sortedArr2 = [...correctAnswers].sort();

  return sortedArr1.every((element, index) => element === sortedArr2[index]);
};

export const getUserAnswers = (event: FormEvent<HTMLFormElement>) => {
  const formData = new FormData(event.currentTarget);
  const parsedData = Object.fromEntries(formData);

  return Object.keys(parsedData);
};
