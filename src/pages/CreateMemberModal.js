import React, { useState } from "react";
import SelectOption from "./components/SelectOption";
import { BsFillCheckCircleFill } from 'react-icons/bs'

const CreateMemberModal = ({isSubmit, setIsSubmit}) => {
  // const [isSubmit, setIsSubmit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmit(true)
  }
  return (
    <>
      <input type="checkbox" id="createMemberModal" class="modal-toggle" />
      <label for="createMemberModal" class="modal cursor-pointer">
        <label class="modal-box relative ">
          <label
            for="createMemberModal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className={isSubmit ? 'hidden' : 'block'}>
            <h3 class="text-lg font-bold">Add New Member</h3>
            <div className="mt-2">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Email Address"
                  class="input input-bordered w-full "
                />
                <div className="flex justify-end mt-4">
                  <button type="submit" className="btn btn-sm ">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="my-8 px-4 py-4 rounded-lg bg-rose-100">
              <span className="font-semibold">Warning:</span>{" "}
              <span className="text-sm">
                Adding new manager on your group is an security issu.
              </span>
            </div>
          </div>
          <div className={isSubmit ? ' p-4 rounded-lg bg-green-100 font-extrabold text-2xl' : 'hidden'}>
           <span  className="inline"> <BsFillCheckCircleFill className="inline text-green-500" /> Invitation Sent ! </span>
          </div>
        </label>
      </label>
    </>
  );
};

export default CreateMemberModal;
