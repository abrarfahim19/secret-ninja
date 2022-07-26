import React, { useState } from "react";
import { IoIosArrowBack, IoMdRefresh } from "react-icons/io";

import Avatar from "./components/Avatar";
import CustomCountDown from "./components/CustomCountDown";

import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const TaskPage = () => {
  console.log("hello");
  const [editorState, setEditorState] = useState(()=> EditorState.createEmpty())

  return (
    <>
      <div className="flex justify-between mx-4 font-bold text-4xl my-3">
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
        <Avatar name="Abrar Fahim" role="manager" />
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
          ejkdflks kdjfdks kdsfjdsk ksdjfs dfsdk sdfkjsdkf s skjdfsd skdfjsd
          skdfj sdfjsdkf skdfjs sdkfjsk fksjf sfjskf sdlorem loremsd sdkfjsd
          fskfjslkdfj sdfs jfksdf lsdfjldsfj sdfksdjf sfdsjfs sdfjsdkl jfsdf
          sdkfjsdlkflsdjfl sjdflsejkdflks kdjfdks kdsfjdsk ksdjfs dfsdk
          sdfkjsdkf s skjdfsd skdfjsd skdfj sdfjsdkf skdfjs sdkfjsk fksjf sfjskf
          sdlorem loremsd sdkfjsd fskfjslkdfj sdfs jfksdf lsdfjldsfj sdfksdjf
          sfdsjfs sdfjsdkl jfsdf sdkfjsdlkflsdjfl sjdflsejkdflks kdjfdks
          kdsfjdsk ksdjfs dfsdk sdfkjsdkf s skjdfsd skdfjsd skdfj sdfjsdkf
          skdfjs sdkfjsk fksjf sfjskf sdlorem loremsd sdkfjsd fskfjslkdfj sdfs
          jfksdf lsdfjldsfj sdfksdjf sfdsjfs sdfjsdkl jfsdf sdkfjsdlkflsdjfl
          sjdflsejkdflks kdjfdks kdsfjdsk ksdjfs dfsdk sdfkjsdkf s skjdfsd
          skdfjsd skdfj sdfjsdkf skdfjs sdkfjsk fksjf sfjskf sdlorem loremsd
          sdkfjsd fskfjslkdfj sdfs jfksdf lsdfjldsfj sdfksdjf sfdsjfs sdfjsdkl
          jfsdf sdkfjsdlkflsdjfl sjdfls
        </div>

        <div className="">
          <p className="min-h-10/12 min-w-full border rounded-lg border-primary p-3 bg-slate-400 content-center self-center">
          <Editor editorState={editorState} onChange={setEditorState}/>
          </p>
          <button className="btn my-4">submit</button>
        </div>
      </div>
      <div className="">
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
