import React, { Component, useContext } from "react";
import textBorderStore from "../store/context.js";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextBorder(props) {
  const { title } = props;
  const { p1 } = props;
  const { p2 } = props;
  const { p3 } = props;
  const { Trash } = props;
  const Name = [];
  for (let i = 0; i < p3.length; i++) {
    Name[i] = p3[i];
  }

  const textborder = useContext(textBorderStore);
  let clear;
  if (Trash === "Trash")
    clear = <FontAwesomeIcon icon={faTrash} onClick={textborder.clearFiles} />;
  return (
    <div className="col-xl-6 mb-5" id="im">
      <div className="tm-double-border-1 tm-border-gray">
        <div className="tm-double-border-2 tm-border-gray tm-box-pad">
          <h2 className="tm-color-primary tm-section-title mb-4">{title}</h2>
          <p className="mb-4">{p1} </p>
          <p className="mb-3">
            {" "}
            {p2} {clear}{" "}
          </p>
          <span
            style={{ textAlign: "inherit", fontSize: "15px", color: "#707172" }}
          >
            {Name.map((f, index) => (
              <li key={index}>{f}</li>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
