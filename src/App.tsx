
import './App.css';
import "./index.css";
import image1 from "./assets/images/logo-inverted.png";
import image2 from "./assets/images/hero.jpg";
import image3 from "./assets/images/logo.png";

{/* <script>
  window.onload = () => {
    const mobilemenuicon = document.getElementById("mobile-menu-button")
    mobileMenuIcon.addEventListener('click', ()=> {
    if(mobileMenuIcon.classList.contains("menu")) {
    mobileMenuIcon.classList.remove(open);
    }else {
      mobileMenuIcon.classList.add("open");
      }
    });


    const ticketsMenuItem = document.getElementById("tickets-menu-item")
    ticketsMenuItem.addEventListener('click', ()=> {
    if(ticketsMenuItem .classList.contains("menu")) {
    ticketsMenuItem.classList.remove(open);
    }else {
      ticketsMenuItem.classList.add("open");
      }
    });
  };
</script> */}

function App() {

  return (
    <>
   <main>
    <header>
      <nav className='sticky flex top-0 bg-gradient-to-r from-rose-500 to-pink-500 '> 

    <div className='flex items-center p-2 gap-2'> 
      <img src={image1} width={50}/>
      <div className='text-2xl font-bold text-zinc-200'> 
        tw:<span className='text-sky-900'>mf</span>

      </div>
    </div>


    <div className='block md:hidden ml-auto pr-4 my-auto cursor-pointer'>
      <button id="mobile-menu-button" className='group peer'>
      <div className='top-0 rounded-full w-8 h-1 bg-zinc-200 group-open:rotate-45 transition-all group-open:top-2 relative'></div>
      <div className='transition-all opacity-100 group-open:opacity-0 bg-zinc-200 rounded-full w-8 h-1 mt-1'></div>
      <div className='top-0 transition-all group-open:rotate-45 bg-zinc-200 rounded-full w-8 h-1 mt-1 group-open:-top-2'></div>
      </button>
      
       </div>

       <div className='peer-open:block hidden absolute bg-gradient-to-r from-rose-500 to-pink-500 left-0 w-full top-[62px]'>
       
       <div className='relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 transtion-colors hover:bg-white/10'>
        <span>Home</span>
       </div>

        <div className='relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 transtion-colors hover:bg-white/10'>
        <span>Lineup</span>
       </div>

        <div className='relative h-full cursor-pointer text-pink-200 hover:text-zinc-200 transtion-colors hover:bg-white/10'>
        <div className='p-4 text-center font-bold'>Tickets</div>
        <div className='hidden group-open:block '>
          <div className='relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out text-center p-4'>
            <span>Single day tickets</span>
          </div>

          <div className='relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out text-center p-4'>
            <span>7 day tickets</span>
          </div>
        </div>
       </div>

       <div className='relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 transtion-colors hover:bg-white/10'>
        <span>supports</span>
       </div>
        
        </div>

    <div className='md:flex hidden flex-1 items-center justify-end'>
      <div className='relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200
      hover:bg-white/10 transition-colors ease-in-out'>
       <span>Home</span> 
        </div>

        <div
        id="ticket-menu-item"
        className='group relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200
      hover:bg-white/10 transition-colors ease-in-out'>
       <span>Lineup</span> 
        </div>


        <div className='relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200
      hover:bg-white/10 transition-colors ease-in-out group'>
       <span>Tickets</span> 
       <div className='absolute top-full right-0 hidden whitespace-nowrap bg-pink-500 rounded-b-md text-right group-hover:block'>
        
        <div className='p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200'>
          <span>single day ticket</span>
        </div>

        <div className='p-4 font-bold  hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200'>
          <span>7 day ticket</span>
        </div>
       </div>
        </div>

        <div className='relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200
      hover:bg-white/10 transition-colors ease-in-out'>
       <span>Support</span> 
        </div>

        {/* <div className='relative flex h-full items-center p-1 cursor-pointer font-bold text-pink-200 hover:text-zinc-200
      hover:bg-white/10 transition-colors ease-in-out'>
       <span>Home</span> 
        </div> */}
      
    </div>




      </nav>


      <div 
       style={{
        backgroundImage: `url(${image2})`,
        // bg-[url({image2})]
      }}
      className='flex flex-col items-center justify-center h-[calc(100vh-200px)] min-h-[400px] bg-cover bg-center bg-fixed'>
<div className='bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md'>
      <div className='relative'>
        <img src={image3} width={175} />
        <div className='items-center flex justify-center mt-[-70px] mb-5'>
          <div className='bg-pink-500 w-14 h-14 rounded-full flex items-center justify-center gap-1'>
              <div className='h-2 w-1 bg-pink-300 rounded-full animate-wavey'></div>
              <div className='h-3 w-1 bg-pink-200 rounded-full animate-wavey '></div>
              <div className='h-4 w-1 bg-pink-100 rounded-full animate-wavey '></div>
              <div className='h-3 w-1 bg-pink-200 rounded-full animate-wavey '></div>
              <div className='h-2 w-1 bg-pink-300 rounded-full animate-wavey '></div>
            
          </div>
        </div>
      </div>

      <div className='text-5xl font-bold'>
        tw:<span className='text-sky-900'>mf</span>
      </div>
</div>

<div className='font-bold mt-3 text-sm'>
  keep me update with news and promotions
</div>

<form className='mt-3 flex gap-2'>
<input type='email' placeholder='Email' className='rounded-sm border border-white/40 bg-white/30 p-2 
backdrop-blur-md font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 
'/>
{/* focus:outline-500 */}
<button 
type='submit'
className='coursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold 
transition-colors hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20'>
Subscribe
</button>


</form>
      </div>

    </header>
   </main>
    </>
  )
}

export default App
