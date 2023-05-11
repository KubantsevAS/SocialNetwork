const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  dialogsData: [
    { id: 1, name: 'Leo', ava: 1 },
    { id: 2, name: 'Vasily', ava: 2 },
    { id: 3, name: 'Gotfried', ava: 3 },
    { id: 4, name: 'Mark', ava: 4 },
    { id: 5, name: 'Gasdro', ava: 5 },
    { id: 6, name: 'Rodri', ava: 6 },
  ],
  messagesData: [
    { id: 1, message: 'Hey' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'And that how it started' },
    { id: 4, message: 'Anyway what it takes' },
    { id: 5, message: 'lol' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newId = state.messagesData[state.messagesData.length - 1].id;

      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: newId + 1, message: action.newMessageText },
        ],
      };

    default:
      return state;
  }
};

export const addMessage = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
