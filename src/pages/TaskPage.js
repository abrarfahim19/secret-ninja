import React, { useState } from "react";
import { IoIosArrowBack, IoMdRefresh } from "react-icons/io";

import Avatar from "./components/Avatar";
import CustomCountDown from "./components/CustomCountDown";
import Editojs from "./components/Editojs";
import { Tooltip } from "./components/Tooltip";

const TaskPage = () => {
  console.log("hello");

  const data = [
    { name: "hello" },
    { name: "hello" },
    { name: "hello" },
    { name: "hello" },
  ];

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
          <CustomCountDown time={"August 29, 2022 12:56:25"} />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magni,
          omnis id ex adipisci labore, sed quaerat fugiat veniam dicta illum
          voluptatem quis eaque facilis dignissimos perferendis dolores ea cum?
          Enim fugit velit, vel quidem voluptas iste aperiam odit minus. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Tenetur facilis
          alias repellendus tempora! Possimus ad totam ratione earum
          perspiciatis quasi voluptate accusamus vel ex. Ut illo harum natus
          perferendis minus.
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
      <div className="mx-8 flex ">
        <div class="avatar-group -z-20  -space-x-6">
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
          <Tooltip data={data}>
            <div class="avatar">
              <div class="w-12">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
          </Tooltip>
        </div>
        <Tooltip data={data}>
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
              <span class="text-xl">+99</span>
            </div>
          </div>
        </Tooltip>
      </div>
    </>
  );
};

export default TaskPage;
