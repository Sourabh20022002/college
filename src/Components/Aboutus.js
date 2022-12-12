import React from 'react'

const Aboutus = () => {
    return (
        <div className='md:flex p-[30px]'>
            <div className=''>
                <h1 className='text-4xl font-mono font-bold'>About us</h1>
                <p class="mb-3 font-light text-gray-500
                 dark:text-gray-400 first-line:uppercase 
                 first-line:tracking-widest first-letter:text-7xl 
                 first-letter:font-bold first-letter:text-gray-900 
                 dark:first-letter:text-gray-100 first-letter:mr-3 
                 first-letter:float-left">Indian Institute of Information Technology Senapati, Manipur is an institution under Ministry of Higher Education, Govt. of India. IIIT Senapati, Manipur was established in 2015 in order to develop Manipur as preferred destination for Information Technology (IT) related manpower and industry. This shall enable Manipur to gear up for providing IT related services as well as high-quality Research & Development in IT. IIITSM offers B.Tech in Computer Science and Engineering (CSE) and Electronics and Communication Engineering (ECE) and PhD in CSE, ECE and Humanities and Basic Sciences from its city campus located at Mantripukhri, Imphal. Although a new institute, the campus has adequate classrooms, laboratories for CSE and ECE, conference hall, playground, hostels, faculty quarters, guest house and own administrative offices. The excellent student-faculty ratio enables 360-degree technical supervision and personal development of each student. IIITSM is one of the 20 IIITs set up by the Government of India in PPP mode. Being an Institute of National Importance IIITSM strives to be attentive to academic needs of every student. Classes are conveniently scheduled between 8 A.M. to 5:00 PM. Institute-wide WiFi connectivity empowered students to explore about the life-changing tools 24x7.</p>
                 <div>
                <a href='http://www.iiitmanipur.ac.in/pages/statute-IIITSM.pdf'><button className='border border-cyan-500 hover:bg-cyan-500 hover:text-white m-2 px-2 py-1 rounded-lg'>Statute of IIIT Senapati, Manipur</button></a>
                <a href='http://iiitmanipur.ac.in/snippets/IIIT-PPP-Act-2017-dtd-09-Aug-2017.pdf'><button className='border border-cyan-500 hover:bg-cyan-500 hover:text-white m-2 px-2 py-1 rounded-lg'> IIIT PPP ACT 2017, Institute of National Importance</button></a>
                <a href='https://www.education.gov.in/en'><button className='border border-cyan-500 hover:bg-cyan-500 hover:text-white m-2 px-2 py-1 rounded-lg'> Ministry of Education, Govt. of India</button></a>
                <a href='https://www.education.gov.in/en/iiits'> <button className='border border-cyan-500 hover:bg-cyan-500 hover:text-white m-2 px-2 py-1 rounded-lg'> List of IIITs</button></a>
                </div>

            </div>
            <div>
                <img className='w-[11000px] h-[400px]' src='http://www.iiitmanipur.ac.in/img/Admin-Block-01-2022-06-23.jpg' />
            </div>
        </div>
    )
}

export default Aboutus