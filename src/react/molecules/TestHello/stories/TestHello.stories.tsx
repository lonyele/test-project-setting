import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { withReadme } from 'storybook-readme';

import { TestHello } from '../';
import TestHelloMD from '../TestHello.md';

storiesOf('NestingTest/TestHello', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(['이건 첫번쨰꺼만 withReadme']))
  .add('TestHello 첫번째', () => (
    <div style={{ width: '300px', height: '300px', border: '1px solid black' }}>
      <TestHello message="longgggggggggggggggggggggg message~~~~~" />
      <div>{text('text', 'UP')}</div>
      <div>{boolean('boolean', true)}</div>
      <div>{number('number', 1)}</div>
    </div>
  ))
  .addDecorator(withReadme(['이건 2번쨰꺼만 withReadme']))
  .add('TestHello 두번째', () => (
    <div style={{ width: '500px', height: '500px', border: '1px solid red' }}>
      <TestHello message="longgggggggggggggggggggggg message~~~~~" />
      <button onClick={action('버튼 클릭됨2')}>테스트2 action</button>
    </div>
  ))
  .addDecorator(withReadme(['whatthe', TestHelloMD]))
  .add('TestHello 세번째', () => (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          border: '1px solid green',
          marginBottom: '10px'
        }}
      >
        <TestHello message="longgggggggggggggggggggggg message~~~~~" />
      </div>
      <div
        style={{
          width: text('width', '300px'),
          height: '300px',
          border: '1px solid blue',
          marginBottom: '10px'
        }}
      >
        <TestHello message="longgggggggggggggggggggggg message~~~~~" />
      </div>
      <div
        style={{
          width: '400px',
          height: '400px',
          border: '1px solid red',
          marginBottom: '10px'
        }}
      >
        <TestHello message="longgggggggggggggggggggggg message~~~~~" />
      </div>
    </div>
  ));
