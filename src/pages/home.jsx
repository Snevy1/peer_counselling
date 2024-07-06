
import peercounselling from "../assets/peer-counsellors-inaugurated-6.jpeg"
import { IoIosChatbubbles } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa";
import { GiTreeGrowth } from "react-icons/gi";
import { LuMessagesSquare } from "react-icons/lu";
import { ImHeart } from "react-icons/im";
import { LuTarget } from "react-icons/lu";
//import peercounselling2 from "../assets/peer1.jfif";
import peer1 from "../assets/peer1.jpg"
import peer4 from "../assets/peer4.jpg"
import Slideshow from "./slideShow";
import RevealOnScroll from "./revealScroll";




function HomePage(){
    return (
        <div className="bg-white mt-4">
        <main>
            <section
  className="relative bg-cover bg-center pb-5 pt-15 text-white -mt-4"
  style={{ backgroundImage: `url(${peercounselling})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40 shadow-lg"></div>
  <div className="relative  ml-5 sm:ml-10 md:ml-20 welcome-article">
    <article className="pt-10">
    <h2 className="text-h2section1Color text-4xl font-sans font-normal sm:font-bold mb-5">PEER COUNSELLORS ASSOCIATION EGERTON</h2>
      <h2 className="text-h2section1Color text-4xl font-sans font-bold">Need someone to talk to?</h2>
      <h2 className="text-h2section1Color text-4xl font-bold">
        Our counsellors and listeners are standing by.
      </h2>
      <p className="mt-2">PC Egerton connects you to caring listeners </p>
      <p>for free emotional support.</p>
      <button className="bg-buttonColor px-8 py-3 rounded-xl mt-3 mb-3 font-sans font-bold"><a href="https://peer-counselling.vercel.app/contact">Get Started</a></button>
    </article>
    <article>
    </article>
  </div>
  <div className="grid  gap:5 md:grid-cols-3 md:gap-10  ml-5 sm:ml-20 mb-7 relative mt-10">
    <article>
      <IoIosChatbubbles className="text-5xl ml-10" />
      <h2 className="h2section1Color text-4xl mb-2">Free 24/7 Chat</h2>
      <p>PC Egerton connects you to caring listeners for free emotional support.</p>
    </article>
    <article>
      <FaHeadphones className="text-5xl ml-10" />
      <h2 className="h2section1Color text-4xl mb-2">Online peer counselling</h2>
      <p>Confidential online therapy & coaching with licensed counselors.</p>
    </article>
    <article>
      <GiTreeGrowth className="text-5xl  ml-10 sm:ml-20" />
      <h2 className="h2section1Color text-4xl mb-2">Grow at Your Own Pace</h2>
      <p>Explore self-help guides & growth paths for proven tips and advice on how to feel better.</p>
    </article>
  </div>
</section>

            <section className="bg-bannerColor text-bannertextColor py-5 px-10">
                <RevealOnScroll>
                <h1 className="text-center font-bold font-sans">You deserve to be happy.</h1>
                <p>Tap into the Kenyan Universitys' largest network of credentialled and experienced counsellors who can help you with a range of issues 
                    including depression, anxiety, relationships, trauma, grief, and more.</p>
                    <p>With our peer Counsellors, you get the same professionalism and quality you would expect from an in-office counsellor, but with the ability to communicate when and how you want.

</p>
                </RevealOnScroll>
                
            </section>


            <section className="bg-cover bg-center pb-5 pt-15 flex flex-col items-center relative" style ={{backgroundImage: `url(${peer1})`}}>
                <RevealOnScroll>
                <article className="mt-10">
                     <h2 className="text-center text-white font-bold text-3xl font-roboto">Kenyan Universitys' largest mental health community.</h2>
                     <p className="font-sans text-white">For over 15 years we’ve been the place to go to for help, compassion and friendship.
                         Supportive friends and listeners are just a few clicks away.</p>
                         
                </article>
                </RevealOnScroll>
                <RevealOnScroll>
                <article className="bg-white pl-5 pr-20 py-5 mt-5 border-gray-300 border-1 rounded-lg">
                  <div className="flex mt-5">
                  <LuMessagesSquare className="bg-red-400 text-5xl rounded-md" />
                    <div className="ml-5">
                        <h2 className="text-black">1,818,598,937</h2>
                        <p className="text-black">Messages, chat, and therapy sessions</p>
                    </div>
                  </div>
                  <div className="flex mt-5">
                  <ImHeart className="bg-blue-400 text-5xl rounded-md"/>
                    <div className="ml-5">
                        <h2 className="text-black">72,298,116</h2>
                        <p className="text-black">Lives touched around the globe</p>
                    </div>
                  </div>
                  <div className="flex mt-5 mb-6">
                  <LuTarget  className="bg-green-400 text-5xl rounded-md"/>
                    <div className="ml-5">
                        <h2 className="text-black">563,378</h2>
                        <p className="text-black">Trained listeners providing support</p>
                    </div>
                  </div>

                </article>
                </RevealOnScroll>

                <article className="mt-40">

                </article>
            </section>

           {/*  ends here */}

          
            <section className="bg-bannerColor p-5 ">
            <h2 className="text-center mb-5 font-sans font-bold">This is a Slideshow for social media posts, from the very latest</h2>

                <div>
                 <Slideshow />
                </div>

                
            </section>
            

        
        
        <section>
                <article className="testimonial grid gap-5 bg-bannerColor p-5 sm:p-10">

                    <img src={peer4} className="w-full"/>
                    <RevealOnScroll>
                    <div className="ml-5">

                     
<h2 className="text-black">We’re here for teens too</h2>
<p className="text-black">Are you 13-17 years old? We have listeners available especially for teens, 
so you can chat confidentially whenever you need to. You can also join our lively teen community forums and chat rooms to share with peers who understand what you’re going through. Get support and make new friends along the way.

</p>
<button className="bg-buttonColor p-3 rounded-md mt-4"><a href="/contact">Get Started</a></button>
</div>


                    </RevealOnScroll>

                </article>

                
                <article className="testimonial grid gap-5 bg-section2Color p-5 sm:p-10">
                    <div className="ml-5">
                        <h2>PROFESSIONAL THERAPY</h2>
                        <h3 >Get support with online therapy</h3>
                        <p >Want a little extra help? You can get ongoing support, treatment and guidance from a licensed therapist when you sign up for online therapy.

</p>
                        <button className="bg-buttonColor p-3 rounded-md mt-4"><a href="/contact">Get Started</a></button>
                    </div>
                    <div >
                        <div className="relative border-black border-6">

                          <img src={peer4} className="w-full" />
                          <RevealOnScroll>
                          <article className="absolute bg-white rounded-md bottom-0  sm:top-0 sm:bottom-0 p-4 sm:mr-10 mb-5 sm:-ml-10  w-52">
                            <h2>Jane</h2>
                            <p>I thank all the students that I have helped as a peer counsellor in the university</p>
                        </article>
                        </RevealOnScroll>

                        
                        </div>
                    
                    </div>
                    
                </article>
                    
                
                

                
                <article className="testimonial grid gap-5 bg-nearFooterColor p-5 sm:p-10">
                <img src={peer4} className="w-full"/>
                <RevealOnScroll>
                <div className="ml-5">
                        <h2>THERAPY FOR ANY ISSUE</h2>
                        <h3>Our licensed therapists are standing by to help</h3>
                        <p>They are experts in many conditions, treatment approaches and navigating life’s challenges. Your therapist will provide:

</p>
                        <button className="bg-buttonColor p-3 rounded-md mt-4"><a href="/contact">Get Started</a></button>
                    </div>

                </RevealOnScroll>
                    
                   
                </article>

                
                

            </section>
            

      

            
        </main>


    </div>
    )
}

export default HomePage;