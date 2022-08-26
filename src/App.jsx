import React, { useReducer } from 'react';

import CalendarContainer from './features/calendar/CalendarContainer.jsx';
import DialogContainer from './features/schedule/DialogContainer.jsx';

const initialState = {
  pickedDate: new Date(2022, 7, 26),
  schedules: [
    {
      id: 100,
      date: {},
      title: '밥 먹기',
      isCompleted: false,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'PICK_DATE':
      return {
        ...state,
        pickedDate: action.payload,
      };
    case 'CREATE_SCHEDULE':
      return {
        ...state,
        schedules: [...state.schedules, action.payload],
      };
    default:
      return state;
  }
}

export const Context = React.createContext(initialState);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <CalendarContainer />
      <DialogContainer />
    </Context.Provider>
  );
}

export default App;
