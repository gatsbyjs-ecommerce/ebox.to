import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  line-height: 1.5;
  color: ${props =>
    props.white ? props.theme.textWhite : props.theme.darkShades};
`;

const Heading = ({ children, centered, ...props }) => (
  <Container
    className={`is-size-2 is-uppercase has-text-weight-bold ${
      centered ? 'has-text-centered' : ''
    }`}
    {...props}>
    {children}
  </Container>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
