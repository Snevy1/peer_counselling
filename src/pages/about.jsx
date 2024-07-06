import { FaCheckCircle } from "react-icons/fa";
//import RevealOnScroll from "./revealScroll";

function AboutPage(){
    

    return (<div className="text-bannertextColor font-medium font-sans">
        <h2 className="text-center mt-5 font-bold font-serif">About Us</h2>
        <section className=" bg-firstScetion py-6 px-5 mt-5 text-white">
            <h2 className="text-center mb-5 mt-2"><strong>History</strong></h2>
            <p>PCA EGERTON started in 1990. It grew out of a sponsored
                 counsellor training programme and was formed because a specific need of providing professional support for counsellors was identified.</p>
                 <p>PCA responded to the demand for all kinds of counselling services. We grew exponentially and now provide the full range of services to promote professional counselling.</p>
                 <p>Many of our first activities were research projects that focused upon providing counselling services and training. We also concentrated upon young people and their particular needs.</p>
        </section>
        <section className="ml-5 py-5">
            <h2 className="text-center m-5"><strong>VISION & MISSSION</strong></h2>
            <p><strong>Our vision:</strong>To be the leading organisation in professional counselling and adolescent behaviour change through the provision of training, information, research and membership activities in sub-Saharan Africa.</p>
                 <p><strong>Our mission:</strong> To promote opportunities for change and empower and support individuals during the process of change</p>
                 <div className="flex  justify-center">
                 <div>
               <FaCheckCircle className="mt-1 mr-2"/>
               <FaCheckCircle className="mt-1 mr-2"/>
               <FaCheckCircle className="mt-1 mr-2"/>
               <FaCheckCircle className="mt-1 mr-2"/>
               <FaCheckCircle className="mt-1 mr-2"/>
               </div>
                 <ul>
                  
                 <li> Honesty</li>

                  

                  <li>Integrity</li>
                  <li>Respect</li>
                  <li>Empathy</li>
               </ul>


                 </div>

        </section>
        <section className="ml-5">
            <h2 className="text-center my-5"><strong>GOVERNANCE</strong></h2>
            <p>PCA EGERTON is a registered Non-Governmental Organisation. It is governed in accordance with its constitution. The most powerful component in the constitution in 
                the assembly of members and this normally meets once a year when the annual general meeting is held.</p>
                 <p>The annual general meeting elects the board that have a more direct impact upon the way in which PCA runs.
                     It helps to define policy and influences the formation of annual workplans.</p>
                     <p>The more routine administration is controlled through the Executive Director’s 
                        Committee which attends to the day to day issues that arise.</p>
                        <p>The more routine administration is controlled through the Executive Director’s
                             Committee which attends to the day to day issues that arise.</p>
        </section>
        <section className="ml-5 mb-5">
            <h2 className="text-center my-5"><strong>PCA EGERTON</strong></h2>
            <p>Peer Counselling Association Egeton (PCA EGERTON) is a registered University organization. It was registered in 1990 and has 3 major functions:</p>
             <p>PCA invites people with an active interest in counselling to join. Members benefit from a range of activities and services.</p>
        </section>
    </div>)
}

export default AboutPage;