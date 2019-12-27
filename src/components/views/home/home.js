import React, { Component } from 'react';
import PageHead from '../../layout/page-head/page-head';
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="view">
      <PageHead>
        <h2>
          <span>Explorez </span>
          <span className="regular">les partitions</span>
        </h2>
        <span className='muted'>Ou <Link to="/sheets" className="bold">recherchez</Link> des partitions</span>
      </PageHead>
    </div>
  );
}
 
export default Home;