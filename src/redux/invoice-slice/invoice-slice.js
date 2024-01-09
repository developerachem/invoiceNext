import { createSlice } from "@reduxjs/toolkit";

// Create Invoice Slice
const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
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
  },
  reducers: {},
});

// export counter reducer
export default invoiceSlice.reducer;
