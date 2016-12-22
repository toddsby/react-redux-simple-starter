import { handleActions } from 'redux-actions';

const initialMessages = [
  'I like the world',
  'Coffee flavored ice cream is highly underrated',
  'My spoon is too big',
  'Tuesday is coming. Did you bring your coat?',
  'I am a banana',
  'There once lived a man named Stan'
];

const homeReducers = handleActions({
  ADD_MESSAGE: ( state, action ) => ({
    messages: [...state.messages, action.payload.message]
  }),
  REMOVE_MESSAGE: ( state, action ) => ({
    messages: [
    ...state.messages.slice( 0, action.payload.idx ),
    ...state.messages.slice( action.payload.idx + 1 )
    ]
  })
}, { messages: initialMessages });

export {
  homeReducers
};