import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeBanner from '../components/HomeBanner';
import ProductsList from '../components/ProductsList';
import HomeAbout from '../components/HomeAbout';
// import HomeCardsContent from '../components/HomeCardsContent';
import Subscribe from '../components/Subscribe';

export const query = graphql`
  query HomePageQuery {
    sanitySiteSettings {
      homeIntro
      homeSliderSubTitle
      description
    }
    allSanityProduct {
      edges {
        node {
          _id
          title
          slug {
            current
          }
          variant {
            color
            discountPrice
            price
            sku
            featuredImage {
              asset {
                fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const home = data.sanitySiteSettings;
  const products = data.allSanityProduct.edges;

  return (
    <Layout>
      <Seo title="Home" description={home.description} url={config.siteUrl} />
      <div>
        <HomeBanner data={home} />
        <div className="container">
          {/* <HomeCardsContent /> */}
          <ProductsList products={products} />
          <HomeAbout data={home} />
        </div>
        <Subscribe />
      </div>
    </Layout>
  );
};

export default HomePage;
