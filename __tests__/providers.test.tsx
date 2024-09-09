import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StoreProvider from '../app/providers';
import '@testing-library/jest-dom';

describe('StoreProvider component', () => {
  it('renders children', () => {
    const ChildComponent: React.FC = () => <div>Test Child</div>;

    render(
      <StoreProvider>
        <ChildComponent />
      </StoreProvider>,
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
