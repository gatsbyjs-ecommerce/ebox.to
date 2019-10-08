import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';

const CodeWrapper = styled.p`
  color: ${props => props.theme.dangerColor} !important;
`;

export default ({ data }) => (
  <div className="card">
    <header className="card-header">
      <h3 className="card-header-title is-size-4 has-text-centered">
        {data.title}
      </h3>
    </header>
    <div className="card-content">
      <div className="content has-text-centered">{data.description}</div>
    </div>
    <nav className="level card-header" style={{ padding: '1rem 1rem' }}>
      <div className="level-item">
        <div>
          <p className="heading is-size-6">Coupon Code</p>
          <CodeWrapper className="title is-size-5 has-text-weight-bold">
            {data.code}
          </CodeWrapper>
        </div>
      </div>
      <div className="level-item">
        <div>
          <p className="heading is-size-6">Exipired Date</p>
          <p className="title is-size-5">
            {dayjs(data.expiryDate).format('MMMM YYYY')}
          </p>
        </div>
      </div>
    </nav>
  </div>
);
