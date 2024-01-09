"use client";

import {
  Edit,
  Facebook,
  GitHub,
  Globe,
  Instagram,
  Linkedin,
  Printer,
  Trash2,
  Twitter,
  Youtube,
} from "react-feather";
import { useRef } from "react";
import Logo from "../logo/logo";
import { useSelector } from "react-redux";

const Invoice = () => {
  const data = useSelector((state) => state.invoice);
  // const inNumber = useParams().id;
  // const [data, setData] = useState({});
  // const navigate = useNavigate();
  const ref = useRef();
  // const total = data.reduce((acc, cur) => acc + cur?.qty * cur?.price, 0);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#263846",
        }}
        className="flex gap-5 p-5 rounded-md justify-end mb-5"
      >
        {/* <ReactToPrint
          trigger={() => (
            <Printer size={20} color="white" className="pointer" />
          )}
          content={() => ref.current}
        /> */}
        <Edit
          size={20}
          color="green"
          // onClick={() => navigate(`/invoice/edit/${data.id}`)}
          className="cursor-pointer"
        />
        <Trash2 size={20} color="#c0392b" className="cursor-pointer" />
      </div>
      <div style={{ margin: "auto" }}>
        <div
          style={{
            backgroundColor: "#263846",
            width: "100%",
            height: "100%",
            borderRadius: "5px",
          }}
          className="py-4 px-4"
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px 30px",
              position: "relative",
              width: "794px",
              height: "1123px",
              margin: "auto",
            }}
            ref={ref}
          >
            <div
              className="flex items-center justify-between"
              style={{
                borderBottom: "1px solid #0b9ccb",
                paddingBottom: "10px",
              }}
            >
              <Logo />
              <h1
                style={{ color: "#0b9ccb" }}
                className="font-extrabold text-4xl"
              >
                INVOICE
              </h1>
            </div>
            <div
              style={{ color: "black" }}
              className="grid grid-cols-3 gap-5 mb-5"
            >
              <div>
                <h4 className="font-extrabold text-lg">From</h4>
                <p>Toyhedul Islam Achem</p>
                <p>Web Developer</p>
                <p>+8801754774203</p>
                <p>
                  House #13, Road #07, Block #F, Banani, Dhaka-1213 Bangladesh.
                </p>
              </div>
              <div>
                <h4 className="font-extrabold text-lg">Invoice Info</h4>
                <p>
                  <b className="text-md me-2">Invoice ID:</b> #
                </p>
                <p>
                  <b className="text-md me-2">Issued Date:</b>
                </p>
                <p>
                  <b className="text-md me-2">Due Date:</b> {"N/A"}
                </p>
                <p>
                  <b className="text-md me-2">Currency:</b> {"N/A"}
                </p>
              </div>
              <div>
                <h4 className="font-extrabold text-lg">Bill To</h4>
                <p>{"N/A"}</p>
                <p>{"N/A"}</p>
                <p>{"N/A"}</p>
                <p>{"N/A"}</p>
              </div>
            </div>

            <div>
              <table className="table table-border">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "#0B9CCB", color: "white" }}>
                      #
                    </th>
                    <th
                      className="text-left px-4 w-[300px]"
                      style={{ backgroundColor: "#0B9CCB", color: "white" }}
                    >
                      Item
                    </th>
                    <th style={{ backgroundColor: "#0B9CCB", color: "white" }}>
                      QTY
                    </th>
                    <th
                      style={{ backgroundColor: "#0B9CCB", color: "white" }}
                      className="text-center"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-200">
                    <th>{"index + 1"}</th>
                    <td className="px-4">{"N/A"}</td>
                    <td className="text-center">{"N/A"}</td>
                    <td className="text-center">${""}</td>
                  </tr>
                  <tr className="bg-slate-200">
                    <th>{"index + 1"}</th>
                    <td className="px-4">{"N/A"}</td>
                    <td className="text-center">{"N/A"}</td>
                    <td className="text-center">${""}</td>
                  </tr>
                  <tr className="bg-slate-200">
                    <th>{"index + 1"}</th>
                    <td className="px-4">{"N/A"}</td>
                    <td className="text-center">{"N/A"}</td>
                    <td className="text-center">${""}</td>
                  </tr>
                  <tr className="bg-slate-200">
                    <th>{"index + 1"}</th>
                    <td className="px-4">{"N/A"}</td>
                    <td className="text-center">{"N/A"}</td>
                    <td className="text-center">${""}</td>
                  </tr>

                  <tr style={{ backgroundColor: "#b9b9b93d" }}>
                    <td colSpan={3} className="text-right">
                      Subtotal
                    </td>
                    <td className="text-center">${"data.totalAmount"}</td>
                  </tr>
                  <tr style={{ backgroundColor: "#b9b9b93d" }}>
                    <td colSpan={3} className="text-right">
                      Tax
                    </td>
                    <td className="text-center">-${"data?.tax"}</td>
                  </tr>

                  <tr style={{ backgroundColor: "#b9b9b93d" }}>
                    <td colSpan={3} className="text-right">
                      Discount
                    </td>
                    <td className="text-center">-${"data?.discount"}</td>
                  </tr>

                  <tr className="bg_color" style={{ color: "#fff" }}>
                    <th colSpan={3} className="text-right">
                      Total Amount
                    </th>
                    <th className="text-center">
                      {"data?.curr"} ${"data.totalAmount"}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="my-4" style={{ color: "black", fontSize: "13px" }}>
              <p>
                <b className="text-md me-2">Order Note: </b> {"data?.note"}
              </p>
            </div>

            <div
              className="py-2 flex justify-between px-3 center"
              style={{
                backgroundColor: "#0b9ccb90",
                position: "absolute",
                bottom: "2.5%",
                width: "730px",
              }}
            >
              <p style={{ fontSize: "12px" }}>Thanks for working with us</p>
              <ul className="flex gap-2">
                <li>
                  <a target="_new" href="https://developerachem.me/">
                    <Globe size={18} color="#11111190" />
                  </a>
                </li>
                <li>
                  <a
                    target="_new"
                    href="https://www.facebook.com/developerachem/"
                  >
                    <Facebook size={18} color="#11111190" />
                  </a>
                </li>
                <li>
                  <a
                    target="_new"
                    href="https://www.instagram.com/developerachem/"
                  >
                    <Instagram size={18} color="#11111190" />
                  </a>
                </li>
                <li>
                  <a
                    target="_new"
                    href="https://bd.linkedin.com/in/developer-achem-137b18227"
                  >
                    <Linkedin size={18} color="#11111190" />
                  </a>
                </li>
                <li>
                  <a target="_new" href="https://github.com/developerachem">
                    <GitHub size={18} color="#11111190" />
                  </a>
                </li>
                <li>
                  <a target="_new" href="https://twitter.com/developerachem">
                    <Twitter size={18} color="#11111190" />
                  </a>
                </li>
                <li>
                  <a
                    target="_new"
                    href="https://www.youtube.com/channel/UCDUjcVqaEBKXW519LejhT-g"
                  >
                    <Youtube size={18} color="#11111190" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
