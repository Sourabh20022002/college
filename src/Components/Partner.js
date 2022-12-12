import React from 'react'

const Partner = () => {
  return (
    <div>
        <div className='px-[40px] pt-[40px]'>
            <img alt='qwertyu' className=' border-4 border-cyan-500 rounded-t-3xl md:rounded-t-full' src='http://www.iiitmanipur.ac.in/img/banner/2021-09-26-Auditorium.jpg'/>
        </div>
        <div className='md:w-[1456px] w-[536px] ml-[40px] mb-3 rounded-b-3xl h-[400px] md:h-[300px] bg-cyan-500'>
          <div className='pt-[20px] ml-[20px] text-3xl text-white'>Partner in PPP for IIIT Senapati, Manipur</div>
          <div>
             <p className='pt-[20px] ml-[20px]  text-white'>
             Indian Institute of Information Techonology Senapati, Manipur is established under public-private-partnership mode with the following agencies/ government to create infrastructure and make the institute sustainable on its own by providing one time seed fund for recurring expenditures. 
             </p>
             <ul className='pt-[20px] ml-[30px]  text-white'>
                <li>*Ministry of Education, Govt. of India - 57.5%</li>
                <li>*Govt. of Manipur - 35.0%</li>
                <li>*Manipur State IT SEZ Development Company - 7.5%</li>
             </ul>
          </div>
        </div>
    </div>
  )
}

export default Partner