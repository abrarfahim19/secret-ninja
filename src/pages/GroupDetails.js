import React from "react";
import { Link, useParams } from "react-router-dom";
import group from "../FakeDB/Groups.json";

const GroupDetails = () => {
  const { groupID } = useParams();
  const data = group[0];
  return (
    <div>
      <h2 className="text-3xl">This is {data.id}</h2>
      {/* task manage button */}
      <div className="m-4 flex justify-between">
        <h2 className="m-4 text-3xl text-center font-bold text-primary">
          {data.name}
        </h2>
        <div className="Admin-buttons">
          <Link
            class="m-4 btn btn-active w-3/2 justify-self-end btn-info"
            to="/dashboard/createtask"
          >
            Manage Group
          </Link>
          <Link
            class="m-4 btn btn-active w-3/2 justify-self-end btn-primary"
            to="/dashboard/createtask"
          >
            Task Manage
          </Link>
        </div>
      </div>
      {/* group manager */}
      <div className="m-4 group-manager">
        <h3 className="text-2xl font-bold inline">Group Manager</h3>
        <div class="ml-4 avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
            <span class="text-xl font-bold">+</span>
          </div>
        </div>
        <div className="managers">
          <table className="m-2 table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Bio</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {data.admin.map((a) => {
                return (
                  <tr>
                    <td>
                      <div class="flex items-center space-x-3">
                        <div class="avatar">
                          <div class="mask mask-circle w-12 h-12">
                            <img
                              src={a.img_link}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div class="font-bold">{a.name}</div>
                          <div class="text-sm opacity-50">{a.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {a.bio}
                      <br />
                      <span class="badge badge-ghost badge-sm">{a.status}</span>
                    </td>
                    <td>Green</td>
                    <th>
                      <button class="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* group members */}
      <div className="m-4 group-members">
        <h3 className="text-2xl font-bold inline">Group Memebers</h3>
        <div class="ml-4 avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
            <span class="text-xl font-bold">+</span>
          </div>
        </div>
        <div className="members">
          <table className="m-2 table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Bio</th>
                <th>Task Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {data.users.map((u) => {
                return (
                  <tr>
                    <td>
                      <div class="flex items-center space-x-3">
                        <div class="avatar">
                          <div class="mask mask-circle w-12 h-12">
                            <img
                              src={u.img_link}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div class="font-bold">{u.name}</div>
                          <div class="text-sm opacity-50">{u.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {u.bio}
                      <br />
                      <span class="badge badge-ghost badge-sm">{u.status}</span>
                    </td>
                    <td>
                      {u.submitted} / {data.total_task}
                    </td>
                    <th>
                      <button class="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
