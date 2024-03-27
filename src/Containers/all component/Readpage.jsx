import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
function Readpage({ data }) {
  //   console.log(data);
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = data || {};

  return (
    <div className="my-10">
      <div className="flex border-4 rounded-xl flex-col  p-4 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <ul className="flex flex-col divide-y dark:divide-gray-300">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="lg:flex w-full space-x-2 sm:space-x-4">
              <div className="lg:w-96 bg-base-300 flex justify-center rounded-xl  p-5">
                <img
                  className="flex-shrink-0 h-full object-contain  dark:border- rounded outline-none dark:bg-gray-500"
                  src={image}
                  alt="Polaroid camera"
                />
              </div>
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="space-y-5">
                  <h3 className="text-4xl font-semibold leading-snug sm:pr-8">
                    {bookName}
                  </h3>
                  <p className="text-lg font-semibold">By: {author}</p>
                  <div className="md:flex gap-x-10">
                    <div className="sm:flex gap-x-4 items-center text-xl">
                      <div className="flex justify-center mb-3 sm:mb-0">
                      <span className="font-bold">Tag :</span>
                      </div>
                      <ul className="flex flex-wrap gap-x-5">
                        {tags.map((val, index) => (
                          <li
                            className="bg-[#F3F3F3] p-1 rounded-lg font-semibold text-[#23BE0A]"
                            key={index}
                          >
                            #{val}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0 gap-1">
                      <IoLocationOutline size={20} />
                      <h2 className="">Year of publishing : {yearOfPublishing}</h2>
                    </div>
                  </div>
                  <div className="md:flex items-center gap-x-10 text-xl">
                    <h2 className="flex items-center gap-x-2">
                      <GoPeople /> <span>Publisher : {publisher}</span>
                    </h2>
                    <h2 className="flex items-center mt-4 md:mt-0 gap-x-2">
                      <MdOutlineContactPage />
                      <span>page : {totalPages}</span>
                    </h2>
                  </div>
                  {/* btn  */}
                  <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 sm:gap-x-8">
                    <button className="bg-[#E0EEFF] font-semibold py-2 px-3 rounded-lg text-lg">Category : {category}</button>
                    <button className="bg-[#FFF3E0] font-semibold py-2 px-3 rounded-lg text-lg">Rating : {rating}</button>
                    <Link to={`/bookdetails/${bookId}`} className="bg-[#23BE0A] font-semibold text-white py-2 px-3 rounded-lg text-lg">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Readpage;
