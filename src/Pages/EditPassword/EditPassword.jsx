import React from "react";
import meta from "./img/meta.png";
import { Link } from "react-router-dom";
import portrait from "../Home/img/OIG.jpg"

const EditPassword = () => {
  return (
    <div className="bg-white dark:bg-black py-[50px]">
      <div className="container flex">
        <div className="w-[20%] xlL:w-[70px] h-[90vh] mdD:hidden"></div>
        <div className="bg-[white] dark:bg-black py-[30px]">
          <div className="w-[90%] m-auto">
            <div className="flex  border dark:border-[#262626] justify-between">
              <div className="w-[23%] mdD:hidden h-[80vh] border dark:border-[#262626]">
              <div className="Meta p-3 border-b dark:border-[#262626]">
                  <div>
                    <div>
                      <img src={meta} alt="" />
                    </div>
                    <div className="mt-[10px]">
                      <p className="text-[#0095F6] font-bold">
                        {" "}
                        Accounts center{" "}
                      </p>
                      <p className="text-[14px] ">
                        {" "}
                        Control settings for connected experiences on Instagram,
                        the Facebook app, and Messenger, including sharing
                        stories and posts, and logging in.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div >
                  <div className="editProfile p-3">
                  <Link to={"/editProfile"}>
                    {" "}
                    <h1 className="font-bold"> Edit profile </h1>{" "}
                  </Link>
                    </div>
                    <div className="cjangePassword p-2  border-l-2 dark:border-white border-black">
                  <p className="font-bold"> Change password </p>
                      </div>
                </div>
                
              </div>
              <div className="w-[70%] mdD:w-full">
                <div className="w-[70%] mdD:w-full">
                  <div className="flex gap-[20px] items-center">
                    <div className="py-[45px] w-[90px]  ">
                        <img src={portrait} alt="" className="rounded-[50%]" />
                    </div>
                    <div>
                      <p className="text-[24px] font-bold"> frk_91 </p>
                      <p className="text-[#0095F6]"> Change profile photo </p>
                    </div>
                  </div>
                  <div className="flex  mdD:gap-[20px] gap-[60px] mt-[20px]">
                    <p className="font-bold text-[18px]"> Previous password </p>
                    <div>
                      <input
                        placeholder="Previous password"
                        className="pl-[20px] border-[1px] py-[6px]  dark:bg-black border-white rounded-[5px]  w-[250px]"
                        type="text"
                      />
                      {/* <p className='mt-[10px]'> To help people discover your account, use the name people know you by, whether it's your full name, nickname, or business name. You can only change your name twice within a 14-day period. </p> */}
                    </div>
                  </div>
                  <div className="flex mdD:gap-[20px] gap-[92px] mt-[30px]">
                    <p className="font-bold text-[18px]"> New password </p>
                    <div>
                      <input
                        placeholder="New password"
                        className="pl-[20px] border-[1px]  py-[6px] rounded-[5px]  dark:bg-black border-white w-[250px]"
                        type="text"
                      />
                      {/* <p className='mt-[10px]'> In most cases, you will be able to change your username back to johndoe for an additional 14 days. More information </p> */}
                    </div>
                  </div>
                  <div className="flex  gap-[20px] mt-[30px]">
                    <p className="font-bold text-[18px]">
                      {" "}
                      Confirm new password{" "}
                    </p>
                    <div>
                      <input
                        placeholder="Confirm new password"
                        className="pl-[20px] border-[1px]  py-[6px] rounded-[5px]  dark:bg-black border-white w-[250px]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-[20px]">
                    <button className="bg-[#0095F6] px-[20px] ml-[105px] py-[7px] rounded-[5px] text-[white]">
                      {" "}
                      Change password{" "}
                    </button>
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

export default EditPassword;
