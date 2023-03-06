import Table from "@app/components/Table";
import React from "react";

const tableBody = [];
const tableHeader = [
  {
    name: "No",
    // fration: "oneth",
    width: " w-[34px]",
  },
  { name: "Thumbnail", fraction: "threeth" },
  { name: "Name", fraction: "twoth" },
  { name: "Description", fraction: "fifth" },
  { name: "Type", fraction: "oneth" },
  { name: "Actions", fraction: "twoth" },
];

const Transactions = ({ isLoading = false }) => {
  return (
    <div>
      <p className="font-semibold text-h3 text-primary-01">
        Transactions History
      </p>

      <section className="md:w-11/12 bg-warning mx-auto max-w-3xl">
        <Table
          isLoading={isLoading}
          emptyTableText={
            !!tableBody?.length && !isLoading
              ? null
              : "There are no transactions yet!"
          }
        >
          <Table.Header data={tableHeader} />
        </Table>
      </section>
    </div>
  );
};

export default Transactions;
