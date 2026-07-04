
import './App.css';
import "./index.css";
import image1 from "./assets/images/logo-inverted.png";



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
      <div>
      <div className='bg-zinc-200 rounded-full w-8 h-1'></div>
      <div className='bg-zinc-200 rounded-full w-8 h-1 mt-1'></div>
      <div className='bg-zinc-200 rounded-full w-8 h-1 mt-1'></div>
      </div>
      
       </div>

    <div className='md:flex hidden flex-1 items-center justify-end'>
      <div className='relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200
      hover:bg-white/10 transition-colors ease-in-out'>
       <span>Home</span> 
        </div>

        <div className='relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200
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
    </header>
   </main>
    </>
  )
}

export default App
