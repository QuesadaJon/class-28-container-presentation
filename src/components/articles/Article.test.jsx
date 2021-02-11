import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(
      <Article 
        author="author"
        image="image"
        title="title"
        description="description"
        url="url"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
