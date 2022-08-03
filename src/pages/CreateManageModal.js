import React from "react";
import SelectOption from "./components/SelectOption";

const CreateManageModal = () => {
  return (
    <>
      <input type="checkbox" id="createModal" class="modal-toggle" />
      <label for="createModal" class="modal cursor-pointer">
        <label class="modal-box relative  h-3/6">
          <label
            for="createModal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Add New Member</h3>
          <div>
            <form>
              <SelectOption />
              <div className="flex justify-end mt-4">
                <button type="submit" className="btn btn-sm ">Add</button>
              </div>
            </form>
          </div>
          <div className="my-8 px-4 py-4 rounded-lg bg-rose-100">
            <span className="font-semibold">Warning:</span> <span className="text-sm">Adding new manager on your group is an security issu.</span>
          </div>
        </label>
      </label>
    </>
  );
};

export default CreateManageModal;
