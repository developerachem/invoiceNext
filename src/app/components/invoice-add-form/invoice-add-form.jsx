import useInput from "@/hooks/useInput";
import React from "react";
import { BsTrash2 } from "react-icons/bs";
import { useSelector } from "react-redux";

function InvoiceAddForm() {
  const { input, handleInputChange } = useInput({
    clientName: "",
    clientEmail: "",
    country: "",
    address: "",
    dueDate: "",
    discount: "",
    currency: "",
    website: "",
    tax: "",
    note: "",
    items: [
      {
        item: "",
        qty: "",
        price: "",
      },
    ],
  });

  return (
    <form>
      <div
        style={{
          backgroundColor: "#263846",
          width: "100%",
          borderRadius: "5px",
        }}
        className="py-4 px-4"
      >
        <div
          className="grid grid-cols-2 gap-3"
          style={{ marginBottom: "20px" }}
        >
          <input
            type="text"
            onChange={handleInputChange}
            value={input.clientName}
            placeholder="Client Name"
            name="clientName"
          />
          <input
            type="text"
            onChange={handleInputChange}
            value={input.clientEmail}
            placeholder="Email"
            name="clientEmail"
          />
        </div>
        <div
          className="grid grid-cols-2 gap-3"
          style={{ marginBottom: "20px" }}
        >
          <input
            type="text"
            onChange={handleInputChange}
            value={input.country}
            placeholder="Country"
            name="country"
          />
          <input
            type="text"
            onChange={handleInputChange}
            value={input.address}
            placeholder="Address"
            name="address"
          />
        </div>
        <div
          className="grid grid-cols-2 gap-3"
          style={{ marginBottom: "20px" }}
          onChange={handleInputChange}
        >
          <select
            value={input.currency}
            name="currency"
            onChange={handleInputChange}
          >
            <option value="">--Select--</option>
            <option value="NZD">NZD</option>
            <option value="USD">USD</option>
            <option value="BDT">BDT</option>
          </select>
          <input
            type="text"
            onChange={handleInputChange}
            value={input.website}
            placeholder="Website URL"
            name="website"
          />
        </div>

        <div
          className="grid grid-cols-2 gap-3"
          style={{ marginBottom: "20px" }}
        >
          <input type="date" name="issueDate" />
          <input
            type="date"
            onChange={handleInputChange}
            value={input.dueDate}
            name="dueDate"
          />
        </div>
        <div
          className="grid grid-cols-2 gap-3"
          style={{ marginBottom: "20px" }}
        >
          <input
            type="number"
            onChange={handleInputChange}
            value={input.discount}
            name="discount"
            placeholder="Discount"
          />
          <input
            type="number"
            onChange={handleInputChange}
            value={input.tax}
            name="tax"
            placeholder="Tax"
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#263846",
          width: "100%",
          borderRadius: "5px",
          marginTop: "20px",
        }}
        className="py-4 px-4"
      >
        <div className="flex items-center gap-5">
          <div>
            <div className="grid grid-cols-4 items-end gap-5 center">
              <input type="text" name="item" placeholder="Item" />
              <input type="text" name="qty" placeholder="Quntity" />
              <input type="text" name="price" placeholder="Price" />
              <BsTrash2 size={20} color="red" className="cursor-pointer" />
            </div>
          </div>

          <button
            className="btn btn-sm w-[150px]"
            type="button"
            style={{ height: "40px", marginLeft: "auto" }}
            // onClick={() =>
            //   setItem([...item, { item: "", qty: "", price: "" }])
            // }
          >
            Add New Item
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#263846",
          width: "100%",
          borderRadius: "5px",
          marginTop: "20px",
        }}
        className="py-4 px-4"
      >
        <textarea
          placeholder="Order Note"
          onChange={handleInputChange}
          value={input.note}
          name="note"
          rows={7}
        />
        <button
          className="btn w-full"
          type="submit"
          style={{ marginTop: "20px" }}
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default InvoiceAddForm;
