import React from 'react';
import ListItem from './list.item';

const List = ({ messages, onListItemClick }) => {
 
  return (
    <ul>
    { messages.map((message, index) => {
      return <ListItem key={index} idx={index} message={message} clicked={onListItemClick} />
    }) 
    }
    </ul>
  );

};

List.propTypes = {
  messages: React.PropTypes.array.isRequired,
  onListItemClick: React.PropTypes.func.isRequired
};

export default List;