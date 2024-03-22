import React from "react";

const Table = () => {
  return (
    <div className="table-responsive" style={{ fontSize: "13px" }}>
      <table
        id="example"
        className="table table-striped table-bordered"
        style={{ width: "100%" }}
      >
        <thead className="table-primary">
          <tr>
            <th className="fw-bold">Company</th>
            <th className="fw-bold">Tripsheet Number</th>
            <th className="fw-bold">Tripsheet Date</th>
            <th className="fw-bold">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ritco</td>
            <td>ABC123</td>
            <td>03-07-2023</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Tejas</td>
            <td>Tabc123</td>
            <td>03-07-2023</td>
            <td className="text-danger">-100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
