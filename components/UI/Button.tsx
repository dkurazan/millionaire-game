/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled: boolean;
};

export default function Button({
  children,
  type = 'button',
  disabled = false,
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type ?? 'button'}
      className="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
