import { useContext } from 'react';
import { Context } from '../../App';
import Dialog from './Dialog';

function DialogContainer() {
  const { state, dispatch } = useContext(Context);
  const { pickedDate, dialogForm: { title } } = state;
  const dateString = pickedDate.toLocaleDateString();

  const handleClickCloseModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const handleChangeTitle = (e) => {
    dispatch({ type: 'UPDATE_DIALOG_FORM_TITLE', payload: e.target.value });
  };

  const handleSubmitSchedule = (e) => {
    e.preventDefault();

    console.log(pickedDate);
    const schedule = {
      id: new Date().getTime(),
      date: pickedDate,
      title,
      isCompleted: false,
    };
    dispatch({ type: 'CREATE_SCHEDULE', payload: schedule });
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <Dialog
      dateString={dateString}
      onClick={handleClickCloseModal}
      onChange={handleChangeTitle}
      onSubmit={handleSubmitSchedule}
    />
  );
}

export default DialogContainer;
