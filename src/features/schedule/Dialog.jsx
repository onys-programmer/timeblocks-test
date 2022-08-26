import './Dialog.scss';

function Dialog({ dateString, onChange, onSubmit, onClick }) {
  return (
    <div className="Dialog">
      <form
        onSubmit={onSubmit}
      >
        <button type="button" onClick={onClick}>X</button>
        <h2>{dateString}</h2>
        <br></br>
        <input
          autoFocus="true"
          type="text"
          onChange={onChange}
          placeholder="일정을 입력해주세요."
        />
        <button type="submit">확인</button>
      </form>
    </div>
  );
}

export default Dialog;
