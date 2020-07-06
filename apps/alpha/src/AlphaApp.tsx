import * as React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { Button, RightNow } from '@packages/design-system';
import { toUpper } from '@packages/utils';
import { GENERIC_ERROR_MESSAGE } from '@packages/constants';

export const ErrorMessage: React.FC = () => {
  return <span>{GENERIC_ERROR_MESSAGE}</span>;
};
const RedPage = () => {
  const content = toUpper('red');
  return <Button>{content}</Button>;
};
const GreenPage = () => {
  const content = toUpper('green');
  return <Button>{content}</Button>;
};
const BluePage = () => {
  const content = toUpper('blue');
  return <Button>{content}</Button>;
};

export default function AlphaApp() {
  return (
    <div>
      <span>
        Hello, the time is <RightNow />
      </span>
      <Switch>
        <Route path="/red" exact strict component={RedPage} />
        <Route path="/green" exact strict component={GreenPage} />
        <Route path="/blue" exact strict component={BluePage} />
        <Route path="/error" exact strict>
          <ErrorMessage />
        </Route>
      </Switch>
    </div>
  );
}
