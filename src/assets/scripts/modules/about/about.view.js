import React from 'react';
import Helmet from 'react-helmet';

// stateless view component
const About = () => {
  return (
    <div className="row top-row-pad">
      <Helmet title="About" />
      <div className="col-lg-16">
        <div className="jumbotron">
          <h1>Hello from Mightty React Starter!</h1>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;