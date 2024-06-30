 import ContactForm from "./form";
 import { FaPhone } from "react-icons/fa";
 import { MdEmail } from "react-icons/md";
 import { MdLocationPin } from "react-icons/md";
 import { FaXTwitter } from "react-icons/fa6";
 import { FaWhatsapp } from "react-icons/fa";
 import { FaInstagram } from "react-icons/fa";
 
 function ContactPage(){
    return(
    <div>
        <section className="font-sans">
        <h2 className="text-center my-5 font-bold"> Contact Us</h2>
        <article>
       <p className="p-5">Thank you for reaching out to Peer Counselling Association Egerton. Although we do not provide direct services online, we'd like to help you
         find the resources to best support you or a loved one. Please take a moment to fill the form below to contacts or connect with on the socials below</p> 
        </article>

        </section>

        <section className="relative p-10 ">
            <article className="grid grid-cols-2 bg-contactColor rounded-3xl  ">
                <div>
                  <h2>This is the first section</h2>
                </div>
                <div>
                <ContactForm />

                </div>

            </article>
            <article className="absolute bg-buttonColor text-whiteColor absolute__contact py-5 px-10 rounded-3xl">
                <div>
                    <h2 className="text-center">Contact Us</h2>
                    <div className="p-6">
                    <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium eaque, architecto odio at quod ut? Possimus eveniet, 
                    iure sed qui distinctio maiores repudiandae eum quaerat nesciunt est perferendis doloremque recusandae.</p>

                    </div>

                </div>
                <div className="py-5">
                    <ul className="grid gap-5">
                        <li className="flex items-center ml-5">
                            <span className="mr-1">
                            <FaPhone/>
                            </span>
                            <span className="font-sans font-semibold text-white">
                            +254746358820
                            </span>


                        </li>
                        <li className="flex items-center ml-5">
                            <span className="mr-1">
                            <MdEmail/>
                            </span>
                            <span className="font-sans font-semibold text-white">
                              peercounsellingegerton@gmail.com
                            </span>


                        </li>
                        <li className="flex items-center ml-5">
                            <span className="mr-1">
                            <MdLocationPin />
                            </span>
                            <span className="font-sans font-semibold text-white">
                             Egerton,Nakuru, Kenya
                            </span>


                        </li>
                    </ul>
                </div>

                <div className="ml-5 mt-5 pb-5">
                    <ul className="flex gap-8">
                        <a href="x.com">
                        <li className=" bg-slate-500 p-2 rounded-md">
                        <FaXTwitter />

                        </li>

                        </a>

                        <a href="whatsapp.com">
                        <li className=" bg-slate-500 p-2 rounded-md">
                            <FaWhatsapp />

                        </li>
                        </a>
                        <a href="instagram.com">
                        <li className=" bg-slate-500 p-2 rounded-md">
                        <FaInstagram  />

                        </li>

                        </a>



                        

                         
                          



                        
                    </ul>
                </div>

            </article>
        </section>
        
    </div>) 
 }

 export default ContactPage;