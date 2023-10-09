import React from 'react';
import owner from './asset/owner.jpg';
import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaWhatsappSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
    return (
        <div id="contact" className='bg-white dark:text-white  dark:bg-gray-900 p-2 '>
            <h2 className="pb-8 mb-8 border-b border-gray-200  dark:border-gray-700 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Contact Us
            </h2>
            <div className=' flex flex-wrap  mb-2'>
                <div className='w-[500px]'>

                    <img src={owner} className='rounded-lg drop-shadow-2xl mb-6 h-80 m-auto hover:scale-105' alt="Owner" />
                    <p><b>Messgae: </b>Lorem,Porro tempore dignissimos quis ut magnam, repudiandae nesciunt eos est recusandae reprehenderit libero doloribus eaque eius totam voluptatum tenetur, perspiciatis, optio mollitia sed id temporibus inventore? Voluptates, expedita animi laudantium, distinctio asperiores perspiciatis modi  obcaecati, optio blanditiis.</p>

                </div>
                <div className='w-[500px] lg:my-auto lg:px-10  my-16'>
                    <div className="">

                        <h2 className=" mb-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            VijayShree Solar Corporation
                        </h2>
                        <h2><b>Owner Name : </b>VijayShree </h2>
                        <a href="mailto:vijayshreesolar@gmail.com">
                            <h2><b>Email : </b>vijayshreesolar@gmail.com </h2>
                        </a>
                        <h2><b>Contact Number : </b>+91 88888 77777 </h2>
                        <h2><b>Address : </b>Vijay Shree Solar Corporation, Poornima colony , Suvidha nagar in front of mariyam hospital ramganjmandi, Kota, Rajasthan 326519.</h2>
                        <h2 className=" my-8 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Follow Us On Social Media
                        </h2>
                        <div className='flex justify-center'>
                            <a target='_blank' href="https://www.facebook.com/p/Vijay-shree-solar-100064290180874/">
                                <ImFacebook2 className='hover:scale-125 hover:animate-spin text-blue-800 text-4xl mx-4 hover:text-blue-600' />
                            </a>
                            <a target='_blank' href="https://wa.me/917737330685">
                                <FaWhatsappSquare className='hover:scale-125 text-green-500 hover:animate-spin text-4xl mx-4 hover:text-blue-600' />
                            </a>
                            <a target='_blank' href="">
                                <BsInstagram style={{ "background": "linear-gradient(0deg, rgba(251,236,16,1) 0%, rgba(217,37,37,1) 32%, rgba(255,4,195,1) 61%, rgba(10,10,245,1) 91%)" }} className='hover:scale-125 hover:animate-spin rounded-xl  text-4xl mx-4 hover:text-blue-600' />
                            </a>
                            <a target='_blank' href="mailto:vijayshreesolar@gmail.com">
                                <SiGmail className='hover:scale-125 text-red-600 hover:animate-spin text-4xl mx-4 hover:text-blue-600' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-[500px]'>
                    <iframe className='max-h-full drop-shadow-xl h-[500px] w-full rounded-lg' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d19084.765118067433!2d75.95036600675856!3d24.646258431740456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39656d85cc2af005%3A0x34f2c67392827bfc!2sPoornima%20colony%20%2C%20suvidha%20nagar%20in%20front%20of%20mariyam%20hospital%20ramganjmandi%2C%20Kota%2C%20Rajasthan%20326519!3m2!1d24.647607999999998!2d75.9495436!5e0!3m2!1sen!2sin!4v1696818055394!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>

            </div>
        </div>
    )
}

export default Contact;
