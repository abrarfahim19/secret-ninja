import React from "react";

const CreateModal = () => {
  return (
    <>
      <input type="checkbox" id="createModal" class="modal-toggle" />
      <label for="createModal" class="modal cursor-pointer">
        <label class="modal-box relative">
          <label
            for="createModal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Assign New Task</h3>
          <div>
            <form>
              <input
                type="text"
                placeholder="Task Title"
                class="input my-2 input-bordered w-full max-w-xs"
              />
              <textarea
                class="textarea my-2 w-full  h-24 textarea-bordered"
                placeholder="Task Description"
              ></textarea>
              <textarea
                class="textarea my-2 w-full h-12 textarea-bordered"
                placeholder="hints"
              ></textarea>
              <div className="flex justify-between">
                <input
                  type="date"
                  placeholder="Task Title"
                  class="input my-2 input-bordered w-2/5 max-w-xs"
                />
                <select class="select my-2 select-bordered w-2/5 max-w-xs">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="flex justify-center mt-4">
                <button className="btn btn-wide ">save</button>
              </div>
            </form>
          </div>
        </label>
      </label>
    </>
  );
};

export default CreateModal;
