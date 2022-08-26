import './Dialog.scss';

function Dialog({ dateObj }) {
  const date = dateObj.getDate();
  return (
    <div className="Dialog">
      일정 추가를 위한 dialog입니다.
      선택된 날짜는 {date}일 입니다.
    </div>
  );
}

export default Dialog;
