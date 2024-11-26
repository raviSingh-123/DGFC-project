import React from 'react'
import warehouse1 from '../assets/warehouse1.jpg'
import warehouse2 from '../assets/warehouse2.jpg'

function Dgfcware() {
  return (
    <>
    <div>
      <div className='md:flex md:flex-2'>
        <div className='px-6 py-6 group'>
          <img className='rounded-lg ' src={warehouse1} alt="warehouse1" />
          <h1 className='lg:group-hover:block hidden text-white text-[40px] absolute top-[230px] left-[220px] font-bold group-hover:bg-black group-hover:rounded-xl p-8 font-sans duration-200'>WAREHOUSE 1</h1>
        </div>
        <div className='px-6 py-6 group'>
          <img className='rounded-lg' src={warehouse2} alt="warehouse2" />
          <h1 className='lg:group-hover:block hidden text-white text-[40px] absolute top-[230px] right-[220px] font-bold group-hover:bg-black group-hover:rounded-xl p-8 font-sans duration-200'>WAREHOUSE 2</h1>
        </div>
      </div>
    </div>

     
<section>

 <h1 className='text-[30px] font-medium text-red-500 text-center'>WAREHOUSE MANAGEMENT SERVICES</h1>
 <p className='text-[20px] p-8 text-black font-medium'>At DGFC, we provide tailored warehousing solutions designed to meet the diverse storage and inventory management needs of our clients. With a network of strategically located Grade A facilities across India, including multi-user facilities in Dharuhera Haryana, we are committed to delivering seamless and efficient warehousing services.  

</p>
<p className='text-[20px] p-8 -mb-10 -mt-16 text-black font-medium'>Our state-of-the-art warehouses, spanning over 10 lakh sqft, are equipped with advanced Warehouse Management Systems (WMS) and Transport Management Systems (TMS). These systems empower us to provide real-time data insights, optimize inventory management, and achieve significant cost efficiencies for our clients.  
</p>
{/* ---keyfeatures */}

<div className="container ml-10  mx-auto px-6 py-8">
      <h2 className="text-left ml-3  text-[20px] font-bold text-red-600">
        KEY FEATURES OF OUR WAREHOUSING SERVICES
      </h2>
      <ul className="list-disc list-inside space-y-4">
        <li className="text-lg text-black">
          <strong>Scalable Storage Solutions:</strong> Spacious, secure, and versatile facilities to accommodate varying storage needs.
        </li>
        <li className="text-lg text-black">
          <strong>Specialized Value-Added Services:</strong> Including labelling, bundling, returns handling, reverse logistics, kitting, and quality checks.
        </li>
        <li className="text-lg text-black">
          <strong>Operational Excellence:</strong> Consistent and reliable service designed to align with clients' operational goals.
        </li>
        <li className="text-lg text-black">
          <strong>Real-Time Intelligence:</strong> Advanced data systems for smarter inventory control and decision-making.
        </li>
      </ul>
    </div>
    <p className='text-[20px] p-8 -mt-10 text-black font-medium'>At DGFC, our warehousing services are built on pillars of trust, efficiency, and customer-centricity. By outsourcing your storage and logistics to us, you can focus on driving growth in your core business areas, knowing your inventory is managed with precision and care. </p> 

<p className='text-[20px] p-8 -mt-16  text-black font-medium'>Choose DGFC for warehousing solutions that deliver reliability, adaptability, and measurable results.</p>

</section> 
</> )
}

export default Dgfcware
