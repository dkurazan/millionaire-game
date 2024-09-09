'use client';

import Link from 'next/link';
import React from 'react';

type ErrorProps = {
  error: {
    message: string;
  };
};

export default function Error({ error }: ErrorProps) {
  return (
    <div className="error">
      <h1>Something went wrong :/</h1>
      <p>{error.message}</p>
      <Link className='button' href='/'>Home</Link>
    </div>
  );
}
