import React from 'react';
import Helmet from 'react-helmet';

const Page = ( props ) => {
  return (
    <div className="container">
      <Helmet
        titleTemplate="%s - React | Mightty React Redux Starter"
        defaultTitle="React App | Mightty React Redux Starter"
        meta={[
          { name: 'description', content: 'Mightty Handmade, for the makers' },
        ]}
      />
      { React.Children.toArray( props.children ) }
    </div>
  );
};

Page.propTypes = {
  children: React.PropTypes.node
};

export default Page;