import { FaFileInvoiceDollar } from "react-icons/fa";
import { BsCartCheck, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineDollarCircle, AiOutlineFileDone } from "react-icons/ai";
import { HiOutlineEmojiSad } from "react-icons/hi";

import React from "react";

function DashboardCard({ icon, title, number }) {
  return (
    <div
      className="flex p-5 gap-5 rounded-md py-10"
      style={{ backgroundColor: "#283746" }}
    >
      {(icon === "Invoice" && (
        <FaFileInvoiceDollar color="#0b9ccb" size={70} />
      )) ||
        (icon === "Complete" && (
          <AiOutlineFileDone color="#0b9ccb" size={70} />
        )) ||
        (icon === "Running" && <BsEmojiSmile color="#0b9ccb" size={70} />) ||
        (icon === "Order" && <BsCartCheck color="#0b9ccb" size={70} />) ||
        (icon === "Cancel" && (
          <HiOutlineEmojiSad color="#0b9ccb" size={70} />
        )) ||
        (icon === "Amount" && (
          <AiOutlineDollarCircle color="#0b9ccb" size={70} />
        ))}
      <div>
        <h1
          style={{ fontSize: "50px", lineHeight: "50px" }}
          className="font-bold text-white"
        >
          {number}
        </h1>
        <p style={{ color: "#989FA7" }}>{title}</p>
      </div>
    </div>
  );
}

export default DashboardCard;
