import { useContext } from 'react';
import { Context } from '../../App';
import Dialog from './Dialog';

function DialogContainer() {
  const { state, dispatch } = useContext(Context);
  const { pickedDate, dialogForm: { title } } = state;
  const dateString = pickedDate.toLocaleDateString();

  const handleChangeTitle = (e) => {
    dispatch({ type: 'UPDATE_DIALOG_FORM_TITLE', payload: e.target.value });
  };

  return (
    <Dialog
      dateString={dateString}
      onChange={handleChangeTitle}
      title={title}
    />
  );
}

export default DialogContainer;
