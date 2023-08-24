import React from 'react'

const TodayCard = (props) => {
    const percentage = parseFloat(props.percentage);
    let arrowSymbol = <span>&#8596;</span>; // Left-right arrow symbol
     if (percentage > 0) {
         arrowSymbol = <span className="text-[#5bd43d]"> {percentage}% &#8593;</span>; // Up arrow symbol
     } else if (percentage < 0) {
       arrowSymbol = (
         <span className="text-[#ff0000]">{percentage}% &#8595;</span>
       ); // Down arrow symbol
     }
  return (
    <div className="rounded-3xl w-[300px] h-[200px] bg-[#f2f7ff] p-5 text-[color:var(--background-color-1)] text-2xl m-4">
      <h1>Today's {props.statement}</h1>
      <h1 className="text-black font-semibold text-2xl py-5">{props.value}</h1>
          <div className='text-[20px]' >{arrowSymbol}</div>
          <div className="text-[#858585] text-sm">from yesterday</div>
    </div>
  );
}

export default TodayCard
