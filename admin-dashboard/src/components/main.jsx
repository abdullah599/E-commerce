import React from 'react'
import TodayCard from './todayCard'

const Main = () => {
  return (
    <div>
      <h1 className="text-3xl text-[color:var(--background-color-1)] font-semibold p-4">
        Hello John Doe
      </h1>
      <h1 className="text-2xl text-[#858585] px-4">
        Here is overview of your store.
      </h1>
      <div className="flex flex-row">
        {" "}
        <TodayCard  statement="Order" value="177,000" percentage="3.5"></TodayCard>
        <TodayCard statement="Sale" value="177" percentage="-2.5"></TodayCard>
        <TodayCard statement="Revenue" value="77,000" percentage="-1.5"></TodayCard>
      </div>
    </div>
  );
}

export default Main
