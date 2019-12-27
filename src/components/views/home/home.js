import React, { Component } from 'react';
import PageHead from '../../layout/page-head/page-head';
import { Link } from 'react-router-dom'
import Artists from './artists/artists';
import SearchBar from '../../layout/modules/search-bar/search-bar';
const Home = () => {
  return (
    <div className="view">
      <PageHead>
        <h2>
          <span>Explorez </span>
          <span className="regular">les partitions</span>
        </h2>
        <span className='muted'>Ou recherchez des partitions</span>
        <SearchBar />
      </PageHead>
      <section className="content">
        <Artists />
      </section>
    </div>
  );
}
 
export default Home;