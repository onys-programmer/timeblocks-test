import './Dialog.scss';

function Dialog({ dateString, onChange, onSubmit, onClick }) {
  return (
    <div className="Dialog">
      <form
        onSubmit={onSubmit}
      >
        <button onClick={onClick}>X</button>
        <h2>{dateString}</h2>
        <br></br>
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
