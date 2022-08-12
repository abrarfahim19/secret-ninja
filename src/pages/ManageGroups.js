import React from "react";
import { Link } from "react-router-dom";
import group from "../FakeDB/Groups.json";

const ManageGroups = () => {
  console.log(group);
  const activeGroup = "ring ring-primary ring-offset-base-100";
  return (
    <div>
      <div className="m-4 Groups flex gap-3">
        {group.map((g) => {
          return (
            <div class="avatar">
              <div class="w-16 rounded-full">
                <img src={g.group_image} alt="" />
              </div>
            </div>
          );
        })}
        <div class="avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
            <span class="text-3xl font-bold">+</span>
          </div>
        </div>
      </div>
      {/* task manage button */}
      <div className="m-4 flex justify-between">
        <h2 className="m-4 text-3xl text-center font-bold text-primary">
          SQL Group
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
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-circle w-12 h-12">
                        <img
                          src="https://placeimg.com/192/192/people"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Hart Hagerty</div>
                      <div class="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span class="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button class="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-circle w-12 h-12">
                        <img
                          src="https://placeimg.com/192/192/people"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Hart Hagerty</div>
                      <div class="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span class="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button class="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
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
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-circle w-12 h-12">
                        <img
                          src="https://placeimg.com/192/192/people"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Hart Hagerty</div>
                      <div class="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span class="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button class="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-circle w-12 h-12">
                        <img
                          src="https://placeimg.com/192/192/people"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Hart Hagerty</div>
                      <div class="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span class="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button class="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageGroups;
