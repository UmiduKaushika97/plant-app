
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

      </nav>
    </header>
   </main>
    </>
  )
}

export default App
