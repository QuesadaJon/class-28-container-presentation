import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import styles from './ArticleList.css';

const ArticleList = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={article.title}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul data-testid="articles" className={styles.ArticleList}>
      {articleElements}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired
};

export default ArticleList;
