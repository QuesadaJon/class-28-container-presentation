import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

const Article = ({ author, image, title, description, url }) => (
  <a className={styles.Article} href={url}>
    <figure>
      <img src={image} alt={title} />
      <figcaption>{title}</figcaption>
      <p>{author}</p>
      <p>{description}</p>
    </figure>
  </a>
);

Article.propTypes = {
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Article;
