import React from "react";

const TableHead = () => {
  return (
    <>
      <tr className="text-white">
        <th style={{ backgroundColor: "#429CCB" }}>#</th>
        <th
          style={{
            textAlign: "left",
            padding: "0 20px",
            backgroundColor: "#429CCB",
          }}
        >
          Client Name
        </th>
        <th
          style={{
            textAlign: "left",
            padding: "0 20px",
            backgroundColor: "#429CCB",
          }}
        >
          Country
        </th>
        <th style={{ backgroundColor: "#429CCB" }}>Invoice ID</th>
        <th style={{ backgroundColor: "#429CCB" }}>Invoice</th>
        <th style={{ backgroundColor: "#429CCB" }}>Status</th>
        <th style={{ backgroundColor: "#429CCB" }}>Action</th>
      </tr>
    </>
  );
};

export default TableHead;
