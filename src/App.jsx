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
  dialogForm: {
    title: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'PICK_DATE':
      return {
        ...state,
        pickedDate: action.payload,
      };

    case 'LOAD_SCHEDULE':
      const schedules = JSON.parse(localStorage.getItem('schedules'));
      return {
        ...state,
        schedules,
      }

    case 'CREATE_SCHEDULE':
      const newSchedules = [...state.schedules, action.payload];
      localStorage.setItem('schedules', JSON.stringify(newSchedules));
      return {
        ...state,
        schedules: newSchedules,
      };

    case 'UPDATE_DIALOG_FORM_TITLE':
      return {
        ...state,
        dialogForm: {
          ...state.dialogForm,
          title: action.payload,
        }
      };

    default:
      return state;
  }
}

export const Context = React.createContext(initialState);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <CalendarContainer />
      <DialogContainer />
    </Context.Provider>
  );
}

export default App;
