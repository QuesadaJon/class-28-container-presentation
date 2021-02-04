import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ author, title, description }) => (
  <figure>
    <p>{author}</p>
    <p>{title}</p>
    <p>{description}</p>
  </figure>
);

Article.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;
