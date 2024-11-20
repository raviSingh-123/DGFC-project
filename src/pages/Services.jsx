import React from 'react'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'

function Services() {
  const services = [
    {
      id:1,
      icon:service1,
      title:"Automobile Carrier",
      desc:"DGFC has around 1500+ automobile carrier including car carrier, two wheeler carrier etc. with 100% CMVR compliance and 100% GPS fitted."
      
    },
    {
      id:2,
      icon:service2,
      title:"Good Transporation",
      desc:"DGFC has around 1500 Goods carriers mostly containerized such as 32ft SXL , 32FT MXL & TXL , 28ft TXL, 42ft Containerised Trailers."
    },
    {
      id:3,
      icon:service3,
      title:"Express Services",
      desc:"DGFC also have a customized option of Express Transportation with double driver expediting the movement taking lesser transit time."
    },
    {
      id:4,
      icon:service3,
      title:"Express Services",
      desc:"DGFC also have a customized option of Express Transportation with double driver expediting the movement taking lesser transit time."
    }
  ]
  return (
    <div>
      <section>
        <div className='max-w-[1320px] mx-auto md:px-0 px-2'>
          <h1 className='tetx-[20px] ml-4 md:ml-0 pt-10 font-medium py-4'>DGFC formed in 1958 managed by a team of professionals who are dedicated and sincere to responding promptly to customer demands. Offering professional and personalized services, guidance in all trading process including how to save time by curtailing costs.</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-8'>
            <div className='flex-col py-4'>
              <h1 className='text-center text-[25px] font-bold font-serif bg-black text-white rounded-lg mx-12 md:mx-36 my-4'>Managment</h1>
              <p className='text-[16px] text-balance px-4'>Delhi Gujarat Fleet Carrier is being managed efficiently by huge team of well experienced and professionally qualified personnel in their respective fields of activity. The company's management comprises of Directors and Managers who are having vast experience in logistic operations and general business management.</p>
            </div>
            <div className='flex-col py-4'>
              <h1 className='text-center text-[25px] font-bold font-serif bg-black text-white rounded-lg mx-12 md:mx-36 my-4'>QUALITY</h1>
              <p className='text-[16px] text-balance px-4'>We provide multidisciplinary and comprehensive professional services that enable our clients to succeed across a wide range of goals regardless of size, scope or complexity. We have the professionals and expertise knowledge to understand the dynamics of your business and the services to support your entire supply chain with integrated end-to-end solution from procurement and pick-up of raw materials to the delivery at your customers doorstep. The understanding of our professionals of every aspect of logistics coupled with sophisticated technology work together to create a facility that provides innovative and unusual solutions.</p>
            </div>
          </div>
          <h1 className='text-center py-4 text-[25px] font-bold font-serif text-white bg-black mt-6 mb-4 mx-10 
          md:mx-[500px] rounded-lg'>BEST SERVICES</h1>
          <p className='tetx-[20px] ml-4 md:ml-0  font-medium pb-4'>We offer a comprehensive range of services that are customized to suit the needs and wants of our clients. Our services include :</p>
          <div className='grid grid-cols-1  md:grid-cols-4 gap-4 pb-6'>
            {
              services.map((services)=>(
               <div key={services.id} className='flex-col shadow-xl md:hover:bg-white group pb-3 duration-300'>
                 <img className='rounded md:group-hover:scale-95 md:group-hover:rounded-lg' src={services.icon} alt={services.id} />
                 <h1 className='text-[25px] font-semibold md:group-hover:text-center'>{services.title}</h1>
                 <p className='py-5 md:hidden md:group-hover:block block md:group-hover:text-center'>{services.desc}</p>
               </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
