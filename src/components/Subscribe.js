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
  .input {
    box-shadow: rgba(0,0,0,0.08) 0px 0px 0px; !important;
    border: 2px solid #f7f3f3;
  }
`;

const Button = styled.a`
  background-color: ${props => props.theme.dangerColor};
  color: ${props => props.theme.textWhite};
  :hover {
    background-color: ${props => props.theme.textWhite};
  }
`;

const Subscribe = ({ homePage }) => (
  <Card className="card">
    <Container>
      <div className="column is-half is-offset-one-quarter">
        <Subtitle className="has-text-weight-semibold has-text-centered">
          {homePage.subscribeFormHeading}
        </Subtitle>
        <Heading>{homePage.subscribeFormSubheading}</Heading>
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
              <Button className="button is-medium is-rounded has-text-weight-semibold">
                SUBSCRIBE NOW
              </Button>
            </p>
          </div>
        </SubscribeForm>
      </div>
    </Container>
  </Card>
);

export default Subscribe;
