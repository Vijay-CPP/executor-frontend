import "./Code.css";
import values from "./docs.js"

function Code(props) {
  return (
    <div className="code">
      <div>
        <select className="code-select form-select" aria-label="Default select example">
          <option value="">Please select your language</option>
          <option value={values[0]}>C</option>
          <option value={values[1]}>C++ 14</option>
          <option value={values[2]}>C++ 17</option>
          <option value={values[3]}>Python 3</option>
          <option value={values[4]}>Java</option>
          <option value={values[5]}>Go</option>
        </select>
      </div>
      <textarea name="" id="" className="code-textarea"></textarea>
      <br />
      <button className="code-btn btn btn-lg btn-success" onClick={props.run}>Run</button>
    </div>
  );
}

export default Code;
