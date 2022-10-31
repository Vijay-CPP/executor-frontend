import React from "react";
import Code from "../Code/Code";
import Output from "../Output/Output";
import Input from "../Input/Input";
import "./Body.css"

function Body(props) {
  return (
    <div className="body">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <Code run={props.run} />
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <Input />
          <Output info={props.info} />
        </div>
      </div>
    </div>
  );
}

export default Body;
