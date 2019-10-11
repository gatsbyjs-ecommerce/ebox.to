import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import config from '../utils/config';
import { formatCurrency } from '../utils/helpers';
import Title from './element/Title';

const Container = styled(animated.div)`
  .card {
    border: none;
    box-shadow: none;
    background-color: #f5f5f5;
    .image.is-4by3 {
      padding-top: 0;
    }
    .card-image {
      padding: 1rem 1rem !important;
    }
    .card-content {
      position: relative;
      a {
        color: #363636;
      }
      .price-container {
        width: 50px;
        position: absolute;
        right: 5%;
        top: 0.5rem;
      }
      .price {
        color: ${config.primaryColor};
      }
      .old-price {
        text-decoration: line-through;
      }
    }
  }
`;

const Image = styled(Img)`
  object-fit: cover;
  height: auto;
  width: 100%;
  @media only screen and (max-width: 768px) {
    height: 75%;
  }
`;

const ProductItem = ({ item, styles }) => (
  <Container className="column is-one-third" style={styles}>
    <div className="card">
      {item.variant.featuredImage && (
        <div className="card-image">
          <Link to={`/product/${item.slug.current}`}>
            <figure className="image is-4by3">
              <Image fluid={item.variant.featuredImage.asset.fluid} />
            </figure>
          </Link>
        </div>
      )}
      <div className="card-content">
        <div className="media">
          <div className="media-content is-flex">
            <div style={{ maxWidth: '70%' }}>
              <Title className="title is-5">
                <Link to={`/product/${item.slug.current}`}>{item.title}</Link>
              </Title>
              {item.variant && (
                <p className="subtitle is-6 has-text-grey">
                  {item.variant.color}
                </p>
              )}
            </div>
            {item.variant && (
              <div
                className="field is-grouped is-block"
                style={{ marginLeft: '0.5rem' }}>
                <p className="control title is-6 has-text-weight-normal price">
                  {formatCurrency(item.variant.discountPrice)}
                </p>
                {item.variant.discountPrice < item.variant.price && (
                  <p className="control is-6 has-text-grey-light old-price">
                    {formatCurrency(item.variant.price)}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </Container>
);

ProductItem.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default ProductItem;
