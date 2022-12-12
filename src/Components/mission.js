import React from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

const mission = () => {
  return (
    <div className='p-[100px] space-y-10'>
    <div className=''>
        <h1 className='text-4xl font-mono p-5 uppercase text-cyan-500 font-bold'>mission</h1>
        <p class="mb-3 font-light text-gray-500
         first-line:tracking-widest ">The IIIT Senapati, Manipur undertakes the mission to provide technical education by offering state-of-the-art undergraduate, postgraduate and doctoral programmes with international standards of excellence and with emphasis on research to undertake collaborative projects which offer opportunities for long-term interaction with academia and Information Technology (IT) industry as well as technology development in the area of national importance.</p>
    </div>
    <div className=''>
        <h1 className='text-4xl font-mono uppercase p-5 text-cyan-500 font-bold'>Vision</h1>
        <p class="mb-3 font-light text-gray-500
         first-line:tracking-widest ">To contribute to India and the World through excellence in Information Technology in general; to build leaders and entrepreneurs through transformative and Innovative Education in the context of socio-economic relevance to the North East of India in particular; to serve as a valuable resource for industry and society; and remain a source of pride for all Indians.<br/>
         <br/>
         Manipur, being projected as a Gateway to South East Asia under the Look East Policy of the Government of India, IIIT Senapati, Manipur will be looking for opportunities to spread IT education and to contribute to Human Resource development in its neighboring countries.
         <br/>
         <br/>
         IIIT Senapati, Manipur has a vision of establishing itself as an Institution of excellence in Cyber Security, Cyber Crime and Forensic so that human resource from IIIT Senapati, Manipur will be prepared to face this growing global threat. It also envisages itself for achieving excellence in application of robotics facilitating human life to overcome congenital as well as acquired disabilities.

</p>
    </div>
    <div className=''>
        <h1 className='text-4xl font-mono uppercase p-5 text-cyan-500 font-bold'>objective</h1>
        <ul>
            <li className='flex'><IoIosArrowDropdownCircle className='-rotate-90 text-cyan-500 ' size={30}/>IIIT Senapati, Manipur has been set up as an institute of international standard for offering UG (B.Tech.), PG (M.Tech.) and Ph.D. degree with a unique model of partnership of the Govt. of India in joint partnership with State Government of Manipur and industry partners.</li>
            <li className='flex'><IoIosArrowDropdownCircle className='-rotate-90 text-cyan-500' size={30}/>To provide best-in-class human resources to the growing electronics, manufacturing & design and IT software and services industry in India as well as technology development in the area of national importance such as e-Governance in the medium terms.</li>
            <li className='flex'><IoIosArrowDropdownCircle className='-rotate-90 text-cyan-500 ' size={20}/>The IIIT Senapati, Manipur also aims in foster research and development in advanced engineering and applied sciences in M.Tech. and Ph.D. levels</li>
            <li className='flex'><IoIosArrowDropdownCircle className='-rotate-90 text-cyan-500 ' size={20}/>To have a strong industry interface to harness the multi-dimensional facets of IT, electronics and design in various domains.</li>
            <li className='flex'><IoIosArrowDropdownCircle className='-rotate-90 text-cyan-500 ' size={20}/>To increase the student capacity to meet the growing demands for industry leaders from domestic and international Markets.</li>
            <li className='flex'><IoIosArrowDropdownCircle className='-rotate-90 text-cyan-500' size={20}/>To achieve international character by having provision for intake of a certain percentage of foreign students right from graduation level, especially from the South East Asian and SAARC countries.</li>
            <li className='flex'><IoIosArrowDropdownCircle className='-rotate-90 text-cyan-500 ' size={20}/>To provide mechanism for exchange of faculty with similar institutions of international repute.</li>
            <li className='flex'><IoIosArrowDropdownCircle className='-rotate-90 text-cyan-500 ' size={20}/>To improve the quality of life of people in general and socio economic environment of North East India region in particular as outreach activity.</li>
        </ul>
    </div>
    
   
</div>
  )
}

export default mission