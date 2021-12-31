import React from 'react';
import StoneE from '../Elem/StoneE';
import PaperE from '../Elem/PaperE';
import SicssorsE from '../Elem/SicssorsE';

const Stone = (props) => {
    return (
        <div>
              <div className='picked'>
        <span className='span1'>YOU PICKED</span>
        <span className='span2'>THE HOUSE PICKED</span>
      </div>

      <div  className='stoneChose'> <svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#3B4262" d="M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z"/></svg></div>
      
      <div>
      {props.random <= 33 ? <StoneE/> : (props.random > 33 && props.random <= 66 ? <PaperE/> : (props.random > 66 && props.random <= 99 ? <SicssorsE/> : '') ) }
      
      {props.random <= 33 ? <button className='but' onClick={props.goManePage} >Drow</button> : (props.random > 33 && props.random <= 66 ? <button className='but' onClick={props.goManePage} onMouseUp = {props.scoreMinus}> You loser</button> : (props.random > 66 && props.random <= 99 ? <button className='but' onClick={props.goManePage} onMouseUp = {props.scorePlus}>You Winer</button> : '') ) }
      </div>
        </div>
    );
};

export default Stone;