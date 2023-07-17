import React from "react";
import meta from "./img/meta.png";
import { Link } from "react-router-dom";
import portrait from "../Home/img/OIG.jpg"


const EditProfile = () => {
  return (
    <div className="bg-white dark:bg-black py-[50px]">
      <div className="container flex">
        <div className="w-[20%]  2xlL:w-[40%] mdD:hidden"></div>
        <div className="bg-[white]  dark:bg-black py-[30px]">
          <div className="w-[90%] m-auto">
            <div className="flex ml-[-40px] border-2 dark:border-[#262626] justify-between">
              <div className="w-[23%] mdD:hidden border-r dark:border-[#262626] ">
              <div className="meta">
                  <div className="p-4">
                    <div>
                      <img src={meta} alt="" />
                    </div>
                    <div className="mt-[10px]">
                      <p className="text-[#0095F6] font-bold">
                        {" "}
                        Accounts center{" "}
                      </p>
                      <p className="text-[14px] mdD:text-12px ">
                        {" "}
                        Control settings for connected experiences on Instagram,
                        the Facebook app, and Messenger, including sharing
                        stories and posts, and logging in.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="editPrifile border-l-2 pl-4 py-1 border-black dark:border-white ">
                    <h1 className="font-bold"> Edit profile </h1>
                  </div>
                  <div className="editPassword pl-4">
                  <Link to={"/editPassword"}>
                    {" "}
                    <p className="font-bold mt-[20px]">
                      {" "}
                      Change password{" "}
                    </p>{" "}
                  </Link>
                    </div>
                </div>

              </div>
              <div className="w-[70%] mdD:px-[20px]">
                <div className="w-[70%] mdD:w-full mdD:px-[10px]">
                  <div className="flex gap-[20px] items-center">
                    <div className="py-[45px] w-[90px]">
                        <img src={portrait} alt="" className="rounded-[50%]" />
                    </div>
                    <div>
                      <p className="text-[24px] font-bold"> frk_91 </p>
                      <p className="text-[#0095F6]"> Change profile photo </p>
                    </div>
                  </div>
                  <div className="flex  gap-[55px] mt-[20px]">
                    <p className="font-bold text-[18px]"> Name </p>
                    <div>
                      <input
                        placeholder="name"
                        className="pl-[20px] border-[1px] dark:bg-black border-white py-[6px] rounded-[5px]  w-[250px]"
                        type="text"
                      />
                      <p className="mt-[10px]">
                        {" "}
                        To help people discover your account, use the name
                        people know you by, whether it's your full name,
                        nickname, or business name. You can only change your
                        name twice within a 14-day period.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex  gap-[20px] mt-[30px]">
                    <p className="font-bold text-[18px]"> Username </p>
                    <div>
                      <input
                        placeholder="Username"
                        className="pl-[20px] border-[1px] dark:bg-black border-white  py-[6px] rounded-[5px]  w-[250px]"
                        type="text"
                      />
                      <p className="mt-[10px]">
                        {" "}
                        In most cases, you will be able to change your username
                        back to johndoe for an additional 14 days. More
                        information{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex  gap-[20px] mt-[30px]">
                    <p className="font-bold text-[18px]"> Description </p>
                    <div>
                      <textarea className="border-[1px] rounded-[5px] dark:bg-black border-white w-[250px] py-[30px]"></textarea>
                    </div>
                  </div>
                  <div className="flex  gap-[60px] mt-[30px]">
                    <p className="font-bold text-[18px] mt-[50px]"> Email </p>
                    <div>
                      <p className="mt-[10px]">
                        {" "}
                        In most cases, you will be able to change your username
                        back to johndoe for an additional 14 days. More
                        information{" "}
                      </p>
                      <input
                        placeholder="mail@gmail.com"
                        className="pl-[20px] border-[1px] py-[6px] rounded-[5px]  dark:bg-black border-white w-[250px]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex  gap-[45px] mt-[30px]">
                    <p className="font-bold text-[18px]"> Gender </p>
                    <div>
                      <input
                        placeholder="Male"
                        className="pl-[20px] border-[1px] dark:bg-black border-white py-[6px] rounded-[5px]  w-[250px]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[50px] items-center pb-5 mt-[20px]">
                    <button className="bg-[#0095F6] px-[20px] ml-[105px] py-[7px] rounded-[5px] text-[white]">
                      {" "}
                      Send{" "}
                    </button>
                    <p className="text-[#0095F6]">
                      {" "}
                      Temporarily deactivate my account{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
