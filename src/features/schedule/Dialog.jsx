import './Dialog.scss';

function Dialog({ dateString, onChange }) {
  return (
    <div className="Dialog">
      <form action="">
        일정 추가를 위한 dialog입니다.
        선택된 날짜는 {dateString} 입니다.
        <input
          type="text"
          onChange={onChange}
          placeholder="일정을 입력해주세요."
        />
        <button>확인</button>
      </form>
    </div>
  );
}

export default Dialog;
