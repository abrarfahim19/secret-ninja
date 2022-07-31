import React from "react";
import { Link } from "react-router-dom";
import CustomCountDown from "./components/CustomCountDown";

const Submitted = () => {
  return (
    <div>
      <h2 className="m-4 text-3xl text-center font-bold text-primary">
        Submitted Task
      </h2>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Assigner</th>
              <th>Task</th>
              <th>CountDown</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://placeimg.com/192/192/people"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Riaz Hassan</div>
                    <div class="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Make A responsive website with Redux
                <br />
                <span class="badge badge-ghost badge-sm">Front End</span>
              </td>
              <td>
                <CustomCountDown />
              </td>
              <th>
                <button class="btn btn-ghost btn-xs">
                  <Link to="/dashboard/taskpage">Details</Link>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submitted;
