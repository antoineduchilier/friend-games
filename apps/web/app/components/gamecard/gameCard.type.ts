import { JSX } from 'react';

export type GameCardType = {
  href: string;
  title: string;
  description: string;
  details: string;
  icon: JSX.Element;
  type: 'darts' | 'belote';
  disabled?: boolean;
};
