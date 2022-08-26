import { useContext } from 'react';
import { Context } from '../../App';
import Dialog from './Dialog';

function DialogContainer() {
  const { state } = useContext(Context);
  const { pickedDate } = state;
  console.log(pickedDate);
  return (
    <Dialog pickedDate={pickedDate} />
  );
}

export default DialogContainer;
