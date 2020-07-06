import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AlphaApp from './AlphaApp';
import { Spinner } from '@packages/design-system';

render(
  <BrowserRouter>
    <React.Suspense fallback={<Spinner />}>
      <AlphaApp />
    </React.Suspense>
  </BrowserRouter>,
  document.getElementById('app')
);

console.log();
