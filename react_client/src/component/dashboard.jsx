import React, { Component } from 'react';
import Cards from './cards/section';

class Dashboard extends Component {
    render() {
      return (
        <section className="content">
            <div className="container-fluid">
          <Cards />
          </div>
        </section>
      );
    }
  }
  
  export default Dashboard;
