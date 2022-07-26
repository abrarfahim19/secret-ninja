import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div class="collapse">
        <input type="checkbox" class="peer" />
        <div class="collapse-title bg-secondary text-primary-content peer-checked:bg-secondary-focus peer-checked:text-secondary-content text-center font-semibold rounded-md">
          Login with Social Media
        </div>
        <div class="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-center rounded-md">
          <div className="pt-3 flex flex-col">
            <a
              className="pt-2 pb-2 rounded-md font-bold text-lg hover:bg-primary"
              href=""
            >
              Google
            </a>
            <a
              className="pt-2 pb-2 rounded-md font-bold text-lg hover:bg-primary"
              href=""
            >
              Facebook
            </a>
            <a
              className="pt-2 pb-2 rounded-md font-bold text-lg hover:bg-primary"
              href=""
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
