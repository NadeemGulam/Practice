import React from 'react'
import './Accordian.css';

const questions = () => {
  return (
    <div>
        <h1>Project 2: FAQ/Accordion</h1>
      <div className="container">
        <h3>Frequntly asked questions</h3>
        <div className="question">
          <span>is this the good product</span>
          <div className="svg1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-arrow-return-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
            />
          </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default questions
