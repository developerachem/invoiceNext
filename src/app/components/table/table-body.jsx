import Link from "next/link";
import React from "react";
import { Edit, Trash } from "react-feather";
import { FaFileInvoiceDollar } from "react-icons/fa";

const TBody = ({ data, id, handleDelete }) => {
  return (
    <>
      <tr>
        <th style={{ color: "#989FA7" }}>{id + 1}</th>
        <td style={{ color: "#989FA7" }} className="px-4 ">
          {"data?.name"}
        </td>
        <td style={{ color: "#989FA7" }} className="px-4 ">
          {"data?.country"}
        </td>
        <td style={{ color: "#989FA7" }}>#{"data?.invoiceNumber"}</td>
        <td style={{ color: "#989FA7" }}>
          <Link href={`/invoice/${"data?.id"}`}>
            <FaFileInvoiceDollar size={30} color="#0b9ccb" />
          </Link>
        </td>
        <td>
          <p
            style={{
              padding: "5px 10px",
              backgroundColor: "green",
              color: "white",
              display: "inline-block",
              borderRadius: "5px",
            }}
          >
            {"data?.status"}
          </p>
        </td>
        <td className="flex">
          <Trash color="#c0392b" className="mx-2 pointer" />
          <Edit color="#0b9ccb" className="pointer" />
        </td>
      </tr>
    </>
  );
};

export default TBody;
