'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from '@/store/index';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <Toaster position="top-center" />
      {children}
    </Provider>
  );
}
