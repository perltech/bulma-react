import React from 'react';
import './style/mystyles.css';

import Columns from 'react-bulma-components/lib/components/columns';

import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard'
import SourceCodeHero from './components/SourceCodeHero'
import Footer from './components/Footer'

const App = () =>
  <div>
    <Navbar />
    <Columns breakpoint="tablet">
      <Columns.Column size={3}>
        <ProfileCard />
      </Columns.Column>
      <Columns.Column size={9}>
        <SourceCodeHero />
      </Columns.Column>
    </Columns>
    <Footer />
  </div>


export default App;