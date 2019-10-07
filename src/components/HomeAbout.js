import React from 'react';
import styled from 'styled-components';

import Subtitle from './element/Subtitle';
import Heading from './element/Heading';

const Container = styled.section`
  position: relative;
  .columns {
    margin-top: 2rem;
  }
  .is-multiline {
    justify-content: center;
  }
  figure {
    margin: 0rem 0.1rem;
  }
`;

const HomeAbout = ({ data }) => (
  <Container className="section">
    <Heading centered>Follow Us On Instagram</Heading>
    <Subtitle className="has-text-weight-semibold has-text-centered">
      Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia
    </Subtitle>
    <div className="columns is-multiline">
      <div>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
      </div>
      <div>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
      </div>
      <div>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
      </div>
      <div>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
      </div>
    </div>
  </Container>
);

export default HomeAbout;
