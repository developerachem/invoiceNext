import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "@/redux/invoice-slice/invoice-slice";

// Create Redux Store
const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
  devTools: true,
});

// Export Store
export default store;
