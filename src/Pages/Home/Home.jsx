import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
// import TelegramIcon from '@mui/icons-material/Telegram';
import like from "./img/like.png";
import likeDark from "../../Layout/img/likeDark.svg"
import comments from "./img/comments.png";
import commentDark from "./img/commentDark.svg";
import share from "./img/share.png";
import shareDark from "./img/shareDark.svg";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import portrait from "./img/OIG.jpg";
import portrait2 from "./img/OIG.vqktiUbyA6xa0c.jpg";
import story1 from "./img/story1.png";
import story2 from "./img/story2.jpg";
import story3 from "./img/story3.jpg";
import story4 from "./img/story4.jpg";
import story5 from "./img/story5.jpg";
import post from "./img/post.jpg";

const Home = () => {
  return (
    <div className="bg-white dark:bg-black py-[20px]">
      <div className="container">
        <div className="  flex  w-[75%] xlL:w-[90%] gap-x-[30px]  mx-auto">
          <div className="w-[40%] xlL:w-[70px] mdD:hidden"></div>
          <div className=" postSection  flex flex-col justify-between">
            <div className=" post1 ">
              <div className="stories mx-auto bg-[white] dark:bg-black gap-x-[15px] px-[20px]  flex py-[20px] border dark:border-[#363636] rounded-[13px] ">
               <div className="story2">
                  <div className="foto border-[1px] border-[#F03CAC] rounded-[40px] p-[2px]">
                    <img
                      src={story3}
                      alt=""
                      className="w-[56px] h-[56px]  rounded-[50%]  border-[#F03CAC] "
                    />
                  </div>
                  <h1 className=" text-center pt-1 text-[14px]">__dilshod</h1>
                </div>
              

                <div className="story3">
                  <div className="foto border-[1px] border-[#F03CAC] rounded-[40px] p-[2px]">
                    <img
                      src={story4}
                      alt=""
                      className="w-[56px] h-[56px]  rounded-[50%]  border-[#F03CAC] "
                    />
                  </div>
                  <h1 className=" text-center pt-1 text-[14px] ">hunter00</h1>
                </div>
                <div className="story2">
                  <div className="foto border-[1px] border-[#F03CAC] rounded-[40px] p-[2px]">
                    <img
                      src={story3}
                      alt=""
                      className="w-[56px] h-[56px]  rounded-[50%]  border-[#F03CAC] "
                    />
                  </div>
                  <h1 className=" text-center pt-1 text-[14px]">__dilshod</h1>
                </div>

                <div className="story4">
                  <div className="foto border-[2px] border-[#F03CAC] rounded-[40px] p-[3px]">
                    <img
                      src={portrait}
                      alt=""
                      className="w-[56px] h-[56px]  rounded-[50%]  border-[#F03CAC] "
                    />
                  </div>
                  <h1 className=" text-center pt-1 text-[14px] ">idibek_002</h1>
                </div>

                <div className="story2">
                  <div className="foto border-[1px] border-[#F03CAC] rounded-[40px] p-[2px]">
                    <img
                      src={story2}
                      alt=""
                      className="w-[56px] h-[56px]  rounded-[50%]  border-[#F03CAC] "
                    />
                  </div>
                  <h1 className=" text-center pt-1 text-[14px] ">zendaYa</h1>
                </div>

                <div className="story2">
                  <div className="foto border-[1px] border-[#F03CAC] rounded-[40px] p-[2px]">
                    <img
                      src={portrait2}
                      alt=""
                      className="w-[56px] h-[56px]  rounded-[50%]  border-[#F03CAC] "
                    />
                  </div>
                  <h1 className=" text-center pt-1 text-[14px] ">alex_Volk</h1>
                </div>
              </div>
              <div className="mt-[20px] border-2 dark:border-[#363636] rounded-[15px]">
                <div className="bg-[white] dark:bg-black py-[7px] ">
                  <div className="w-[90%] m-auto flex justify-between rounded-[13px] items-center">
                    <div className="flex items-center gap-[10px]">
                      <div className=" w-[40px] bg-[#C4C4C4] rounded-[50px]">
                        <img
                          src={portrait}
                          alt=""
                          className="w-[40px] h-[40px] rounded-[50px] "
                        />
                      </div>
                      <p className=""> frk_91 </p>
                    </div>
                    <div>
                      <MoreHorizIcon />
                    </div>
                  </div>
                </div>
                <div className="bg-[#C4C4C4] ">
                  <img src={portrait} alt="" />
                </div>
                <div className="bg-[white] dark:bg-black py-[20px]">
                  <div className="w-[90%] m-auto flex justify-between items-center">
                    <div className="flex gap-[20px]">
                      <div>
                        {" "}
                        <img src={like} alt="" className="dark:hidden " />{" "}
                        <img src={likeDark} alt="" className="hidden dark:flex " />{" "}
                      </div>
                      <div>
                        {" "}
                        <img src={comments} alt="" className="dark:hidden " />{" "}
                        <img src={commentDark} alt=""  className="hidden dark:flex "/>{" "}
                      </div>
                      <div>
                        {" "}
                        <img src={share} alt="" className="dark:hidden "/>{" "}
                        <img src={shareDark} alt="" className="hidden dark:flex " />{" "}
                      </div>
                    </div>
                    <div>
                      <TurnedInNotIcon fontSize="large" />
                    </div>
                  </div>
                  <div className="w-[90%] m-auto py-[10px]">
                    <p className="mt-[5px] font-bold"> 9.999 likes </p>
                    <div className="comment flex">
                      
                      <p className=" font-normal">
                        {" "}
                        <span className="font-bold">frk_91</span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut
                      </p>
                    </div>
                    <p className="mt-[5px] text-[#8E8E8E]"> See 99 comments </p>
                    <p className="mt-[5px] text-[#8E8E8E] text-[12px]">
                      {" "}
                      9 HOURS AGO{" "}
                    </p>
                  </div>
                  <hr />
                  <div className="w-[90%] m-auto flex justify-between pt-[15px]">
                    <div className="flex items-center gap-[10px]">
                      <InsertEmoticonIcon fontSize="large" />
                      <p className="text-[#8E8E8E]"> Add a comment... </p>
                    </div>
                    <p className="text-[#0095F6]"> Post </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post2 border-2  border-[#DBDBDB] dark:border-[#363636]  rounded-[13px] my-[10px]">
              {/* <div className="bg-[white] py-[45px]"></div> */}
              <div className="">
                <div className="bg-[white] dark:bg-black py-[7px]">
                  <div className="w-[90%] m-auto flex justify-between items-center">
                    <div className="flex items-center gap-[10px]">
                      <div className=" w-[40px] bg-[#C4C4C4] rounded-[50px]">
                        <img
                          src={portrait}
                          alt=""
                          className="w-[40px] h-[40px] rounded-[50px] "
                        />
                      </div>
                      <p className=""> frk_91 </p>
                    </div>
                    <div>
                      <MoreHorizIcon />
                    </div>
                  </div>
                </div>
                <div className="bg-[#C4C4C4] ">
                  <img src={portrait2} alt="" />
                </div>
                <div className="bg-[white] dark:bg-black py-[20px] border-2 ">
                  <div className="w-[90%] m-auto flex justify-between items-center">
                  <div className="flex gap-[20px]">
                      <div>
                        {" "}
                        <img src={like} alt="" className="dark:hidden " />{" "}
                        <img src={likeDark} alt="" className="hidden dark:flex " />{" "}
                      </div>
                      <div>
                        {" "}
                        <img src={comments} alt="" className="dark:hidden " />{" "}
                        <img src={commentDark} alt=""  className="hidden dark:flex "/>{" "}
                      </div>
                      <div>
                        {" "}
                        <img src={share} alt="" className="dark:hidden "/>{" "}
                        <img src={shareDark} alt="" className="hidden dark:flex " />{" "}
                      </div>
                    </div>
                    <div>
                      <TurnedInNotIcon fontSize="large" />
                    </div>
                  </div>
                  <div className="w-[90%] m-auto py-[10px]">
                    <p className="mt-[5px] font-bold"> 9.999 likes </p>
                    <div className="comment flex">
                      <p className=" font-normal">
                        <span className="font-bold">frk_91</span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut
                      </p>
                    </div>
                    <p className="mt-[5px] text-[#8E8E8E]"> See 99 comments </p>
                    <p className="mt-[5px] text-[#8E8E8E] text-[12px]">
                      {" "}
                      9 HOURS AGO{" "}
                    </p>
                  </div>
                  <hr />
                  <div className="w-[90%] m-auto flex justify-between pt-[15px]">
                    <div className="flex items-center gap-[10px]">
                      <InsertEmoticonIcon fontSize="large" />
                      <p className="text-[#8E8E8E]"> Add a comment... </p>
                    </div>
                    <p className="text-[#0095F6]"> Post </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post2 border-2  border-[#DBDBDB] dark:border-[#363636]  rounded-[13px] my-[10px]">
              {/* <div className="bg-[white] py-[45px]"></div> */}
              <div className="">
                <div className="bg-[white] dark:bg-black py-[7px]">
                  <div className="w-[90%] m-auto flex justify-between items-center">
                    <div className="flex items-center gap-[10px]">
                      <div className=" w-[40px] bg-[#C4C4C4] rounded-[50px]">
                        <img
                          src={portrait}
                          alt=""
                          className="w-[40px] h-[40px] rounded-[50px] "
                        />
                      </div>
                      <p className=""> frk_91 </p>
                    </div>
                    <div>
                      <MoreHorizIcon />
                    </div>
                  </div>
                </div>
                <div className="bg-[#C4C4C4] ">
                  <img src={post} alt="" />
                </div>
                <div className="bg-[white] dark:bg-black py-[20px] border-2 ">
                  <div className="w-[90%] m-auto flex justify-between items-center">
                  <div className="flex gap-[20px]">
                      <div>
                        {" "}
                        <img src={like} alt="" className="dark:hidden " />{" "}
                        <img src={likeDark} alt="" className="hidden dark:flex " />{" "}
                      </div>
                      <div>
                        {" "}
                        <img src={comments} alt="" className="dark:hidden " />{" "}
                        <img src={commentDark} alt=""  className="hidden dark:flex "/>{" "}
                      </div>
                      <div>
                        {" "}
                        <img src={share} alt="" className="dark:hidden "/>{" "}
                        <img src={shareDark} alt="" className="hidden dark:flex " />{" "}
                      </div>
                    </div>
                    <div>
                      <TurnedInNotIcon fontSize="large" />
                    </div>
                  </div>
                  <div className="w-[90%] m-auto py-[10px]">
                    <p className="mt-[5px] font-bold"> 9.999 likes </p>
                    <div className="comment flex">
                      <p className=" font-normal">
                        <span className="font-bold">frk_91</span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut
                      </p>
                    </div>
                    <p className="mt-[5px] text-[#8E8E8E]"> See 99 comments </p>
                    <p className="mt-[5px] text-[#8E8E8E] text-[12px]">
                      {" "}
                      9 HOURS AGO{" "}
                    </p>
                  </div>
                  <hr />
                  <div className="w-[90%] m-auto flex justify-between pt-[15px]">
                    <div className="flex items-center gap-[10px]">
                      <InsertEmoticonIcon fontSize="large" />
                      <p className="text-[#8E8E8E]"> Add a comment... </p>
                    </div>
                    <p className="text-[#0095F6]"> Post </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" subscribeSide lgG:hidden sm:hidden md:block">
            <div className="flex items-center gap-[20px]">
              <div className="py-[20px] w-[60px]  rounded-[50%]">
                <img src={portrait} alt="" className="rounded-[50%]" />
              </div>
              <div>
                <p className="font-semibold"> frk_91 </p>
                <p className="text-[#737373] "> Safarov Farid </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-[#8E8E8E] "> Suggestions for you </p>
              <p className="font-bold"> See all </p>
            </div>
            <div className="py-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-[10px] items-center">
                  <div className="py-[25px] w-[50px] bg-[#C4C4C4] rounded-[50px]"></div>
                  <div>
                    <p className="font-bold"> janedoe </p>
                    <p> Suggestion for you </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#0095F6] font-bold"> Follow </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-[20px]">
                <div className="flex gap-[10px] items-center">
                  <div className="py-[25px] w-[50px] bg-[#C4C4C4] rounded-[50px]"></div>
                  <div>
                    <p className="font-bold"> janedoe </p>
                    <p> Suggestion for you </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#0095F6] font-bold"> Follow </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-[20px]">
                <div className="flex gap-[10px] items-center">
                  <div className="py-[25px] w-[50px] bg-[#C4C4C4] rounded-[50px]"></div>
                  <div>
                    <p className="font-bold"> janedoe </p>
                    <p> Suggestion for you </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#0095F6] font-bold"> Follow </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-[20px]">
                <div className="flex gap-[10px] items-center">
                  <div className="py-[25px] w-[50px] bg-[#C4C4C4] rounded-[50px]"></div>
                  <div>
                    <p className="font-bold"> janedoe </p>
                    <p> Suggestion for you </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#0095F6] font-bold"> Follow </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-[20px]">
                <div className="flex gap-[10px] items-center">
                  <div className="py-[25px] w-[50px] bg-[#C4C4C4] rounded-[50px]"></div>
                  <div>
                    <p className="font-bold"> janedoe </p>
                    <p> Suggestion for you </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#0095F6] font-bold"> Follow </p>
                </div>
              </div>
              <div className="mt-[40px]">
                <p className="text-[#8E8E8E]">
                  {" "}
                  Information · Help · Prisoner · API · Job · Privacity ·
                  Conditions · Locations · Trending accounts · Hashtags ·
                  Language{" "}
                </p>
                <p className="text-[#8E8E8E] mt-[20px]">
                  {" "}
                  © 2023 INSTAGRAM FROM SIMMXS{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
