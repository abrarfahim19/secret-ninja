import React from "react";
import SelectOption from "./components/SelectOption";

const CreateTask = () => {
  return (
    <div>
      <h2 className="m-4 text-center font-bold text-3xl text-primary">
        Create Task
      </h2>
      <div className="m-4">
        <form>
          <input
            type="text"
            placeholder="Task Title"
            class="input my-2 input-bordered w-full max-w-xs"
          />
          <div className="flex justify-between">
            <SelectOption />
            <input
              type="date"
              placeholder="Task Title"
              class="input my-2 input-bordered w-2/5 max-w-xs"
            />
          </div>
          <textarea
            class="textarea my-2 w-full  h-24 textarea-bordered"
            placeholder="Task Description"
          ></textarea>
          <textarea
            class="textarea my-2 w-full h-12 textarea-bordered"
            placeholder="hints"
          ></textarea>
          <div className="flex justify-center mt-4">
            <button className="btn btn-wide ">save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
