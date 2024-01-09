/* eslint-disable react-hooks/exhaustive-deps */
import TableHead from "./table-head";
import TBody from "./table-body";

const Table = () => {
  return (
    <table className="table">
      <thead>
        <TableHead />
      </thead>
      <tbody>
        <TBody />
      </tbody>
    </table>
  );
};

export default Table;
