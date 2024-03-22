import React from "react";

const Table = () => {
  return (
    <div className="table-responsive" style={{ fontSize: "13px" }}>
      <table
        id="example"
        className="table table-striped table-bordered"
        style={{ width: "100%" }}
      >
        <thead style={{ backgroundColor: "#FFA3A3" }}>
          <tr className="table-bg-primary">
            <th className="text-center" colSpan={2}>
              Ritco
            </th>
            <th className="text-center" colSpan={2}>
              Tejas
            </th>
            <th className="text-center" colSpan={2}>
              ISCS
            </th>
            <th className="text-center" colSpan={2}>
              Avisar
            </th>
          </tr>
          <tr className="table-primary">
            <td className="fw-bold">Count of TS</td>
            <td className="fw-bold">Count of Driver code</td>
            <td className="fw-bold">Count of TS</td>
            <td className="fw-bold">Count of Driver code</td>
            <td className="fw-bold">Count of TS</td>
            <td className="fw-bold">Count of Driver code</td>
            <td className="fw-bold">Count of TS</td>
            <td className="fw-bold">Count of Driver code</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5</td>
            <td>DR2</td>
            <td>1</td>
            <td>DR7</td>
            <td>4</td>
            <td>DR9</td>
            <td>9</td>
            <td>DR3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
