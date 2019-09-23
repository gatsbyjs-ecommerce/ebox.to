import React from 'react';
import styled from 'styled-components';

const ContainerImage = styled.div`
  background-image: url(/images/bg.jpg);
  background-size: cover;
  width: 100%;
  height: auto;
  padding: 10rem 0rem;
  h2 {
    padding-bottom: 2rem;
  }
`;

const StripMobile = styled.div`
  padding: 0.3rem 0;
  background-color: #100b0b;
  width: 100%;
  opacity: 0.9;
`;

const HomeBanner = ({ data }) => (
  <>
    <ContainerImage className="is-hidden-mobile has-text-centered has-text-white">
      <h2 className="is-size-2 is-uppercase	has-text-weight-semibold">spring sale</h2>
      <h6 className="is-size-6">Here's description of the featured collection or promotion.</h6>
    </ContainerImage>
    <StripMobile className="is-hidden-tablet">
      <p className="is-size-6	is-uppercase has-text-white has-text-centered has-text-weight-semibold">
        {data.homeSliderSubTitle}
      </p>
    </StripMobile>
  </>
);

export default HomeBanner;
