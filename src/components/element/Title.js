import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.p`
  color: ${props => props.theme.darkShades} !important;
`;

const Title = ({ children, ...props }) => (
  <Container className="title is-4 has-text-weight-semibold" {...props}>
    {children}
  </Container>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
