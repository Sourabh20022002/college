import React from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'


const Navbar = () => {

  return (
    <div>
      <div className='md:flex justify-evenly mt-[20px]'>
        <div className=' ml-[230px] md:ml-[10px]'><img src="http://www.iiitmanipur.ac.in/img/iiitm-logo.png" /></div>
        <div className='md:ml-[1px] ml-[60px]'>
          <h1 className='text-2xl md:text-4xl'>भारतीय सूचना प्रौद्योगिकी संस्थान सेनापति, मणिपुर </h1>
          <h1 className='text-2xl md:text-4xl'>Indian Institute of Information Technology Senapati, Manipur</h1>
          <p className=' md:text-lg'>(An Institute of National Importance by Act of Parliament, Govt. of India)</p>
          <p className='md:text-lg'>Mantripukhri, Imphal, India - 795002</p>
        </div>
      </div>
      <div className='mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-[50px]  md:h-[50px]'>
        <ul className='flex justify-center text-sm gap-1  md:gap-6'>
          <a href='/'>
           <li  className='text-white pt-2 hover:underline hover:opacity-80 cursor-pointer font-bold text-xl'>Home</li>
          </a>
          <li className='border border-white rounded-b-xl  bg-white px-2 py-2 flex gap-1' >
            <div class="dropdown">
              <button class="dropbtn" className='flex '>About IITM<IoIosArrowDropdownCircle size={25} className=' hover:rotate-180 text-cyan-500' /></button>
              <div class="dropdown-content">
                <a href="/aboutus"><div className=''>About us</div></a>
                <a href="/mission">Mission & Vision</a>
                <a href="/partner">PPP for IIITmanipur</a>
                <a> <div class="dropdown-x">
                  <button class="dropbtn-x"><div className='bg-black p-2 px-[70px] flex '>Managment<IoIosArrowDropdownCircle size={25} className=' -rotate-90 text-cyan-500' /></div></button>
                  <div class="dropdown-content-x">
                    <a href="/director">Director's Message</a>
                    <a href="#">Board of Governer</a>
                    <a href="#">Senate</a>
                    <a>Finance Committe</a>
                    <a>Building and Work Committe</a>
                    <a>Board of Studies</a>
                  </div>
                </div>
                </a>
                <a href='/facilty'>Facilites</a>
                <a href='http://www.iiitmanipur.ac.in/pages/statute-IIITSM.pdf'>Statute of IIITM</a>
                <a href='http://www.iiitmanipur.ac.in/snippets/IIIT-PPP-Act-2017-dtd-09-Aug-2017.pdf'>IIIT PPP ACT 2017</a>
              </div>
            </div></li>
          <li className='border border-white rounded-b-xl  bg-white px-2 py-2 flex gap-1'>
            <div class="dropdown">
              <button class="dropbtn" className='flex '>Academic<IoIosArrowDropdownCircle size={25} className=' hover:rotate-180 text-cyan-500' /></button>
              <div class="dropdown-content">
                <a> <div class="dropdown-x">
                  <button class="dropbtn-x"><div className='bg-black  px-[40px] flex text-lg pt-[10px] '><span>Admission</span><span>Procedure</span> <IoIosArrowDropdownCircle size={30} className=' -rotate-90 text-cyan-500' /></div></button>
                  <div class="dropdown-content-x">
                    <a href="#">B.Tech</a>
                    <a href="#">P.hd</a>
                  </div>
                </div>
                </a>
                <a><div class="dropdown-x">
                  <button class="dropbtn-x"><div className='bg-black  px-[60px] flex text-lg pt-[10px] '><span>Courses</span><span>Offered</span> <IoIosArrowDropdownCircle size={30} className=' -rotate-90 text-cyan-500' /></div></button>
                  <div class="dropdown-content-x">
                    <a href="#">B.Tech</a>
                    <a href="#">P.hd</a>
                  </div>
                </div></a>
                <a href='http://www.iiitmanipur.ac.in/snippets/2022.Academic.Calendar.pdf'>Academic Calendar</a>
                <a href='http://www.iiitmanipur.ac.in/snippets/2022.Holiday.List.pdf'>Holiday List</a>
              </div>
            </div>

          </li>
          <li className='border border-white rounded-b-xl  bg-white px-2 py-2 flex gap-1'>
            <div class="dropdown">
              <button class="dropbtn" className='flex '>Cell Divison<IoIosArrowDropdownCircle size={25} className=' hover:rotate-180 text-cyan-500' /></button>
              <div class="dropdown-content">
                <a href="#"><div className=''>Alumni Assocation</div></a>
                <a href="#">Quality Improvment Cell</a>
                <a href="#">Training and Placement Cell</a>
                <a>Equity Cell</a>
                <a href='http://www.iiitmanipur.ac.in/pages/statute-IIITSM.pdf'>Google Developer Student Club</a>
                <a href='http://www.iiitmanipur.ac.in/snippets/IIIT-PPP-Act-2017-dtd-09-Aug-2017.pdf'>RtI</a>
                <a>Internation Relation Divison</a>
                <a>Research Board</a>
                <a>Innovation and Incubation Cell</a>
                <a>NEP 2020 Implementation Committe</a>
                <a>Grievance Redressel cell</a>
                <a>Anti-ragging Committe</a>
                <a>Anti Sexual harassment Committe</a>
              </div>
            </div>
          </li>
          <li className='border border-white rounded-b-xl  bg-white px-2 py-2 flex gap-1'>
            <div class="dropdown">
              <button class="dropbtn" className='flex '>Cell Divison<IoIosArrowDropdownCircle size={25} className=' hover:rotate-180 text-cyan-500' /></button>
              <div class="dropdown-content">
                <a href="#"><div className=''>Administrative staff</div></a>
                <a href="#">Technical Staff</a>
                <a href="#">Teaching Staff</a>
                <a>B.tech Batch</a>
              </div>
            </div>
            </li>
          <li className='text-white pt-2 font-bold text-xl'>Placement</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar