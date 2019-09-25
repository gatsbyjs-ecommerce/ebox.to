import React from 'react';
import dayjs from 'dayjs';

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
          <p className="title is-size-5 has-text-weight-bold">{data.code}</p>
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
