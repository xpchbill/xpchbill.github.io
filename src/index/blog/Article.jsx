import React from 'react';
import moment from 'moment';
// eslint-disable-next-line
import { config } from 'config';

import './Article.scss';

export default class Article extends React.Component {
  render() {
    const { route: { page: { data } } } = this.props;

    return (
      <div className="article article-container layout-limit-with">
        <div className="article-header">
          <h1>{data.title}</h1>
          <p className="post-author-date ms-fontSize-s">
            {`${moment(data.date).format('YYYY-MM-DD H:MM')}`}
            <span>{' | '}</span>
            <b>Categories: </b>
            {`${data.categories || 'others'}`}
            <span>{' | '}</span>
            <b>Tags: </b>
            {data.tags ? `${data.tags.join(', ')}` : 'others'}
          </p>
        </div>
        <div className="article-body">
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
      </div>
    );
  }
}
