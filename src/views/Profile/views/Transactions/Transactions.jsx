import Button from "@app/components/common/Button";
import { ArrrowLeft } from "@app/components/Icon/icons";
import Table from "@app/components/Table";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const name = "Sender's name";
const description = "Description";
const amount_received = "Amount Received";

const tableBody = [
  {
    name: "John Doe",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv",
    amount_received: 23,
  },
  {
    name: "Jane Walker",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Stephen Curry",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Samuel JackSon Mackerel Moose",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "John Doe",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "John Doe",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv",
    amount_received: 23,
  },
  {
    name: "Jane Walker",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Stephen Curry",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Samuel JackSon Mackerel Moose",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "John Doe",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "John Doe",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv",
    amount_received: 23,
  },
  {
    name: "Jane Walker",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Stephen Curry",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Samuel JackSon Mackerel Moose",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "John Doe",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "John Doe",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv",
    amount_received: 23,
  },
  {
    name: "Jane Walker",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Stephen Curry",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Samuel JackSon Mackerel Moose",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "John Doe",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "John Doe",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv",
    amount_received: 23,
  },
  {
    name: "Jane Walker",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Stephen Curry",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Samuel JackSon Mackerel Moose",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "John Doe",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "John Doe",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv.lorem ipsum ipse dic donot homo sapiens erectus treblez uncourv",
    amount_received: 23,
  },
  {
    name: "Jane Walker",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Stephen Curry",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Samuel JackSon Mackerel Moose",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "John Doe",
    description:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
];
const tableHeader = [
  {
    name: "No",
    // fration: "oneth",
    width: " w-[64px]",
    className: "text-center",
  },
  { name: name, fraction: "threeth" },
  { name: description, fraction: "seventh" },
  { name: amount_received, fraction: "twoth" },
];

const Transactions = ({ isLoading }) => {
  const SINGLE_STRETCH = 10;
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingTransactions(false);
        setTransactions(tableBody.slice(0, SINGLE_STRETCH));
    }, 2000);
    return () => {};
  }, []);

  const handleShowMore = () => {
    setTransactions([
      ...transactions,
      ...tableBody.slice(
        transactions.length,
        transactions.length + SINGLE_STRETCH
      ),
    ]);
  };
  return (
    <div>
        <Link to={"/profile"}>
      <Button variant="link" icon={ArrrowLeft} iconPosition="left">
        Back to Profile
      </Button>
        </Link>
      <p className="font-semibold text-h3 text-primary-01">
        Transactions History
      </p>

      <section className="md:w-[98%] mx-auto max-w-3xl md:overflow-x-scroll h-max">
        <div className="md:w-max md:max-w-3xl md:overflow-x-scroll h-max">
          <Table
            spinPosition={"start"}
            isLoading={isLoading || isLoadingTransactions}
            emptyTableText={
              !!transactions?.length && !isLoadingTransactions
                ? null
                : "There are no transactions yet!"
            }
          >
            <Table.Header data={tableHeader} />
            <Table.Body>
              {transactions?.map((item, index) => (
                <>
                  <tr
                    className={classNames(" py-4 ", {
                      "bg-neutral-01 bg-opacity-60": index % 2,
                    })}
                  >
                    <td className="text-center">{index + 1}</td>
                    <td>{item?.name}</td>
                    <td className="multiline-ellipsis hover:overflow-visible hover:block hover:cursor-pointer py-1">
                      {item?.description}
                    </td>
                    <td>{item?.amount_received}</td>
                  </tr>
                </>
              ))}
            </Table.Body>
          </Table>
          {/* <p></p> */}
        </div>
      </section>
      {Boolean(transactions?.length) &&
        transactions?.length < tableBody?.length &&
        !isLoadingTransactions && (
          <div className="flex justify-around">
            <Button variant="link" onClick={handleShowMore}>
              show more ...
            </Button>
          </div>
        )}
    </div>
  );
};

export default Transactions;
