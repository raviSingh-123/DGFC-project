import React, { useState } from 'react'
import img1 from '../assets/banner.jpg'
import img2 from '../assets/12.jpg'
import img3 from '../assets/truck05.jpg'
import img4 from '../assets/service3copy.jpg'
import img5 from '../assets/65y+.jpg'
// import bg from '../assets/bg.jpg'
import automobile1 from '../assets/automobile1.png'
import img13 from '../assets/car (1).jpg'
import img14 from '../assets/car (2).jpg'
import img15 from '../assets/car (3).jpg'
import img16 from '../assets/car (4).jpg'
import img17 from '../assets/car (5).jpg'
import img18 from '../assets/car (6).jpg'
import img19 from '../assets/car (7).jpg'
import img20 from '../assets/car (8).jpg'
import img21 from '../assets/car (9).jpg'
import img22 from '../assets/car (10).jpg'
import img23 from '../assets/car (11).jpg'
import img24 from '../assets/car (12).jpg'
import img25 from '../assets/car (13).jpg'
import img26 from '../assets/car (14).jpg'
import img27 from '../assets/car (15).jpg'
import img28 from '../assets/car (16).jpg'
import img29 from '../assets/car (17).jpg'
import img30 from '../assets/car (18).jpg'
import img31 from '../assets/auto (1).jpg'
import img32 from '../assets/auto (2).jpg'
import img33 from '../assets/auto (3).jpg'
import img34 from '../assets/auto (4).jpg'
import img35 from '../assets/auto (5).jpg'
import img36 from '../assets/auto (6).jpg'
import img37 from '../assets/auto (7).jpg'
import img38 from '../assets/bat (1).jpg'
import img39 from '../assets/bat (2).jpg'
import img40 from '../assets/bat (3).jpg'
import img41 from '../assets/bat (4).jpg'
import img42 from '../assets/bat (5).jpg'
import img43 from '../assets/bat (6).jpg'


import logic from '../assets/logistic2.png'

