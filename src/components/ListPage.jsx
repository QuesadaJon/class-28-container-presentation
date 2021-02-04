import React, { Component } from 'react';
import { getArticles } from '../services/NewsAPI';
import Articles from './Articles';

export default class ListPage extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    getArticles()
      .then(articles => this.setState({ articles }));
  }

  render() {
    const { articles } = this.state;
    return (
      <>
        <Articles articles={ articles } />
      </>
    );
  }
}
