import { useContext } from 'react';
import { Context } from '../../App';
import Dialog from './Dialog';

function DialogContainer() {
  const { state } = useContext(Context);
  const { pickedDate } = state;

  return (
    <Dialog dateObj={pickedDate} />
  );
}

export default DialogContainer;
