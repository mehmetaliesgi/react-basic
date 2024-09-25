import React from "react";
import "../App.css";
import { FaMinus, FaPlus, FaQuestion } from "react-icons/fa";
import { useState } from "react";

function Question({ question }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <section>
      <div className={isOpen ? "open" : "close"}>
        <h4>{question.title}</h4>
        {question.info ? (
          <button onClick={() => setOpen(!isOpen)}>
            {isOpen ? <FaMinus /> : <FaPlus />}
          </button>
        ) : (
          <button>
            {" "}
            <FaQuestion />
          </button>
        )}
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  );
}

export default Question;
