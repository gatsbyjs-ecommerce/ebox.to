import React from 'react';
import styled from 'styled-components';
import Heading from './element/Heading';
import Subtitle from './element/Subtitle';

const Container = styled.div`
  margin: 4rem 0rem;
`;
const SubscribeForm = styled.div`
  margin: 3rem 0rem;
`;

const Subscribe = () => (
  <Container>
    <div className="column is-half is-offset-one-quarter">
    <Subtitle>JOIN OUR NEWSLETTER</Subtitle>
    <Heading>Subscribe to get Updated with new offers</Heading>
    <SubscribeForm>
      <div class="field is-grouped is-medium">
        <p class="control is-expanded">
          <input class="input is-medium" type="text" placeholder="Enter Email Address" />
        </p>
        <p class="control">
          <a class="button is-info is-medium">
          SUBSCRIBE NOW
          </a>
        </p>
      </div>
    </SubscribeForm>
    </div>
  </Container>
);

export default Subscribe;
