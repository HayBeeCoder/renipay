import React from "react";
// import Spinner from '../Spinner'

const TableBodyPlaceholder = ({ children}) => {
  return (
    <div className="w-[100%] h-16 flex justify-center items-center absolute top-full">
      {children}
    </div>
  );
};

export default TableBodyPlaceholder;
