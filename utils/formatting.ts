import gameConfig from '@/game_config.json';

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: gameConfig.settings.currency,
  minimumFractionDigits: 0,
});

export const answerIndexFormatter = (index: number) =>
  String.fromCharCode(65 + index);
