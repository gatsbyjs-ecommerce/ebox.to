import React from 'react';
import styled from 'styled-components';
import Heading from './element/Heading';
import Subtitle from './element/Subtitle';

const ContainerImage = styled.div`
  background-image: url(/images/ecommerce.jpg);
  background-size: cover;
  width: 100%;
  height: auto;
  padding: 8rem 0rem 10rem;
`;

const StripMobile = styled.div`
  padding: 0.3rem 0;
  background-color: #100b0b;
  width: 100%;
  opacity: 0.9;
`;

const HomeBanner = ({ data, homePage }) => (
  <div>
    <ContainerImage className="is-hidden-mobile">
      <div className="column is-4 is-offset-8 has-text-centered">
        <Subtitle white className="has-text-weight-bold">
          {homePage.heroTitle}
        </Subtitle>
        <Heading white>{homePage.heroSubtitle}</Heading>
      </div>
    </ContainerImage>
    <StripMobile className="is-hidden-tablet">
      <p className="is-size-6	is-uppercase has-text-white has-text-centered has-text-weight-semibold">
        {data.homeSliderSubTitle}
      </p>
    </StripMobile>
  </div>
);

export default HomeBanner;
