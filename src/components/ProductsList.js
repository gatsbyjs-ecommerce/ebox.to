import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Trail } from 'react-spring';

import ProductItem from './ProductItem';
import Heading from './element/Heading';
import Subtitle from './element/Subtitle';

const Container = styled.section`
  position: relative;
  margin-top: 5rem;
  .columns {
    justify-content: space-around;
    margin-top: 3rem;
  }
`;

class ProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, activeCategory: null };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isOpen: true });
    }, 200);
  }

  toggleCategory = category => this.setState({ activeCategory: category });

  render() {
    const { title, products } = this.props;
    const { isOpen, activeCategory } = this.state;
    const keys = products.map(item => item.node._id);

    return (
      <Container className="section">
        <Heading>{title}</Heading>
        <Subtitle className="has-text-weight-semibold">
          In order to give you better service
        </Subtitle>
        <div className="columns is-multiline">
          <Trail
            native
            from={{ opacity: 0 }}
            to={{ opacity: isOpen ? 1 : 0.25 }}
            keys={keys}>
            {products.map(({ node }) => styles => (
              <ProductItem key={node._id} item={node} styles={styles} />
            ))}
          </Trail>
        </div>
      </Container>
    );
  }
}

ProductsList.defaultProps = {
  title: 'New arrivals',
  products: [],
};

ProductsList.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
};

export default ProductsList;
