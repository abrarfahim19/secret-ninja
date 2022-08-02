import React from "react";
import { Link } from "react-router-dom";
import CustomCountDown from "./components/CustomCountDown";
import task from "../FakeDB/Task.json";

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
            {task?.map((t) => {
              return (
                <tr>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src={t.assigned_by.img_link}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">{t.assigned_by.name}</div>
                        <div class="text-sm opacity-50">
                          {t.assigned_by.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {t.name}
                    <br />
                    {t.tags?.map((tag) => {
                      return (
                        <span class="m-1 badge badge-ghost badge-sm">
                          {tag}
                        </span>
                      );
                    })}
                  </td>
                  <td>
                    <CustomCountDown time={t.submission_date} />
                    {/* {t.submission_date} */}
                  </td>
                  <th>
                    <button class="btn btn-ghost btn-xs">
                      <Link to="/dashboard/taskpage">Details</Link>
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submitted;
