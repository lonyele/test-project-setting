import { shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';

import { TestHello } from '..';
import '../../../../setupTests';

describe('TestHello describe~~~', () => {
  it('should render without fail', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestHello message="Whatttt" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render with corret message that has passed', () => {
    const wrapped = shallow(<TestHello message="ASdfsf!!!!!!!!!!!!!!" />);
    expect(wrapped.text()).toEqual('ASdfsf');
  });

  it('should snapshopt', () => {
    const wrapped = create(<TestHello message="snappp" />);
    expect(wrapped).toMatchSnapshot();
  });
});
