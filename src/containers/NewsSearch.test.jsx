import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import user from '@testing-library/user-event';
import NewsSearch from './NewsSearch';

const server = setupServer(
  rest.get('http://newsapi.org/v2/everything', (req, res, ctx) => {
    return res(ctx.json({ articles: [
      { author: 'author', 
        urlToImage: 'img', 
        title: 'title', 
        description: 'description', 
        url: 'url' 
      }
    ] 
    }));
  })
);

describe('NewsSearch container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('searches for articles when a search term is typed', () => {
    render(<NewsSearch />);

    const searchInput = screen.getByPlaceholderText('Search');

    user.type(searchInput, 'dogs');

    return waitFor(() => {
      expect(screen.getByTestId('articles')).not.toBeEmptyDOMElement();
    });
  });
});
