import React, { useState } from "react";
import { IoIosArrowBack, IoMdRefresh } from "react-icons/io";

import Avatar from "./components/Avatar";
import CustomCountDown from "./components/CustomCountDown";
import Editojs from "./components/Editojs";

const TaskPage = () => {
  console.log("hello");

  // const [codeValue, setCodeValue] = useState("");

  return (
    <>
      <div className="flex justify-between mx-2 mr-8 font-bold text-4xl my-3">
        <span className="block">
          {" "}
          <IoIosArrowBack />
        </span>
        <span className="block">
          {" "}
          <IoMdRefresh />
        </span>
      </div>
      <div className="flex justify-between mx-8 align-middle">
        <Avatar name="Riaz Hasan" role="manager" />
        <div className="self-center">
          <CustomCountDown />
        </div>
      </div>
      <div className="mx-8 my-2">
        <p className="text-3xl">
          helolo world how are you.dkjfdkjf ksdfjksdfj ksjfks
        </p>
        <span class="block text-xs font-semibold text-slate-500 ">
          12-12-12
        </span>
      </div>
      <div className="grid grid-cols-2 gap-12 mx-8 my-3 justify-around min-h-1/4">
        <div className="min-h-full min-w-full  p-3 content-center self-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam
          cupiditate aliquid rerum nulla dolorem? Temporibus, quibusdam quam
          voluptatem amet dolorem vero, minus quos blanditiis distinctio porro
          tempore odio enim. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Autem eum exercitationem, natus animi, earum nesciunt molestiae
          numquam porro eaque sunt repellendus? Praesentium aut architecto vero
          placeat. Fugiat expedita corrupti sit.
        </div>
        <div>
          <div
            className="border h-5 rounded-lg ss"
            style={{ minHeight: "90%", overflowY: "scroll" }}
          >
            <Editojs />
            {/* <button className="btn my-4">submit</button> */}
          </div>
          <button className="btn my-2 btn-wide">submit</button>
        </div>
      </div>
      <div className="mx-8">
        <div class="avatar-group -space-x-4">
          <div class="avatar">
            <div class="w-12">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div class="avatar placeholder">
            <div class="w-12 bg-neutral-focus text-neutral-content">
              <span>+99</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskPage;
