import { createActions } from 'redux-actions';

const { addMessage, removeMessage } = createActions({
  ADD_MESSAGE: message => ( { message } ),
  REMOVE_MESSAGE: idx => ( { idx } )
}); 

export {
  addMessage,
  removeMessage
};