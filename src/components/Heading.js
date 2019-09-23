import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  line-height: 2.5;
`;

const Heading = ({ children }) => (
  <Container className="is-size-4 has-text-centered is-uppercase has-text-weight-bold">
    {children}
  </Container>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
