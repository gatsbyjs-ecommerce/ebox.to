import React from 'react';
import styled from 'styled-components';
import Title from './element/Title';
import Subtitle from './element/Subtitle';

const Container = styled.div`
  .card-content {
    padding: 0.5rem 1.5rem;
  }
  .media-left {
    border: 2px solid ${props => props.theme.darkShades};
    padding: 4.5%;
    border-radius: 2rem;
    height: 4rem;
    width: 4rem;
    align-self: center;
  }
`;
const Icon = styled.i`
  font-size: 1.75rem;
  color: ${props => props.theme.darkShades};
`;

const HeroCards = ({ icon, title, subtitle }) => (
  <Container>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <Icon className={icon} />
        </div>
        <div className="media-content">
          <Title>{title}</Title>
          <Subtitle className="subtitle is-6 has-text-weight-semibold">
            {subtitle}
          </Subtitle>
        </div>
      </div>
    </div>
  </Container>
);

export default HeroCards;
