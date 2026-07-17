import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import "./index.css";
import image1 from "./assets/images/logo-inverted.png";
import image2 from "./assets/images/hero.jpg";
import image3 from "./assets/images/logo.png";

import band1 from "./assets/images/band1.jpg";
import band2 from "./assets/images/band2.jpg";
import band3 from "./assets/images/band3.jpg";
import band4 from "./assets/images/band4.jpg";
import band5 from "./assets/images/band5.jpg";
import band6 from "./assets/images/band6.jpg";
import band7 from "./assets/images/band7.jpg";

{
  /* <script>
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

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const carousel = document.getElementById("carousel");

    previousButton.addEventListener("click", () => {
    const itemWidth = carousel.getElementsByTagName("div")[0].clientWidth;
    carousel.scrollLeft = carousel.scrollLeft - itemWidth;

    nextButton.addEventListener("click", () => {
    const itemWidth = carousel.getElementsByTagName("div")[0].clientWidth;
    carousel.scrollLeft = carousel.scrollLeft + itemWidth;
    });



     const darkModeToggle = document.getElementById("dark-mode-toggle")
    darkModeToggle.addEventListener('click', ()=> {
    if(document.body.classList.contains("dark")) {
    document.body.classList.remove(dark);
    }else {
       document.body.classList.add("dark");
      }
    });
  };
</script> */
}

