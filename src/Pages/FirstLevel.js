import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const FirstLevel = () => {
  return (
    <div className="card bg-light p-4 mt-3">
      <h4 style={{ color: "blue" }}>Driver Approval</h4>
      <div className="table-responsive" style={{ fontSize: "13px" }}>
        <table
          id="example"
          className="table table-striped table-bordered custom-table"
        >
          <thead>
            <tr className="table-primary">
              <th
                className="text-center"
                rowSpan={2}
                style={{ verticalAlign: "middle" }}
              >
                Sr.Number
              </th>
              <th
                className="text-center"
                rowSpan={2}
                style={{ verticalAlign: "middle" }}
              >
                Action
              </th>
              <th
                className="text-center"
                rowSpan={2}
                style={{ verticalAlign: "middle" }}
              >
                DLNumber
              </th>
              <th
                className="text-center"
                rowSpan={2}
                style={{ verticalAlign: "middle" }}
              >
                DriverName
              </th>
              <th
                className="text-center"
                rowSpan={2}
                style={{ verticalAlign: "middle" }}
              >
                AadharVerified
              </th>
              <th className="text-center" colSpan={3}>
                Ritco
              </th>
              <th className="text-center" colSpan={3}>
                Tejas
              </th>
              <th className="text-center" colSpan={3}>
                ISCS
              </th>
              <th className="text-center" colSpan={3}>
                Avisar
              </th>
              <th className="text-center" colSpan={4}>
                Pendency
              </th>
            </tr>
            <tr className="table-primary">
              <th className="text-center">FirstTrip</th>
              <th className="text-center">LastTrip</th>
              <th className="text-center">TotalTrip</th>
              <th className="text-center">FirstTrip</th>
              <th className="text-center">LastTrip</th>
              <th className="text-center">TotalTrip</th>
              <th className="text-center">FirstTrip</th>
              <th className="text-center">LastTrip</th>
              <th className="text-center">TotalTrip</th>
              <th className="text-center">FirstTrip</th>
              <th className="text-center">LastTrip</th>
              <th className="text-center">TotalTrip</th>
              <th className="text-center">Ritco</th>
              <th className="text-center">Tejas</th>
              <th className="text-center">ISCS</th>
              <th className="text-center">Avisar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">
                <FontAwesomeIcon icon={faEye} />
              </td>
              <td className="text-center">123</td>
              <td className="text-center">Doe</td>
              <td className="text-center">Yes</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 3</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">
                <FontAwesomeIcon icon={faEye} />
              </td>
              <td className="text-center">123</td>
              <td className="text-center">Doe</td>
              <td className="text-center">Yes</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 3</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">
                <FontAwesomeIcon icon={faEye} />
              </td>
              <td className="text-center">123</td>
              <td className="text-center">Doe</td>
              <td className="text-center">Yes</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 3</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">
                <FontAwesomeIcon icon={faEye} />
              </td>
              <td className="text-center">123</td>
              <td className="text-center">Doe</td>
              <td className="text-center">Yes</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 1</td>
              <td className="text-center">Value 2</td>
              <td className="text-center">Value 3</td>
              <td className="text-center">Value 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FirstLevel;
