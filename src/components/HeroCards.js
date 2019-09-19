import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .card-content {
    padding: 0.5rem 1.5rem;
  }
  .media-left {
    border: 2px solid black;
    padding: 4.5%;
    border-radius: 2rem;
    height: 4rem;
    width: 4rem;
    align-self: center;
  }
`;
const Icon = styled.i`
  font-size: 1.75rem;
`;

const HeroCards = ({ icon, title, subtitle }) => (
  <Container>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <Icon className={icon}></Icon>
        </div>
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-7 has-text-weight-semibold">{subtitle}</p>
        </div>
      </div>
    </div>
  </Container>
);

export default HeroCards;
