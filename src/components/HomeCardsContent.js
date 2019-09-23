import React from 'react';
import styled from 'styled-components';
import HeroCards from './HeroCards';

const Container = styled.div`
  margin-top: 3rem;
  .column {
    padding: 0rem 0.75rem;
  }
  .columns {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
  .center {
    border-right: 1px solid black;
    border-left: 1px solid black;
  }
`;

const HomeCardsContent = () => (
  <Container>
    <div className="columns">
      <div className="column">
        <HeroCards
          icon="fas fa-truck"
          title="Free Delivery"
          subtitle="A successful marketing plan relies heavily on the pulling power of advertising copy."
        />
      </div>
      <div className="column center">
        <HeroCards
          icon="far fa-handshake"
          title="Friendly Support"
          subtitle="A successful marketing plan relies heavily on the pulling power of advertising copy."
        />
      </div>
      <div className="column">
        <HeroCards
          icon="fas fa-hand-holding-usd"
          title="Refund Guaranty"
          subtitle="A successful marketing plan relies heavily on the pulling power of advertising copy."
        />
      </div>
    </div>
  </Container>
);

export default HomeCardsContent;