//  import img6 from '../assets/1.jpg'
//  import img7 from '../assets/2.jpg'
// import img8 from '../assets/3.jpg'
import Marquee from 'react-fast-marquee';
function Home() {
    const images = [img1, img2, img3]

    const [currentIndex, setCurrentIndex] = useState(0);
    // previous slide ke liye h

    function movePrev() {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }

    // next slide ke liye h 
    function moveNext() {
        setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    }



    const card = [
        {
            id: 1,
            logo: automobile1,
            tittle: 'Automobile Carrier',
            para: '________',
            desc: 'We provide multidisciplinary and comprehensive professional services that enable our clients to succeed.'
        },
        {
            id: 2,
            logo: logic,
            tittle: 'Logistics',
            para: '________',
            desc: 'We have the professionals and expertise knowledge to understand the dynamics of your business and the services.'
        }
    ]






    return (
        <div>
            {/* slidebar ke liye code hai */}
            <button className='absolute top-[50%] translate-y-[-50%] text-[40px] bg-#0E5CAD text-white left-0 px-3 ml-1' onClick={movePrev}>&#10094;</button>
            <div>
                <img className='w-full h-auto' src={images[currentIndex]} alt={`${images[currentIndex]}`} />
                <div className="absolute top-[280px] left-[150px]  text-white  bg-opacity-50 px-4 py-2 rounded-lg text-xl">
                    <p className='font-bold font-serif text-[25px] pb-3'>ONE STOP SOLUTION FOR</p>
                    <p className='font-extrabold font-serif text-[60px] py-3'>NATIONWIDE</p>
                    <p className='font-extrabold font-serif text-[60px] pt-5'>TRANSFORMATION</p>
                </div>
            </div>
            <button className='absolute top-[50%] translate-y-[-50%] text-[40px] bg-#0E5CAD  text-white right-0 px-3 mr-1' onClick={moveNext}>&#10095;</button>

            {/* About dgfc wale part ke liye code h  */}

            <section >
                <div className='max-w-[1320px] mx-auto'>
                    <h1 className='font-serif font-semibold text-[25px] pt-9 pl-[125px]'>ABOUT DGFC</h1>
                    <p className='font-medium pl-32'>__________</p>
                    <div className='grid grid-flow-col grid-cols-2 gap-3 '>
                        <div>
                            <p className='pl-12 text-[18px] font-sans mt-3 ml-14 text-balance'>DGFC is India's leading Integrated Supply Chain & Logistic Solutions Provider with immense and large scale presence all over India. With expertise developed over five decades, its customer centric approach and world class resources which fulfill needs for any customer requirement on a large scale or small scale, DGFC is equipped with an extensive set up of 54 branch offices, a workforce of 4500, large satisfied customers based and a well performing script for our huge list of clients.</p>
                        </div>
                        <div>
                            <img className='w-[400px] h-[250px]  rounded-xl ml-20 mb-9 mt-5' src={img4} alt="img" />
                        </div>
                    </div>
                </div>
            </section>


            {/* experience section ke liye code h  */}
            <section>
                <div className='max-w-[1320px] mx-auto grid grid-flow-col grid-cols-[40%_60%] pb-8'>
                    <img className='px-24 mt-6 w-[600px] h-auto ' src={img5} alt="experienceLogo" />
                    <p className='text-balance mt-10 font-normal '>After 65+ years of having established ourselves as the driving force and leaders of the Indian logistics Industry, we have provided services to all our clients keeping in mind safety, time and quality parameters. Our state of the art maintenance workshop, ensures the safety and on time delivery for our ventures, by keeping all the vehicles and equipments up to date. Our fleet includes a new fleet and professional drivers and workforce, having more than 3000+ vehicles on road which makes our performance even better and reliable for our clients.</p>
                </div>
            </section>

            {/* Largest transport company section h ... */}
            <section>
                <div className='flex items-center justify-center my-4 mb-7'>
                    <p>_________</p>
                    <h1 className='mt-3 px-2 text-[25px] text-red-500 font-bold'>Largest Transport Company</h1>
                    <p>_________</p>
                </div>
                {/* <div style={{ backgroundImage: `url(${bg})` }} className=" bg-center h-screen  opacity-35 backdrop-blur-sm">

                </div> */}
                <div className='flex text-black pl-10 pr-24'>
                    {
                        card.map(({ id, logo, tittle, para, desc }) => (
                            <div key={id} className='flex-col m-4  hover:cursor-pointer group duration-300 shadow-lg text-center '>
                                <img className='w-[700px] h-[500px] pt-4 group-hover:rounded-lg' src={logo} alt={logo} />
                                <h1 className='text-[25px] font-bold group-hover:text-center hover:text-blue-600'>{tittle}</h1>
                                <p className='font-bold group-hover:text-center '>{para}</p>
                                <p className='text-[20px] font-normal group-hover:text-center group-hover:pb-4'>{desc}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* our vision section wala h  */}

            <section>
                <div className='pt-14 pb-14 text-center' >
                    <div className='flex justify-center'>
                        <p className='mt-3'>______________ </p>
                        <h1 className='text-[40px] font-bold text-red-500 px-2'> OUR FUTURE VISION</h1>
                        <p className='mt-3'>______________</p>
                    </div>

                    <p className='px-72 py-6' >Sixty years are behind us in becoming India's leading logistic chain solutions provider with PAN India presence. It is with the amalgamation of many diverse forces that a complete solution emerges. As services are getting more and more specialized and segmented, customized solutions are the need of the day. </p>
                    <p className='px-72 pb-9'>IT IS OUR ENDOURE TO BECOME MAJOR CONTRIBUTOR TO PROVIDE END TO END LOGISTICS SOLUTIONS.
                        EXPANSION OF NETWORK
                        TO CULTIVATE HIGH STANDARD OF BUSINESS BY SAFE & TIMELY DELIVERY OF GOODS
                        TO ACHIEVE INTERNATIONAL STANDARDS, with a FOCUS ON CUSTOMERS, SERVICES & COST REDUCTION</p>


                </div>
            </section>

            {/* Gallery section yaha se hai  */}

            <section>
                <div className='flex justify-center my-4 mb-4'>
                    <p className='mt-3'>________</p>
                    <h1 className=' px-2 text-[40px] font-bold text-red-500'>GALLERY</h1>
                    <p className='mt-3'>________</p>
                </div>
                <div className='pb-44'>
                    <Marquee direction="left" speed={100} delay={4} >

                        <div className="image_wrapper ">
                            <img className='w-[750px] h-[500px] px-2 hover:scale-95 duration-100 shadow-lg' src={img1} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[750px] h-[500px] px-2 hover:scale-95 duration-100 shadow-lg' src={img2} alt="" />
                        </div>
                        <div className="image_wrapper ">
                            <img className='w-[750px] h-[500px] px-2 hover:scale-95 duration-100 shadow-lg' src={img3} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[750px] h-[500px] px-2 hover:scale-95 duration-100 shadow-lg' src={img4} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[750px] h-[500px] px-2 hover:scale-95 duration-100 shadow-lg' src={img5} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[750px] h-[500px] px-2 hover:scale-95 duration-100 shadow-lg' src={img1} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[750px] h-[500px] px-2 hover:scale-95 duration-100 shadow-lg' src={img2} alt="" />
                        </div>

                        <div className="image_wrapper">
                            <img className='w-[750px] h-[500px] px-2 hover:scale-95 duration-100 shadow-lg' src={img3} alt="" />
                        </div>

                    </Marquee>
                </div>
            </section>

            {/* out major clients part here */}
            <section>
                <div className='flex justify-center my-4 mb-4'>
                    <p className='mt-3'>___________</p>
                    <h1 className=' px-2 text-[40px] font-bold text-red-500'>OUR MAJOR CLIENT</h1>
                    <p className='mt-3'>___________</p>
                </div>
                <div className='pb-44'>
                    <Marquee direction="left" speed={250} delay={4} >
                        <div className='flex-row text-center'>
                            <h1 className='font-bold text-[40px] px-4 pr-10'>CAR</h1>
                            <h1 className='font-bold text-[40px] px-4 pr-10'>CARRIER </h1>
                            <h1 className='font-bold text-[40px] px-4 pr-10'>BUSINESS</h1>
                        </div>
                        <div className="image_wrapper ">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img13} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img14} alt="" />
                        </div>
                        <div className="image_wrapper ">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img15} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img16} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img17} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img18} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img19} alt="" />
                        </div>

                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img20} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img21} alt="" />
                        </div>

                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img22} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img23} alt="" />
                        </div>

                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img24} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img25} alt="" />
                        </div>

                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img26} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img27} alt="" />
                        </div>

                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img28} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img29} alt="" />
                        </div>

                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img30} alt="" />
                        </div>
                        
                        <div className='flex-row text-center'>
                            <h1 className='font-bold text-[40px] px-4 pr-10'>AUTO</h1>
                            <h1 className='font-bold text-[40px] px-4 pr-10'>CARRIER </h1>
                            <h1 className='font-bold text-[40px] px-4 pr-10'>BUSINESS</h1>
                        </div>
                        <div className="image_wrapper ">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img31} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img32} alt="" />
                        </div>
                        <div className="image_wrapper ">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img33} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img34} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img35} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img36} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img37} alt="" />
                        </div>
                        
                        <div className='flex-row text-center'>
                            <h1 className='font-bold text-[40px] px-4 pr-10'>TYRE</h1>
                            <h1 className='font-bold text-[40px] px-4 pr-10'>& BATTERY </h1>
                            <h1 className='font-bold text-[40px] px-4 pr-10'>BUSINESS</h1>
                        </div>
                        <div className="image_wrapper ">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img38} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img39} alt="" />
                        </div>
                        <div className="image_wrapper ">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img40} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img41} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img42} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img className='w-[450px] h-[200px] px-2 hover:scale-95 duration-100 shadow-lg' src={img43} alt="" />
                        </div>
                        
                    
                    </Marquee>
                </div>
        </section>


        </div>
    )
}

export default Home
