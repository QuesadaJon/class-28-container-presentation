import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList';

const articles = [
  {
    author: 'https://image.com',
    image: 'image',
    title: 'title1',
    description: 'description',
    url: 'url'
  },
  {
    author: 'https://image.com',
    image: 'image',
    title: 'title2',
    description: 'description',
    url: 'url'
  },
  {
    author: 'https://image.com',
    image: 'image',
    title: 'title3',
    description: 'description',
    url: 'url'
  },
  {
    author: 'https://image.com',
    image: 'image',
    title: 'title4',
    description: 'description',
    url: 'url'
  }
];

describe('ArticleList component', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(
      <ArticleList articles={articles} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
})
;
