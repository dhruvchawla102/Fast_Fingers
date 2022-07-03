import React from 'react'
import './../TypingChallenge/TypingChallenge.css';
import TestLetter from '../TestLetter/TestLetter';

function TypingChallenge({
    // selectedParagraph,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
}) {
    // console.log('Inside Typing Challenge',testInfo);
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">
                    00:
                    {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
                </p>
                <p className="timer-info">
                    {!timerStarted && "Start typing to start the test"}
                </p>
            </div>

            <div className="text-area-container">
                <div className="text-area-left">
                    <div className="textarea test-paragraph">
                        {/* {selectedParagraph} */}
                        {
                            testInfo.map((individualLetterInfo, index) => {
                                // return <div>{individualLetterInfo.testLetter}</div>
                                return <TestLetter
                                    key={index}
                                    individualLetterInfo={individualLetterInfo} />
                            })
                        }
                    </div>
                </div>
                <div className="text-area-right">
                    <textarea
                        onChange={(e) => { onInputChange(e.target.value) }}
                        className="textarea textarea-right"
                        placeholder="Start typing here..."
                    >
                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default TypingChallenge
