
import {
  NavLink,
} from "react-router-dom";

function Banner() {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800 bg-[#F3F3F3] rounded-lg my-10">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between lg:px-10">
          <div className="flex flex-col space-y-10 justify-center p-6 text-center rounded-sm lg:w-6/12 lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Books to freshen up your bookshelf
            </h1>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <NavLink
              to="/listedbook"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 bg-[#23BE0A] text-white dark:text-gray-50"
              >
                View The List
              </NavLink>
           
            </div>
          </div>
          
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="../../../public/bannerBook.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
