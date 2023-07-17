import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import portrait from '../Home/img/OIG.jpg'
import portrait2 from '../Home/img/OIG.vqktiUbyA6xa0c.jpg'
import post from '../Home/img/post.jpg'
import post2 from '../Home/img/post2.jpg'
import post3 from '../Home/img/post3.jpg'
import setka from "./сетка.png"



const Profile = () => {
  return (
    <div className='bg-white dark:bg-black m-auto  flex'>
        <div className="w-[30%] xlL:w-[70px] mdD:hidden"></div>
      <div className="container">
        <div className=' w-[85%] smM:w-full smM:px-[10px]  gap-[120px] mdD:gap-[70px] smM:gap-[0px] flex items-center  m-auto'>
          <div className='py-[80px] mdD:py-0 '>
            <img src={portrait} alt="" className='w-[170px] h-[170px] smM:w-[77px] smM:h-[77px]  mdD:w-[100px] mdD:h-[100px]  rounded-[90px]  ' />
          </div>
          <div className=''>
            <div className='flex mdD:flex-col gap-[20px] items-center'>
              <div className='mdD:flex mdD:gap-x-4 mdD:m-auto '>
              <p className='text-[20px] '> frk_91 </p>
              <Link to={"/editPassword"} className='hidden mdD:flex'> <SettingsIcon /> </Link>
              </div>
              <Link to={"/editProfile"}> <button className='border-[2px] dark:border-0 p-[5px] font-medium bg-[#EFEFEF] dark:bg-[#363636] px-[10px] rounded-[7px]'> Редактировать профиль </button> </Link>
              <Link to={"/editPassword"} className='mdD:hidden '> <SettingsIcon  /> </Link>
            </div>
            <div className='flex justify-between mdD:hidden  mt-[20px] gap-8'>
              <p> <span className='font-medium '>173</span>  posts </p>
              <p>  <span className='font-medium '>2897</span> followers </p>
              <p>  <span className='font-medium '>889</span>  following </p>
            </div>
            <div className='mt-[20px] mdD:hidden '>
              <p className='font-bold '> Safrov Farid </p>
            </div>
            <div className='mdD:hidden '> 
              <MoreHorizIcon/>
            </div>
          </div>
        </div>
          <div className='mt-[20px] pl-[50px] smM:pl-[20px] mdD:block  hidden '>
              <p className='font-bold '> Safrov Farid </p>
              <div>
              <MoreHorizIcon/>
            </div>
          </div>

          <div className=' py-[25px] justify-around mdD:flex hidden  mt-[20px] gap-8'>
          <hr />
              <p> <span className='font-medium '>173</span>  posts </p>
              <p>  <span className='font-medium '>2897</span> followers </p>
              <p>  <span className='font-medium '>889</span>  following </p>
            </div>
        <hr />
        {/* <div className=' w-[100px] m-auto bg-[black] mt-[50px]'></div> */}
        <div className="posts py-[15px] flex justify-center gap-2">
        <img src={setka} alt="" className='w-[15px] h-[20px] my-auto  ' />
        <p className='text-center font-bold'> 
        POSTS </p>
        </div>
        <div className='flex flex-wrap pb-[100px] mt-[20px] gap-[20px]'>
          <div className=' w-[330px] h-[330px] 2xlL:w-[300px] 2xlL:h-[300px] mdD:w-[200px] mdD:h-[200px] mdD:m-auto '>
            <img src={portrait} alt="" />
          </div>
          <div className='w-[330px] h-[330px] 2xlL:w-[300px] 2xlL:h-[300px] mdD:m-auto mdD:w-[200px] mdD:h-[200px] ' >
            <img src={portrait2} alt="" />
          </div>
          <div className='w-[330px] h-[330px] 2xlL:w-[300px] 2xlL:h-[300px] mdD:m-auto mdD:w-[200px] mdD:h-[200px] ' >
            <img src={post} alt="" />
          </div>
          <div className='w-[330px] h-[330px] 2xlL:w-[300px] 2xlL:h-[300px] mdD:m-auto mdD:w-[200px] mdD:h-[200px] ' >
            <img src={post2} alt="" />
          </div>
          <div className='w-[330px] h-[330px] 2xlL:w-[300px] 2xlL:h-[300px] mdD:m-auto mdD:w-[200px] mdD:h-[200px] ' >
            <img src={post3} alt="" />
          </div>
          <div className=' w-[330px] h-[330px] 2xlL:w-[300px] 2xlL:h-[300px] mdD:w-[200px] mdD:h-[200px]  mdD:m-auto'>
            <img src={portrait} alt="" />
          </div>
          {/* <div className='py-[170px] w-[365px] bg-[#C4C4C4] mdD:w-[240px] mdD:h-[240px] mdD:m-auto'></div> */}
        </div>
      </div>
    </div>
  )
}

export default Profile