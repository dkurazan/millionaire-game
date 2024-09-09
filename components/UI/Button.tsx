/* eslint-disable react/require-default-props */
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export default function Button({
  children,
  type = 'button',
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type ?? 'button'} className="button" {...props}>
      {children}
    </button>
  );
}
