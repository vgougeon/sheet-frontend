import React, { Component } from 'react';
import PageHead from '../../layout/page-head/page-head';
import { Link } from 'react-router-dom'
import Artists from './artists/artists';
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
      <section className="content">
        <Artists />
      </section>
    </div>
  );
}
 
export default Home;