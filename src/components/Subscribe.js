import React from 'react';
import styled from 'styled-components';
import Heading from './element/Heading';
import Subtitle from './element/Subtitle';

const Card = styled.div`
  margin: 1rem 2rem;
`;

const Container = styled.div`
  margin: 4rem 0rem;
`;
const SubscribeForm = styled.div`
  margin: 3rem 0rem;
`;

const Subscribe = () => (
  <Card className="card">
    <Container>
      <div className="column is-half is-offset-one-quarter">
        <Subtitle className="subtitle is-5 has-text-weight-semibold has-text-centered">
          JOIN OUR NEWSLETTER
        </Subtitle>
        <Heading>Subscribe to get Updated with new offers</Heading>
        <SubscribeForm>
          <div className="field is-grouped is-medium">
            <p className="control is-expanded">
              <input
                className="input is-medium"
                type="text"
                placeholder="Enter Email Address"
              />
            </p>
            <p className="control">
              <a className="button is-info is-medium has-text-weight-bold">
                SUBSCRIBE NOW
              </a>
            </p>
          </div>
        </SubscribeForm>
      </div>
    </Container>
  </Card>
);

export default Subscribe;
