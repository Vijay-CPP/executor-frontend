import "./Output.css";
import spinner from "./spinner.gif";

function Output(props) {
  console.log(props);

  let op = props.info[0];
  let memory = props.info[1];
  let runtime = props.info[2];
  let loading = props.info[3];
  return (
    <div className="op">
      <h3 className="op-heading">Output</h3>

      <div className="op-info-div">
        <h5 className="op-info">
          Runtime : {runtime} Secs | Memory : {memory} Bytes
        </h5>
      </div>

      <div className="op-div">
        <p className="op-content">
          {loading === true ? (
            <img id="spinner" src={spinner} alt="Spinner" />
          ) : (
            op
          )}
        </p>
      </div>
    </div>
  );
}

export default Output;
