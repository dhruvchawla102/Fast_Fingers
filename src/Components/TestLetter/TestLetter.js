import React from 'react'
import './../TestLetter/TestLetter.css';

function TestLetter({ individualLetterInfo }) {

    // const { status } = individualLetterInfo; same as below
    const status = individualLetterInfo.status;
     
    // let statusClass;
    // if (status === "correct") {
    //     statusClass = "test-letter-correct";
    // } else if (status === "incorrect") {
    //     statusClass = "test-letter-incorrect";
    // } else {
    //     statusClass = "test-letter-not-attempted";
    // }

    // const statusClassName = {
    //     correct: "test-letter-correct",
    //     incorrect: "test-letter-incorrect",
    //     notattempted: "test-letter-not-attempted"
    // }

    // statusClass = statusClassName[individualLetterInfo.status ]
    
    const statusClass = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notattempted: "test-letter-not-attempted"
    }[status]

    return (
        <span
            className={`test-letter ${statusClass}`}>
            {individualLetterInfo.testLetter}
        </span>
    )
}

export default TestLetter