function App() {
  return (
    <>
      <body className="dark">
        <main className="bg-zinc-200 dark:bg-zinc-900">
          <header className="text-zinc-200">
            {/* <button>
<span className='dark:hidden'>
  <i className='fa-solid fa-sun'></i>
   </span>

   <span className='hidden dark:inline'>
  <i className='fa-solid fa-moon '></i>
 </span>
</button> */}

            <button
              id="dark-mode-toggle"
              className="fixed right-0 top-24 z-10 inline-block w-12 cursor-pointer rounded-l-lg bg-zinc-900 p-2 text-3xl text-zinc-200 dark:bg-zinc-200 dark:text-zinc-900"
            >
              <i className="fa-solid fa-sun dark:hidden"></i>
              <i className="fa-solid fa-moon hidden dark:inline"></i>
            </button>

            <nav className="z-10 sticky flex top-0 bg-gradient-to-r from-rose-500 to-pink-500 ">
              <div className="flex items-center p-2 gap-2">
                <img src={image1} width={50} />
                <div className="text-2xl font-bold text-zinc-200">
                  tw:<span className="text-sky-900">mf</span>
                </div>
              </div>

              <div className="block md:hidden ml-auto pr-4 my-auto cursor-pointer">
                <button id="mobile-menu-button" className="group peer">
                  <div className="top-0 rounded-full w-8 h-1 bg-zinc-200 group-open:rotate-45 transition-all group-open:top-2 relative"></div>
                  <div className="transition-all opacity-100 group-open:opacity-0 bg-zinc-200 rounded-full w-8 h-1 mt-1"></div>
                  <div className="top-0 transition-all group-open:rotate-45 bg-zinc-200 rounded-full w-8 h-1 mt-1 group-open:-top-2"></div>
                </button>

                <div className="peer-open:block hidden absolute bg-gradient-to-r from-rose-500 to-pink-500 left-0 w-full top-[62px]">
                  <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 transtion-colors hover:bg-white/10">
                    <span>Home</span>
                  </div>

                  <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 transtion-colors hover:bg-white/10">
                    <span>Lineup</span>
                  </div>

                  <div className="relative h-full cursor-pointer text-pink-200 hover:text-zinc-200 transtion-colors hover:bg-white/10">
                    <div className="p-4 text-center font-bold">Tickets</div>
                    <div className="hidden group-open:block ">
                      <div className="relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out text-center p-4">
                        <span>Single day tickets</span>
                      </div>

                      <div className="relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out text-center p-4">
                        <span>7 day tickets</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 transtion-colors hover:bg-white/10">
                    <span>supports</span>
                  </div>
                </div>
              </div>

              <div className="md:flex hidden flex-1 items-center justify-end">
                <div
                  className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200
      hover:bg-white/10 transition-colors ease-in-out"
                >
                  <span>Home</span>
                </div>

                <div
                  id="ticket-menu-item"
                  className="group relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200
      hover:bg-white/10 transition-colors ease-in-out"
                >
                  <span>Lineup</span>
                </div>

                <div
                  className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200
      hover:bg-white/10 transition-colors ease-in-out group"
                >
                  <span>Tickets</span>
                  <div className="absolute top-full right-0 hidden whitespace-nowrap bg-pink-500 rounded-b-md text-right group-hover:block">
                    <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200">
                      <span>single day ticket</span>
                    </div>

                    <div className="p-4 font-bold  hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200">
                      <span>7 day ticket</span>
                    </div>
                  </div>
                </div>

                <div
                  className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200
      hover:bg-white/10 transition-colors ease-in-out"
                >
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
              className="flex flex-col items-center justify-center h-[calc(100vh-200px)] min-h-[400px] bg-cover bg-center bg-fixed"
            >
              <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md">
                <div className="relative">
                  <img src={image3} width={175} />
                  <div className="items-center flex justify-center mt-[-70px] mb-5">
                    <div className="bg-pink-500 w-14 h-14 rounded-full flex items-center justify-center gap-1">
                      <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey "></div>
                      <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-200"></div>
                      <div className="h-4 w-1 bg-pink-100 rounded-full animate-wavey animation-delay-[1.5s]"></div>
                      <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-300"></div>
                      <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-[7.5s]"></div>
                    </div>
                  </div>
                </div>

                <div className="text-5xl font-bold">
                  tw:<span className="text-sky-900">mf</span>
                </div>
              </div>

              <div className="font-bold mt-3 text-sm">
                keep me update with news and promotions
              </div>

              <form className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-sm border border-white/40 bg-white/30 p-2 
backdrop-blur-md font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 
"
                />
                {/* focus:outline-500 */}
                <button
                  type="submit"
                  className="coursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold 
transition-colors hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </header>

          {/* <body className="dark"> </body> */}
          <div
            id="dark-mode-toggle"
            className="fixed top-24 right-0 inline-block w-12 cursor-pointer rounded-l-lg bg-zinc-900 dark:bg-zinc-200
text-zinc-200 dark:text zinnc-900 p-2 text-3xl"
          ></div>

          <div className="max-w-screen-lg mx-auto mt-20 text-zinc-900 dark:text bg-zinc-200">
            <h2 className="text-5xl ">Headliners</h2>

            <p>
              Experince the sonic delight from these made-up artists across 7
              days that music fans are calling "one of the many gigs that will
              happen this year"
            </p>
          </div>

          <div className="flex ">
            <div
              id="previous"
              className="text-5xl flex justify-center items-center cursor-pointer p-2 
  relative -top-8"
            >
              <i className="fa fa-angle-left "></i>
            </div>
            <div>
              <div
                id="carousel"
                className="scroll-smooth flex-1 mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto"
              >
                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    style={{
                      backgroundImage: `url(${band1})`,
                    }}
                    className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md
         shadow-black/20 "
                  ></div>
                  <h5 className="mt-2">Corduroy gary</h5>
                  <h6 className="mt-2">1st july 9pm - main stage</h6>
                </div>

                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    style={{
                      backgroundImage: `url(${band2})`,
                    }}
                    className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md
         shadow-black/20 "
                  ></div>
                  <h5 className="mt-2">Corduroy gary</h5>
                  <h6 className="mt-2">1st july 9pm - main stage</h6>
                </div>

                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    style={{
                      backgroundImage: `url(${band3})`,
                    }}
                    className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md
         shadow-black/20 "
                  ></div>
                  <h5 className="mt-2">Corduroy gary</h5>
                  <h6 className="mt-2">1st july 9pm - main stage</h6>
                </div>

                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    style={{
                      backgroundImage: `url(${band4})`,
                    }}
                    className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md
         shadow-black/20 "
                  ></div>
                  <h5 className="mt-2">Corduroy gary</h5>
                  <h6 className="mt-2">1st july 9pm - main stage</h6>
                </div>

                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    style={{
                      backgroundImage: `url(${band5})`,
                    }}
                    className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md
         shadow-black/20 "
                  ></div>
                  <h5 className="mt-2">Corduroy gary</h5>
                  <h6 className="mt-2">1st july 9pm - main stage</h6>
                </div>

                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    style={{
                      backgroundImage: `url(${band6})`,
                    }}
                    className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md
         shadow-black/20 "
                  ></div>
                  <h5 className="mt-2">Corduroy gary</h5>
                  <h6 className="mt-2">1st july 9pm - main stage</h6>
                </div>

                <div className="min-w-[80%] md:min-w-[40%]">
                  <div
                    style={{
                      backgroundImage: `url(${band7})`,
                    }}
                    className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md
         shadow-black/20 "
                  ></div>
                  <h5 className="mt-2">Corduroy gary</h5>
                  <h6 className="mt-2">1st july 9pm - main stage</h6>
                </div>

                {/* <div className='min-w-[80%] md:min-w-[40%]'>
        <div 
        style={{
        backgroundImage: `url(${ band7})`,
        }}
        
        className='h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md
         shadow-black/20 '></div>
         <h5 className='mt-2'>Corduroy gary</h5>
         <h6 className='mt-2'>1st july 9pm - main stage</h6>
      </div> */}
              </div>

                <h2 className="mt-20">Line Up </h2>
                  <p>Follow the timetable and stage to ensure you don't miss your favourite artist</p>
                    <div className=" relative mt-5 rounded-lg bg-zinc-800 py-4 px-2 text-zinc-200 ">
                      <div className="absolute top-0 left-1/2 w-4  -ml-[8px] h-full rounded-full bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-900"></div>
                    </div>


                  <h2 className="mt-20"> Tickets </h2>
                  <table className="mt-5 table w-full border border-zinc-500 border-collapse">
                    <thead className="text-lg font-bold">
                      <td className="border border-zinc-500 p-3">Tickets</td>
                      <td>Price</td>

                    </thead>

                    <tbody>
                      <tr>
                        <td className="border border-zinc-500 py-2 px-3">
                          Single Day Tickets
                        </td>

                        <td className="border border-zinc-500 py-2 px-3">$30</td>
                      </tr>

                      <tr>
                        <td className="border border-zinc-500 py-2 px-3">7 day tickets</td>

                        <td className="border border-zinc-500 py-2 px-3">$100</td>
                      </tr>
                    </tbody>

                    <caption className="caption-bottom">
                      once they're gone, they're gone!
                    </caption>
                  </table>


            </div>
            <div
              id="next"
              className="text-5xl flex justify-center items-center cursor-pointer p-2 
  relative -top-8"
            >
              <i className="fa fa-angle-right "></i>
            </div>
          </div>
        </main>
      </body>

      <div>delete this section</div>
      <div>delete</div>
      <h1>must be delete this section</h1>
      <div>add section</div>
    </>
  );
}

export default App;
