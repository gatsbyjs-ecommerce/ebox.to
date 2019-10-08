import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from './Seo';
import Layout from './Layout';
import Heading from './element/Heading';

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    sanityPage(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      description
    }
  }
`;

export default class PageView extends React.Component {
  render() {
    const { data } = this.props;
    const page = data.sanityPage;

    return (
      <Layout>
        <Seo
          title={page.title}
          description=""
          url={`${config.siteUrl}/page/${page.slug}`}
        />
        <div className="section">
          <div className="container">
            <Heading centered>{page.title}</Heading>
            <p>{page.description}</p>
          </div>
        </div>
      </Layout>
    );
  }
}
