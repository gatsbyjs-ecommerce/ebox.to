import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.p`
  color: ${props =>
    props.white ? props.theme.textWhite : props.theme.textColorLite}!important;
`;

const Subtitle = ({ children, centered, ...props }) => (
  <Container
    className={`is-size-7 ${centered ? 'has-text-centered' : ''}`}
    {...props}>
    {children}
  </Container>
);

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Subtitle;
