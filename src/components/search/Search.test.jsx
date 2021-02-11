import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(
      <Search search="blah" onChange={jest.fn()}/>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
