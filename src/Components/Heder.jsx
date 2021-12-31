import React from 'react';

const Heder = (props) => {
    return (
        <div className="head">
             <div className='text3'>
          <div>ROCK</div>
          <div>PAPER</div>
          <div>SCISSORS</div>
        </div>
        <div className='score'>
          <span>SCORE</span>
          <b>{props.score}</b>
        </div>
        </div>
    );
};

export default Heder;