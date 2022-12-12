import React, { useState, useEffect } from 'react'
import x from '../Assets/1.jpg'
import d from '../Assets/director.jpg'
import s from '../Assets/s.jpg'
import { GoPrimitiveDot } from 'react-icons/go';
import call from '../Assets/coll.png'
import he from '../Assets/he.png';
import mii from '../Assets/mii.png';
import rti from '../Assets/rti.png';
import scholar from '../Assets/scholarship.png';
import sway from '../Assets/swayam.png'



const Home = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 md:w-full md:h-[480px] h-[480px] mt-5 left-0 right-0 ">

          
          <img alt='image' className="w-full h-[480px] border rounded-b-full" src={x} />
          <h1 className='text-black  p-3 font-bold text-2xl ml-[30px] md:ml-[100px] '>First convocation</h1>
       

        <div className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 h-[5px] '></div>
      </div>
      <div className='pt-[200px] gap-4' >
        <div className='font-light ml-[10px] p-2 text-3xl' >
          Director's Message
        </div>
        <figure class="md:flex shadow-orange-600 hover:shadow-cyan-500 shadow-2xl bg-slate-100 m-6 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={d} alt="" width="384" height="512" />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                Welcome to Indian Institute of Information Technology Senapati, Manipur at Imphal! The Indian Institute of Information Technology Senapati, Manipur is an institute of national importance established by an act of parliament in 2015 under the Ministry of Education, Government of India. The objective of the institute is to develop a technology and manpower for Information Technology related industries and make Manipur as a preferred destination for providing IT-related services and gateway to South-East Asia. <span className='text-blue-500'>more..</span>
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                Prof. Krishnan BASKAR
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Director, IIIT Senapati, Manipur
              </div>
            </figcaption>
          </div>
        </figure>
        <div className='font-light ml-[10px] p-2 text-3xl' >
          News/ Annoucement
        </div>
        <figure class="md:flex shadow-blue-300 hover:shadow-cyan-500 shadow-2xl m-6 border border-black bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <ul className='space-y-2'>
              <li className='flex'> <GoPrimitiveDot /> Awareness Program on Educational Opportunity at IIIT Manipur for school students on 7th December 2022.<a href='https://forms.gle/FChgGAWWhvSLyFN87'><button className='border border-cyan-500 px-2 py-1'> Registration Link</button> </a></li>
              <li className='flex'> <GoPrimitiveDot /> An MoU has been signed with Korean Cultural Center India on November 02, 2022.</li>
              <li className=''> <GoPrimitiveDot /> <span className='font-bold'>Scholarship:</span> Ministry of Social Justice and Empowerment, GoI,<span className='text-blue-500'>Implementation of Top class education scheme for OBC, EBC, DNT during the year 2022-23 will provide full tution fee and non refundable charges with a ceiling of 2.00 Lakhs per annum per student  </span></li>
            </ul>
          </div>
        </figure>
        <div className='font-light ml-[10px] p-2 text-3xl' >
          Events
        </div>
        <figure class=" shadow-green-600 hover:shadow-cyan-500 shadow-2xl  md:flex m-6 border border-black bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <ul className='space-y-2'>
              <li className='flex'><span>  <GoPrimitiveDot /> </span> <span className='mt-[-5px] hover:text-blue-500'><a href='http://www.iiitmanipur.ac.in/snippets/2022-06-21-Yoga-Day.pdf'> Celebrated International Day of Yoga on 21st June 2022 </a></span></li>
              <li className='flex'><span>  <GoPrimitiveDot /> </span> <span className='mt-[-5px] hover:text-blue-500'><a href='http://www.iiitmanipur.ac.in/pages/events/2022.Entre.php'> One day Workshop on Entrepreneurship and Start-Up, 18 May 2022 </a></span></li>
              <li className='flex'><span>  <GoPrimitiveDot /> </span> <span className='mt-[-5px] hover:text-blue-500'><a href='http://www.iiitmanipur.ac.in/snippets/2022-06-21-Yoga-Day.pdf'> Celebrating Cyber Jagrookta Diwas, 04 May 2022 </a></span></li>
              <li className='flex'><span>  <GoPrimitiveDot /> </span> <span className='mt-[-5px] hover:text-blue-500'><a href='http://www.iiitmanipur.ac.in/snippets/2022.03.19-RAET-invitation.pdf'> Awareness Program on Recent Advances in Engineering and Technology, 19 March 2022 </a></span></li>
              <li className='flex'><span>  <GoPrimitiveDot /> </span> <span className='mt-[-5px] hover:text-blue-500'><a href='http://www.iiitmanipur.ac.in/pages/anc/2020.04.14.Bharat.Padhe.jpg'> Bharat Padhe Online to boost online learning </a></span></li>
            </ul>
          </div>
        </figure>
      </div>
      <div className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 h-[5px] '></div>
      <div className='md:flex p-[20px]'>

        <figure class=" shadow-gray-600  shadow-2xl  md:flex m-6 border border-black bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <div className='font-light font-mono ml-[10px] p-2 text-3xl' >
            Achievement
          </div>
          <div className='md:w-[1px] w-[400px] h-[1px] md:h-[360px] bg-black'></div>
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <ul className='space-y-2'>
              <li className='flex'><span>  <GoPrimitiveDot /> </span> Dr. Kishorjit Nongmeikapam received a project grant of Rs. 243.82 Lakhs from MeitY, Govt. of India for the project ISHAAN: A system for Bidirectional Machine Translation between 1) English and Assamese, Bodo, Manipuri, Nepali 2) Manipuri and Hindi 3) Assamese and Bodo</li>
              <li className='flex'><span>  <GoPrimitiveDot /> </span> Mr. Shivam Sharma (18010121), a student of BTech in Computer Science & Engineering and Mr. Aditya Raj (18010210), a student of BTech in Electronics and Communication Engineering bagged 46 Lakhs LPA from Amazon India. </li>
              <li className='flex'><span>  <GoPrimitiveDot /> </span> Mr. Ritu Raj Choudhary (20010115), a 2nd year student of BTech Computer Science & Engineering finds 'bug' in Google.</li>
            </ul>
          </div>
        </figure>
        <figure class="bg-slate-100 hover:shadow-lg shadow-orange-400 rounded-xl p-8 dark:bg-slate-800">
         
                <img class="w-24 h-24 rounded-full mx-auto" src={s} alt="" width="384" height="512" />
                <div className='font-bold text-xl text-blue-400 font-mono pt-2'>
                  Alok kumar
                </div>
                <div className='font-bold text-xl text-blue-400 font-mono '>
                  Computer science and Enginnering
                </div>
          
          <div class="pt-6 space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                100% placement for the 2022 passed out batch of Computer Science & Engineering and Electronics and Communication Engineeering
              </p>
            </blockquote>
            <figcaption class="font-medium">

              <div class="text-slate-700 dark:text-slate-500">
                Highest package: 45.64 LPA
              </div>

            </figcaption>
          </div>
        </figure>
      </div>
      <div className=' md:flex space-y-5 gap-5 md:space-y-1 pl-[150px] pt-[17px] justify-center md:pt-[80px] w-full bg-gradient-to-r from-cyan-500 to-blue-500 h-[150px] '>
        <div>
          <buton className="border font-bold hover:bg-white hover:border-cyan-500 hover:text-cyan-500 border-white text-white px-[144px] md:px-6 py-2">Campus Tour</buton>
        </div>
        <div>
          <buton className="border font-bold hover:bg-white hover:border-cyan-500 hover:text-cyan-500 border-white text-white px-[123px] md:px-6  py-2">Glimpses of Hostel</buton>
        </div>
        <div>
          <buton className="border font-bold hover:bg-white hover:border-cyan-500 hover:text-cyan-500 border-white text-white px-[100px] md:px-6 py-2">Places to visit @Manipur</buton>
        </div>
      </div>
      <div className='hover:opacity-75  '>
        <img src={call} />
        <button className='w-full h-[50px] absolute hover:bg-cyan-500 hover:text-black text-white border border-white bg-black px-2 py-1 rounded-xl'>View Larger Map</button>
      </div>
      <div className='pt-[60px]'>
        <ul className='flex gap-4 justify-center'>
          <li><a href='https://www.education.gov.in/en/higher_education'> <img className='w-[200px] hover:scale-125' src={he} /></a></li>
          <li><a href='https://www.makeinindia.com/'><img className='w-[100px] hover:scale-125' src={mii} /></a></li>
          <li><a href='https://rti.gov.in/'><img className='w-[80px] hover:scale-125' src={rti} /></a></li>
          <li><a href='https://scholarships.gov.in/'><img className='w-[120px] hover:scale-125' src={scholar} /></a></li>
          <li><a href='https://swayam.gov.in/'><img className='w-[100px] hover:scale-125' src={sway} /></a></li>
        </ul>
      </div>
      <div>

      </div>
    </>
  )
}

export default Home