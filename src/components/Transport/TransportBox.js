import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
const TransportBox = ({ Bus, Capacity, Route_name }) => {
  return (
    <div className="bg-white rounded-md p-2">
      <h3 className="text-lg text-center my-3 font-bold">
        Route Name: {Route_name}
      </h3>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full text-center">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Time</th>
              <th>Bus</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>8.00</th>
              <td>{Bus[0]}</td>
              <td>{Capacity[0]}</td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <th>9.00</th>
              <td>{Bus[1]}</td>
              <td>{Capacity[1]}</td>
            </tr>
            <tr>
              <th>10.00</th>
              <td>{Bus[2]}</td>
              <td>{Capacity[2]}</td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <th>11.00</th>
              <td>{Bus[3]}</td>
              <td>{Capacity[3]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransportBox;
