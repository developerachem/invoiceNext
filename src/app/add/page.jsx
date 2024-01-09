"use client";

import React from "react";
import Invoice from "../components/invoice/Invoice";
import InvoiceAddForm from "../components/invoice-add-form/invoice-add-form";

function page() {
  return (
    <div className="flex gap-4 py-4 px-4">
      <div style={{ width: "60%" }}>
        <InvoiceAddForm />
      </div>

      <Invoice />
    </div>
  );
}

export default page;
