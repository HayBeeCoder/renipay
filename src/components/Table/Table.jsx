import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Spinner from "@app/components/Spinner";
import TableBodyPlaceholder from "@app/components/TableBodyPlaceholder";

const Table = ({ children, emptyTableText, isLoading }) => {
  return (
    <table className="w-full relative min-w-[300px]">
      {/* <tableHeader data={tableHeader} />
       */}
      {React.Children.toArray(children)?.map((item, index) => {
        if (index === 1 && isLoading) {
          return (
            <TableBodyPlaceholder>
              <Spinner color="dark" show />
            </TableBodyPlaceholder>
          );
        }
        if (index === 1 && emptyTableText) {
          return (
            <p className="absolute w-full text-center my-5 text-h3 text-black-07">
              {emptyTableText}
            </p>
          );
        }
        return item;
      })}
      {/* <tableBody data ={} /> */}
    </table>
  );
};

Table.Header = TableHeader;
Table.Body = TableBody;

export default Table;
