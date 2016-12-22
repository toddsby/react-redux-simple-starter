import React from 'react';

const ListItem = ({ idx, message, clicked }) => {

  const handleClick = e => clicked( idx );

  return (
    <li onClick={handleClick}>{message}</li>
  );
};

ListItem.propTypes = {
  message: React.PropTypes.string.isRequired,
  clicked: React.PropTypes.func.isRequired
};

export default ListItem;