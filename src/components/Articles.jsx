import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const Articles = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={article.name, Math.random}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul>
      {articleElements}
    </ul>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }))
};

export default Articles;
