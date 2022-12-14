import React, { useReducer } from 'react';

import CalendarContainer from './features/calendar/CalendarContainer.jsx';
import DialogContainer from './features/schedule/DialogContainer.jsx';

const initialState = {
  referenceDate: new Date(),
  pickedDate: new Date(),
  showModal: false,
  schedules: [
    {
      id: 100,
      date: {},
      title: '밥 먹기',
      color: '#0075FF',
      startDate: new Date(2022, 9, 26),
      endDate: new Date(2022, 9, 29),
      isCompleted: false,
    },
  ],
  dialogForm: {
    title: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REFERENCE_DATE':
      return {
        ...state,
        referenceDate: action.payload,
      };

    case 'PICK_DATE':
      return {
        ...state,
        pickedDate: action.payload,
        showModal: true,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
      };

    case 'LOAD_SCHEDULE':
      const schedules = JSON.parse(localStorage.getItem('schedules'));
      return {
        ...state,
        schedules,
      };

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

  return (
    <Context.Provider value={{ state, dispatch }}>
      <CalendarContainer
        modalIsOpened={state.showModal}
      />
      {
        state.showModal &&
        <DialogContainer />
      }
    </Context.Provider>
  );
}

export default App;
