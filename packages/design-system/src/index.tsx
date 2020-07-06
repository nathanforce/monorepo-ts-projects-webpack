import styled from 'styled-components';
import * as React from 'react';
import { getNowIso } from '@packages/utils';

export const Button = styled.button`
  color: tomato;
`;

export const Spinner = styled.div``;

export const RightNow = () => {
  return <time>{getNowIso()}</time>;
};
