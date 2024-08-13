import React from "react";

const Balance = ({ balance }) => {
  const roundedNum = balance.toFixed(2);
  return (
    <div className="flex px-4 sm:px-14 my-8">
      <div className="font-bold text-lg">Your Balance</div>
      <div className="text-lg font-semibold ml-4">₹ {roundedNum}</div>
    </div>
  );
};

export default Balance;
