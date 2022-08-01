import React, { useState } from "react";
import { FiEdit, FiCamera } from "react-icons/fi";
import { GrAddCircle } from "react-icons/gr";
const Profile = () => {
  const [selectinfo, setSelectinfo] = useState(1);
  const [edutcationval, setEducationval] = useState(0);

  const [edit, setEdit] = React.useState(false);

  const sidebarcss =
    "p-2 text-left rounded-lg cursor-pointer hover:bg-slate-200";
  const inputcss = "disabled:bg-transparent p-1 bg-slate-200 rounded-md";

  const education = (value) => {
    let data = (
      <div className="grid grid-cols-2 align-middle">
        <div className="self-center">
          <p>Institute</p>
        </div>
        <div>
          <p>details</p>
          <input disabled={!edit} className={`${inputcss}`} />
        </div>
      </div>
    );
    // for(let i=0; i <= value; i++){
    //   data += data
    // }
    return data, data;
  };

  const info = () => {
    let infodetails;
    switch (selectinfo) {
      case 1:
        infodetails = (
          <div className="grid grid-cols-2">
            <div>
              <p>Country</p>
              <input disabled={!edit} className={`${inputcss}`} />
            </div>
            <div>
              <p>State</p>
              <input disabled={!edit} className={`${inputcss}`} />
            </div>
            <div>
              <p>District</p>
              <input disabled={!edit} className={`${inputcss}`} />
            </div>
          </div>
        );
        break;
      case 2:
        infodetails = (
          <>
            <GrAddCircle
              onClick={() => setEducationval(edutcationval + 1)}
              className="cursor-pointer"
            />
            {education(edutcationval)}
          </>
        );
        break;
      case 3:
        infodetails = <p>hello 3 world</p>;
        break;
      case 4:
        infodetails = (
          <div className="grid grid-cols-2">
            <div>
              <p>Phone</p>
              <input disabled={!edit} className={`${inputcss}`} />
            </div>
            <div>
              <p>Email</p>
              <input disabled={!edit} className={`${inputcss}`} />
            </div>
            <div>
              <p>linkedIn</p>
              <input disabled={!edit} className={`${inputcss}`} />
            </div>
            <div>
              <p>Github</p>
              <input disabled={!edit} className={`${inputcss}`} />
            </div>
          </div>
        );
        break;
      default:
        infodetails = "";
    }
    return infodetails;
  };
  return (
    <div className="bg-base-300 py-4">
      <div
        className="flex flex-col relative border mx-4 rounded-lg bg-white shadow-lg"
        style={{ height: "60vh" }}
      >
        <div className="relative h-4/5 overflow-hidden">
          <img
            className="mx-auto w-full"
            alt="profile-big-pic"
            src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/69420998_2427256944217768_1649248071361495040_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=IWg_fxYta74AX8MLaG5&_nc_ht=scontent.fdac31-1.fna&oh=00_AT8y_iev6j5STLdV0x-jybbdcHup6AsA88pbQdSjb9Hb7g&oe=630B36E9"
          />
        </div>
        <div
          className={`${
            edit ? "" : "hidden"
          } rounded-full h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute`}
        >
          <label for="file-input-cover">
            <img
              alt="image-icon"
              src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
            />
          </label>

          <input id="file-input-cover" className="hidden" type="file" />
        </div>
        <div className=" relative  bottom-3 h-1/5  flex pl-4">
          <div class="avatar self-center">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative">
              <img alt="profile" src="https://placeimg.com/192/192/people" />
            </div>
            <div className="flex">
              <div
                className={`${
                  edit ? "" : "hidden"
                } bg-white  rounded-full h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute`}
              >
                <label for="file-input">
                  <img
                    alt="image-icon"
                    src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
                  />
                </label>

                <input id="file-input" className="hidden" type="file" />
              </div>
            </div>
          </div>
          <div className="self-center p-3">
            <div className=" self-center">
              <div className="flex font-extrabold my-1">
                <input
                  value={"samsmusa"}
                  disabled={!edit}
                  className={`${inputcss} w-1/2 max-w-xs text-3xl `}
                />
                <FiEdit
                  className=" cursor-pointer self-center mx-4"
                  onClick={() => setEdit(!edit)}
                />
              </div>
            </div>
            <input
              disabled={!edit}
              value={"djkfdkfjkf dkfjdkfj dfkjdf dkfjdf dkfjdk "}
              className={`${inputcss} w-full`}
              rows={2}
              placeholder="Bio"
            />
          </div>
        </div>
      </div>

      <div className="flex bg-white shadow-md shadow-inner font-semibold text-lg mx-4 my-8  rounded-lg ">
        <div className="w-2/6 p-1 pl-3">
          <p onClick={() => setSelectinfo(1)} className={sidebarcss}>
            Overview
          </p>
          <p onClick={() => setSelectinfo(2)} className={sidebarcss}>
            Work and education
          </p>
          <p onClick={() => setSelectinfo(3)} className={sidebarcss}>
            Places Lived
          </p>
          <p onClick={() => setSelectinfo(4)} className={sidebarcss}>
            Contact and basic info
          </p>
        </div>
        <div className="border-l  pt-3 pl-4 w-4/6">{info()}</div>
      </div>
    </div>
  );
};

export default Profile;
