import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/search/Search';
import { getArticles } from '../services/NewsAPI';

export default class NewsSearch extends Component {
  state = {
    search: '',
    articles: [],
  }
  fetchArticles = () => {
    getArticles(this.state.search).then(articles => 
      this.setState({ articles })
    );
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value }, () => {
      this.fetchArticles();
    });
  };

  render() {
    const { search, articles } = this.state;
    return (
      <>
        <Search search={search} onChange={this.handleSearch} />
        <ArticleList articles={articles} />
      </>
    );
  }
}
