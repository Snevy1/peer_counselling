
function FooterSection(){
    return(

        <div className="bg-footerColor pb-4">

<div className="grid  grid-cols-2  gap-5   px-5 py-5 sm:px-10 text-white">

<article>
    <h2><a href="/about">About Us</a></h2>
    <p> <a href="/contact">Contact Us</a></p>
    <p><a href="/news">News</a></p>
    <p><a href="https://egerton.ac.ke" target="_blank">University website</a></p>
    <p><a href="/question">Questions & Answers</a></p>
</article>
<article>
    <h2><a href="/about us">Student portal</a></h2>
    <p> <a href="/back">EUMEDSA</a></p>
    <p><a href="/about">EUSDA</a></p>
    <p><a href="/prize">Dean</a></p>
    <p><a href="/FAQ">FAQ</a></p>
</article>

</div>
   <h2 className="text-center text-white"><span>Copyright:</span>&copy; 2024 Peercounselling Association, Egerton University;</h2>

        </div>
        
)
}

export default FooterSection;