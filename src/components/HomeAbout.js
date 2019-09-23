import React from 'react';
import styled from 'styled-components';

import { HTMLContent } from './Content';
import Heading from './Heading';

const Container = styled.section`
  position: relative;
  .columns {
    margin-top: 2rem;
  }
`;

const HomeAbout = ({ data }) => (
  <Container className="section">
    <Heading>Follow Us On Instagram</Heading>
    <HTMLContent className="has-text-centered" content={data.homeIntro} />
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
