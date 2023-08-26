import React from 'react'
import TodayCard from '../components/todayCard'
import OrderStatusCard from "../components/orderStatusCard";
import RevenueChart from "../components/revenueChart";

import ProductTable from '../components/productTable';

const Main = () => {
  
  return (
    <div className=" xl:ml-5 ">
      <h1 className="text-3xl text-[color:var(--background-color-1)] font-semibold p-4 xl:mt-7">
        Hello John Doe
      </h1>
      <h1 className="text-2xl text-[#858585] px-4">
        Here is overview of your store.
      </h1>
      <div className="flex flex-col xl:flex-row flex-wrap">
        <div className="flex flex-col ">
          <div className="flex flex-col flex-wrap md:flex-row content-center md:justify-between">
            <TodayCard
              statement="Order"
              value="177,000"
              percentage="3.5"
            ></TodayCard>
            <TodayCard
              statement="Sale"
              value="177"
              percentage="-2.5"
            ></TodayCard>
            <TodayCard
              statement="Revenue"
              value="77,000"
              percentage="-1.5"
            ></TodayCard>
          </div>
          <div>
            <RevenueChart></RevenueChart>
          </div>
          <div className="m-4 ">
            <ProductTable />
          </div>
        </div>
        <div className='flex justify-center z-10'>
          <OrderStatusCard></OrderStatusCard>
        </div>
      </div>
    </div>
  );
}

export default Main
