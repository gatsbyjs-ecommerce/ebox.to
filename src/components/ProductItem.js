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
    .image.is-4by5 {
      padding-top: 0;
    }
    .card-content {
      padding-left: 0;
      padding-top: 0.8rem;
      position: relative;
      a {
        color: #363636;
      }
      .price {
        color: ${config.primaryColor};
      }
      .old-price {
        text-decoration: line-through;
      }
      .field {
        margin-top: 2rem;
      }
    }
  }
`;

const Image = styled(Img)`
  object-fit: cover;
  height: 540px;
  width: 100%;
`;

const ProductItem = ({ item, styles }) => (
  <Container className="column is-one-third" style={styles}>
    <div className="card">
      {item.variant.featuredImage && (
        <div className="card-image">
          <Link to={`/product/${item.slug.current}`}>
            <figure className="image is-4by5">
              <Image fluid={item.variant.featuredImage.asset.fluid} />
              {/* <Image
                sizes={item.variant.featuredImage.asset.fluid.sizes}
                alt={item.variant.featuredImage.asset.fluid.title}
                title={item.variant.featuredImage.asset.fluid.title}
                backgroundColor="#f1f1f1"
              /> */}
            </figure>
          </Link>
        </div>
      )}
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <Title className="title is-5 has-text-weight-bold">
              <Link to={`/product/${item.slug.current}`}>{item.title}</Link>
            </Title>
            {item.variant && (
              <p className="subtitle is-6 has-text-grey">
                {item.variant.color}
              </p>
            )}
            {item.variant && (
              <div className="field is-grouped">
                <p className="control title is-5 has-text-weight-normal price">
                  {formatCurrency(item.variant.discountPrice)}
                </p>
                {item.variant.discountPrice < item.variant.price && (
                  <p className="control  is-6 has-text-grey-light old-price">
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
