import * as React from 'react';
import styled from 'styled-components';

import { ITestHello } from './TestHello.type';

const TestHello = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  border: 1px solid black;
`;

// export const TestHello = styled.h1`
//   fonttt-size: 1.5em;
//   text-align: center;
//   coloooor: palevioletred;
//   whattt: theeeee;
// `;

/**
 * Simple component to test
 */
export default (props: ITestHello) => {
  const { message } = props;
  return <TestHello>{message}</TestHello>;
};
